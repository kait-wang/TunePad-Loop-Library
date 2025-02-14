import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import styles from '../styles/definitions.module.css'; 

function Star() {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(!isClicked);
  }
  return (
    <button
      className={`loop-button star-button ${isClicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      <i className="far fa-star"></i>
    </button>
  );
}

function Instruments() {
  //return <div className={`${styles['gadget-icon']} ${styles.piano}`}></div>;
  const className = `${styles['gadget-icon']} ${styles.piano}`;
  return <div className={className}></div>;
}

function LoopTitle({ name }) {
  return <div className="loop-name">{name}</div>;
}

function ExpandChevron({open}) {
  if (open) {return <i className="fas fa-chevron-up"></i>}
  else {return <i className="fas fa-chevron-down"></i>}
}

function ExpandButton() {
  const [isClicked, setIsClicked] = useState(false); 
  function handleClick() {
    setIsClicked(!isClicked); 
  }
  return (
    <div>
      <button className="loop-button expand-button" onClick={handleClick}>
      <ExpandChevron open={isClicked} />
      </button>
      <LoopInfo open={isClicked} />
    </div>
  );
}

function LoopInfo({open}) {
  if (!open) {return null}
  return (
    <div className="loop-info">
      by Kaitlyn
      120 bpm | C Major | 4/4 Time
      Last MOdified: 8/7/14
    </div>
  )
}

function AddButton() {
  function handleClick() {}
  return (
    <button className="loop-button add-button" onClick={handleClick}>
      <i className="fa-regular fa-plus"></i>
      Add
    </button>
  );
}

export default function Loop({ data }) {
  return (
    <div className="loop-summary">
      <Instruments />
      <LoopTitle name="song name yay" />
      <ExpandButton />
      <Star />
      <AddButton />
    </div>
  );
}
