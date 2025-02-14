import { useState } from "react";

import "../styles/styles.css";
import "../styles/loops.css";

// interface KeywordProps {
//   word?: string;
// }
export default function Keyword({name}) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <button
      className={`keyword ${isClicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}
