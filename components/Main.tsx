import Head from "next/head";
import Link from "next/link";

export const Main = ({ children, title = "Next App" }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="keywords" content="Next, Next.js, React, JavaScript" />
        <meta name="description" content="This is tutorial for Next" />
        <title>{title} | Next Course</title>
      </Head>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          top: 0;
          left: 0;
          right: 0;
          background: darkblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        nav a {
          color: #fff;
          text-decoration: none;
        }
        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  );
};
