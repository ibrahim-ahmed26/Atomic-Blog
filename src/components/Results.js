import { usePost } from "./PostProvider";

export function Results() {
  const { posts } = usePost();
  return <p>🚀 {posts.length} atomic posts found</p>;
}
