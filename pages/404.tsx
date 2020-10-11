import Link from "next/link";
import { Main } from "../components/Main";
import classes from "../styles/error.module.scss";

const ErrorPage = () => {
  return (
    <Main>
      <h1 className={classes.error}>Error 404</h1>
      <p>
        Please{" "}
        <Link href="/">
          <a>go back</a>
        </Link>{" "}
        to safety
      </p>
    </Main>
  );
};

export default ErrorPage;
