import Router from "next/router";
import { Main } from "../../components/Main";
import { IAbout } from "../../interfaces/title";

interface AboutPageProps {
  title: string
}

export default function About({ title }: AboutPageProps) {
  console.log(title);
  const handleClickLink = () => Router.push("/");
  return (
    <Main title={"About Page"}>
      <h1>{title}</h1>

      <button onClick={handleClickLink}>Go back to home</button>
    </Main>
  );
}

About.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_URL}/about`);
  const data: IAbout = await res.json();

  return {
    title: data.title,
  };
};
