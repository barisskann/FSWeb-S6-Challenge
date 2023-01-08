import index from "../data";
import React, { useState } from "react";
function Buton() {
  const [click, setClick] = useState();
  const handleClick = (item) => {
    index.map((item) => (item.disable = false));
    setClick(item.id);
  };
  index.filter((item) => {
    if (item.id == click) {
      item.disable = true;
    }
    return item;
  });

  let render = index.map((item) => {
    return (
      <div key={item.id} onClick={() => handleClick(item)}>
        <button className="btn-item" disabled={item.disable}>
          {item.id}
        </button>
      </div>
    );
  });

  return <div className="btn">{render}</div>;
}
export default Buton;
