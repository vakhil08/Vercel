import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [data, setData] = useState("");
  const [loader, setLoader] = useState(false);

  const Submit = () => {
    setLoader(true)
    let body = {
      name: data,
    };
    axios
      .post("https://67b5a84a07ba6e59083ddc0d.mockapi.io/users", body)
      .then((resp) => {
        if (resp?.status == 201) {
            setLoader(false)
          alert("Data Added Succesfully");
          setData("");
        }
      });
  };
  return (
    <>
      {loader ? (
        <span>Loading.........</span>
      ) : (
        <div>
          Login
          <br />
          <input
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />{" "}
          <br />
          <button type="button" onClick={Submit}>
            Submit
          </button>
        </div>
      )}
    </>
  );
}

export default Login;
