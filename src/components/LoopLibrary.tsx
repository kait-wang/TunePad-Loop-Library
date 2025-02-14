import Loop from "./Loop";
import FilterWindow from "./FilterWindow";

import { useState } from "react";

function LoopLibraryTitle() {
  return <div id="loop-library-title">TunePad Library</div>;
}

//component for loops and sounds buttons
function LoopsSoundsButtons({ value, onButtonClick, isClicked }) {
  return (
    <button
      className={`loops-sounds-buttons ${isClicked ? "clicked" : ""}`}
      onClick={onButtonClick}
    >
      {value}
    </button>
  );
}
//makes sure only one button is clicked at a time
function TrackTypeButton() {
  const [types, setTypes] = useState([true, false]);
  function handleClick(i) {
    if (types[i] == true) {
      return;
    }
    const new_types = [...types].reverse();
    setTypes(new_types);
  }
  return (
    <div id="track-type-button">
      <LoopsSoundsButtons
        value="Loops"
        onButtonClick={() => handleClick(0)}
        isClicked={types[0]}
      />
      <LoopsSoundsButtons
        value="Sounds"
        onButtonClick={() => handleClick(1)}
        isClicked={types[1]}
      />
    </div>
  );
}

function TrackCount() {
  return <h2 className="track-count">Showing 1029 tracks</h2>;
}

function FilterButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className={`filter-button ${isOpen ? "clicked" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa-solid fa-sliders"></i>
      </button>
      <FilterWindow open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

//note to self: you can't pass values UP, but you can pass usestate functions DOWN. 
//that's why SortButton has the consts, and the children take in the useState functions
//to manipulate it when they're clicked on.  
function Chevron({open}) {
  if (open) {return <i className="fa-solid fa-chevron-up"></i>}
  else {return <i className="fa-solid fa-chevron-down"></i>}
}
function SortOption({name, onOptionClick}) {
  return <button className="sort-option" onClick={onOptionClick}>{name}</button>
}
function SortDropdown({open, onSelect1, onSelect2}) {
  if (!open) {return null;}
  function handleOnSelect(name) {
    onSelect1(name);
    onSelect2();  
  }
  return (
    <div className="sort-dropdown">
      <SortOption name="Most Recent" onOptionClick={()=>handleOnSelect("Most Recent")}/>
      <SortOption name="Most Popular" onOptionClick={()=>handleOnSelect("Most Popular")}/>
      <SortOption name="Name" onOptionClick={()=>handleOnSelect("Name")}/>
      <SortOption name="Most Remixed" onOptionClick={()=>handleOnSelect("Most Remixed")}/>
      <SortOption name="Duration (shortest)" onOptionClick={()=>handleOnSelect("Duration (shortest)")}/>
    </div>
  )
}

function SortButton() {
  const [isClicked, setIsClicked] = useState(false); 
  const [sortChoice, setSortChoice] = useState("Most Recent")
  return (
    <div>
      <div className="sort-button-container">
        <button className="sort-button" onClick={() => setIsClicked(!isClicked)}>{sortChoice}</button>
        <Chevron open={isClicked}/>
      </div>
      <SortDropdown open={isClicked} onSelect1={setSortChoice} onSelect2={() => setIsClicked(!isClicked)}/>
    </div>
  );
}

function FilterSortButtons() {
  return (
    <div className="tracks-sort-container">
      <TrackCount />
      <SortButton />
    </div>
  );
}

function Search() {
  return (
    <div className="search-container">
      <i className="fas fa-search"></i>
      <input type="text" placeholder="Search" id="search-input"></input>
    </div>
  );
}

export default function LoopLibrary({ data, open, onClose }) {
  if (!open) {
    return null;
  }
  return (
    <div className="loop-library">
      <LoopLibraryTitle />
      <TrackTypeButton />
      <div className="search-filter-container">
        <Search />
        <FilterButton />
      </div>
      <FilterSortButtons />
      <Loop data={data}/>
      <button className="loop-button close-button" onClick={onClose}>
        <i className="fas fa-xmark"></i>
      </button>
    </div>
  );
}
