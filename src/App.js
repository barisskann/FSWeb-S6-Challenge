import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Karakter from "./components/Karakter";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const render = async () => {
      const total = await axios.get("https://swapi.dev/api/people/");
      return total;
    };
    render()
      .then((res) => setData(res.data))
      .catch((err) => err);
  }, []);
  return (
    <div>
      <Karakter data={data}></Karakter>
    </div>
  );
};

export default App;
