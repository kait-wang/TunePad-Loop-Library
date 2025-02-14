import Keyword from "./Keyword"; 

export default function FilterCategory({ name }) {
  return (
    <div className="filter-category">
      <h3 className="filter-category-name">{name}</h3>
      <Keyword name="Acoustic Guitar"/>
      <Keyword name="Drums"/>
      <Keyword name="Electric Guitar"/>
      <Keyword name="Synth"/>
      <Keyword name="Bass"/>
      <Keyword name="Piano"/>
      <Keyword name="Organ"/>
      <Keyword name="Pop Synth"/>
    </div>
  );
}
