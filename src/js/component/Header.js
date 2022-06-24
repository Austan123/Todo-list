import React, { useState, useEffect } from "react";

const Header = () => {
  const [fine, setFine] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const handleFilter = async (index) => {
    let filtered = list.filter((item, i) => i != index);
    console.log(filtered);
    if (filtered.length !== 0) {
      return [""];
    }

    const response = await fetch(
      "https://assets.breatheco.de/apis/fake/todos/user/statestan305",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filtered),
      }
    )
      .then((response) => {
        response.status === 200 ? setList(filtered) : "";
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  //PUT

  const addTask = async (fine) => {
    let task = [...list, { label: fine, done: false }];
    const response = await fetch(
      "https://assets.breatheco.de/apis/fake/todos/user/statestan305",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }
    )
      .then((response) => {
        response.status === 200 ? setList(task) : "";
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  //GET
  const apiGet = async function () {
    const response = await fetch(
      "https://assets.breatheco.de/apis/fake/todos/user/statestan305"
    );
    setList(await response.json());
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="To be complete"
        id="fname"
        name="fname"
        value={fine}
        onChange={(e) => setFine(e.target.value)}
      ></input>
      <br></br>
      {error}
      <button
        onClick={() => {
          if (fine == "") {
            setError("can not be empty");
            console.log("clicked");
            return alert("this feild can not be empty");
          } else {
            addTask(fine);

            setFine("");
          }
        }}
      >
        {" "}
        Submit
      </button>

      {list.map((task, index) => {
        return (
          <div key={index}>
            <li>
              {task.label}
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
