import Link from "next/link";
import { Main } from "../components/Main";

export default function Index() {
  return (
    <Main title={'Home Page'}>
      <h1>Hello from Next.JS</h1>
      <p>
        <Link href={"/about"}>
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href={"/posts"}>
          <a>Posts</a>
        </Link>
      </p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    </Main>
  );
}
