import "./../css/Karakter.css"
import React from "react";
import ExpandleButton from "./ExpandleButton";
import { useState } from "react";
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
      <div>
        <ExpandleButton item={item}>{item.name}</ExpandleButton>
      </div>
    );
  });
  return (
    <div>
      <div className="input">
        <input onChange={(e) => handleChange(e)}></input>
      </div>
      {render}
    </div>
  );
}
export default Karakter;
