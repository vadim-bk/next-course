import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Main } from "../../components/Main";
import { NextPageContext } from "next";
import { IPost } from "../../interfaces/post";

interface PostPageProps {
  post: IPost
}

const Post = ({ post: serverPost }: PostPageProps) => {
  const router = useRouter();

  const [post, setPost] = useState(serverPost);

  useEffect(() => {
    async function load() {
      const res = await fetch(`http://localhost:4200/posts/${router.query.id}`);
      const data = await res.json();
      setPost(data);
    }
    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <Main>
        <p>Loading...</p>
      </Main>
    );
  }
  return (
    <Main>
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <Link href={"/posts"}>
        <a>Back to all posts</a>
      </Link>
    </Main>
  );
};

export default Post;

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string
  }
}

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  if (!req) {
    return { post: null };
  }

  const res = await fetch(`${process.env.API_URL}/posts/${query.id}`);
  const post: IPost[] = await res.json();

  return {
    post,
  };
};

// export async function getServerSideProps({ query, req }) {
//   const res = await fetch(`http://localhost:4200/posts/${query.id}`);
//   const post = await res.json();

//   return {
//     props: {
//       post,
//     },
//   };
// }
