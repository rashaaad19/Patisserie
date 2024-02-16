import { Link, useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import classes from "./ErrorPage.module.css"
const ErrorPage = () => {
  let title = "An error occured :(";
  let message = "Something went wrong !";
  const error = useRouteError();
  // console.log(error.data.message);
  console.log(error.status)
  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Page not found.";
    message = "Could not find your page !";
  }
  return (
    <>
    <div className={classes.container}>
      <PageContent title={title}>
        <h3>{message}</h3>
        <Link to={"/"}>Go to home page</Link>
      </PageContent>
      </div>
    </>
  );
};

export default ErrorPage;
