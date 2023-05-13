import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Link to={"/"}>
        {" "}
        <h1>Home</h1>
      </Link>
      <Link to={"/notes"}>
        {" "}
        <h1>Notes</h1>
      </Link>
      <Link to={"/create"}>
        {" "}
        <h1>Create</h1>
      </Link>
    </div>
  );
};

export default Navbar;
