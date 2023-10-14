import React, { useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import { HiOutlineSearch } from "react-icons/hi";

import {
  OrderBy,
  Query,
  setCategory,
  setQuery,
  setSort
} from "../../store/slices/Filter";

type FormValues = {
  q: Query;
  orderBy: OrderBy;
};

const Form = () => {
  const filter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const [fetch, setFetch] = useState(false);

  const [formValues, setFormValues] = useState<FormValues>(filter);

  useEffect(() => {
    dispatch(setQuery(formValues.q.query));
    dispatch(setCategory(formValues.q.category));
    dispatch(setSort(formValues.orderBy));
  }, [fetch]);

  const pressEnter: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.code === "Enter" && e.shiftKey == false) {
      e.preventDefault();
      setFetch((prev) => !prev);
    }
  };

  const handeQueryChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormValues({
      ...formValues,
      q: { ...formValues.q, query: e.target.value }
    });
  };

  const handleCategoryChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    setFormValues({
      ...formValues,
      q: { ...formValues.q, category: e.target.value as any }
    });
    setFetch((prev) => !prev);
  };

  const handleOrderByChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    setFormValues({ ...formValues, orderBy: e.target.value as any });
    setFetch((prev) => !prev);
  };

  return (
    <div className=" flex align-middle justify-center flex-col ">
      <form className="mx-auto w-fit">
        <div className=" flex align-middle justify-center border-b-2 border-gray-200 py-2 w-full">
          <input
            name="search"
            type="search"
            value={formValues.q.query}
            onChange={handeQueryChange}
            onKeyDown={pressEnter}
            className=" outline-none w-80"
          />
          <div
            className=" text-2xl cursor-pointer"
            onClick={() => setFetch((prev) => !prev)}
          >
            <HiOutlineSearch className="h-full" />
          </div>
        </div>
        <div className="flex justify-between mt-6 gap-x-10">
          <select
            name="category"
            className=" cursor-pointer border-2 rounded-md"
            onChange={handleCategoryChange}
          >
            <option defaultChecked value="all">
              All
            </option>
            <option value="art">Art</option>
            <option value="biography">Biography</option>
            <option value="computers">Computers</option>
            <option value="history">History</option>
            <option value="medical">Medical</option>
            <option value="poety">Poety</option>
          </select>
          <select
            name="sort"
            className=" cursor-pointer border-2 rounded-md"
            onChange={handleOrderByChange}
          >
            <option defaultChecked value="relevance">
              Relevance
            </option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
