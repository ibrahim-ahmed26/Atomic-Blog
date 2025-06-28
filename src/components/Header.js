import { Results } from "./Results";
import { SearchPosts } from "./SearchPosts";
import Button from "./Button";
import { usePost } from "./PostProvider";
export function Header() {
  const { onClearPosts } = usePost();
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <Button onClick={onClearPosts}>Clear posts</Button>
      </div>
    </header>
  );
}
