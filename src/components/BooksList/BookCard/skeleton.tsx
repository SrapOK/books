import ContentLoader from "react-content-loader";
import { IContentLoaderProps } from "react-content-loader";

const BookSkeleton = (props: IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    width={300}
    height={350}
    viewBox="0 0 300 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="25" y="25" rx="0" ry="0" width="250" height="300" />
  </ContentLoader>
);

export default BookSkeleton;
