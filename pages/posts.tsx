import { NextPageContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Main } from "../components/Main";
import { IPost } from "../interfaces/post";
import { IPosts } from "../interfaces/posts";
import { IRootState } from "../interfaces/state";
import { getPosts } from "../store/actions/postAction";

export default function Posts({ serverPosts }) {
  const [postsState, setPostsState] = useState(serverPosts)

  const dispatch = useDispatch()

  const { posts } = useSelector((state: IRootState) => state.posts)

  useEffect(() => {
    if (!serverPosts) {
      dispatch(getPosts(setPostsState))
    }
  }, []);

  if (!postsState) {
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
        {postsState?.map((post: IPost) => (
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
    return { serverPosts: null };
  }

  const res = await fetch(`${process.env.API_URL}/posts`);
  const serverPosts: IPosts = await res.json();

  return {
    serverPosts,
  };
};
