import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "../Spinner";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
