import FilterCategory from "./FilterCategory";
import Keyword from "./Keyword";

export default function FilterWindow({ open, onClose }) {
  if (!open) {
    return null;
  }
  return (
    <div id="filter-window">
      <h3 className="filter-window-title">Filter</h3>
      <h6 id="filter-window-description">Select keywords</h6>
      <FilterCategory name="Instrument" />
      <FilterCategory name="Genre" />
      <button className="filter-close-button" onClick={onClose}>
        <i className="fas fa-xmark"></i>
      </button>
    </div>
  );
}
