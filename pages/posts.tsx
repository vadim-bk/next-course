import { NextPageContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Main } from "../components/Main";
import { IPost } from "../interfaces/post";

interface PostPageProps {
  posts: IPost[]
}

export default function Posts({ posts: serverPosts } : PostPageProps) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const res = await fetch(`${process.env.API_URL}/posts`);
      const data = await res.json();
      setPosts(data);
    }
    if (!serverPosts) {
      load();
    }
  }, []);

  if (!posts) {
    return (
      <Main>
        <p>Loading...</p>
      </Main>
    );
  }

  return (
    <Main>
      <Head>
        <title>Post Page | Next Course</title>
      </Head>

      <h1>Posts Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Main>
  );
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return { posts: null };
  }

  const res = await fetch("http://localhost:4200/posts");
  const posts: IPost[] = await res.json();

  return {
    posts,
  };
};
