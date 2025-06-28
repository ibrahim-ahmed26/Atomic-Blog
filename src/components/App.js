import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Archive } from "./Archive";
import { Footer } from "./Footer";
import { PostProvider } from "./PostProvider";
import Button from "./Button";

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);
  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );
  return (
    <section>
      <Button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        classname={"btn-fake-dark-mode"}
      >
        {isFakeDark ? "☀️" : "🌙"}
      </Button>
      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

export default App;
