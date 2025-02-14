import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/styles.css";
import "./styles/loops.css";
import "./styles/filter.css";
import styles from "./styles/definitions.module.css"; 

import LoopLibrary from "./components/LoopLibrary";
import { useState } from "react";

import loopData from "./loop-data.json"; 

//opening loop library
function LoopOpen() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}> Open Loop Library </button>
      <LoopLibrary data={loopData} open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <LoopOpen />
    </div>
  );
}