import React, { useState } from "react";

const Header = () => {
  const [done, setDone] = useState("");
  const [list, setList] = useState([]);
  const handleFilter = (index) => {
    let filtered = list.filter((item, i) => i != index);
    setList(filtered);
    console.log("Clicked");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="To be complete"
        id="fname"
        name="fname"
        onChange={(e) => setDone(e.target.value)}
      ></input>
      <button
        onClick={() => {
          setList([...list, done]);
          setDone(" ");
          console.log(done);
        }}
      >
        {" "}
        Submit
      </button>

      {list.map((list, index) => {
        return (
          <div key={index}>
            <li>
              {list}
              <button
                onClick={() => {
                  handleFilter(index);
                }}
              >
                Delete
              </button>
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
