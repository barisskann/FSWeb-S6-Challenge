import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
function ExpandleButton(params) {
  const { children, item } = params;
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  let total = (
    <div>
      <div>
        <div>{item.gender}</div>
        <div>{item.height}</div>
        <div>{item.mass}</div>
        <div>{item.birth_year}</div>
        <div>{item.eye_color}</div>
        <div>{item.hair_color}</div>
        <div>{item.skin_color}</div>
      </div>
    </div>
  );
  return (
    <div>
      <div>
        {children}
        <div>{click && total}</div>
      </div>
      <div onClick={handleClick}>
        {click ? <AiOutlineUp /> : <AiOutlineDown />}
      </div>
    </div>
  );
}
export default ExpandleButton;
