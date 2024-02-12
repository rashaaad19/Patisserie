import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
const ErrorPage = () => {
  let title = "An error occured :(";
  let message = "Something went wrong !";
  const error = useRouteError();
  console.log(error.data.message);
  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Page not found.";
    message = "Could not find your page !";
  }
  return (
    <>
      <PageContent title={title}>
        <h3>{message}</h3>
      </PageContent>
    </>
  );
};

export default ErrorPage;
