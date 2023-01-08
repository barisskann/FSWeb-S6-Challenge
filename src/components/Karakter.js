import "./../css/Karakter.css";
import React from "react";
import ExpandleButton from "./ExpandleButton";
import { useState } from "react";
import Button from "./ButtonPage";
function Karakter(params) {
  let { data } = params;
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  data = data.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  const render = data.map((item) => {
    return (
      <div key={item.name}>
        <ExpandleButton key={item.name} item={item}>
          {item.name}
        </ExpandleButton>
      </div>
    );
  });
  return (
    <div className="karakter">
      <div className="input">
        <input className="input" onChange={(e) => handleChange(e)}></input>
      </div>
      <div className="sw">Star Wars Major characters List</div>
      <div className="karakter-item">{render}</div>

      <Button />
    </div>
  );
}
export default Karakter;
