export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    categories: string[];
    publisher: string;
    publishedDate: string;
    pageCount: number;
    language: string;
    imageLinks: { thumbnail: string };
  };
}
