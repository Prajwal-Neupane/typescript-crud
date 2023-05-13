import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// interface EditUserProps {
//     _id?: string;
//     title: string;
//     text: string;
// //
import { useNavigate } from "react-router-dom";

const EditNote = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [singleUserData, setSingleUserData] = useState({
    title: "",
    text: "",
  });
  const handleEditSubmit = async () => {
    const response = await axios.put(`http://localhost:3001/server/note/${id}`);
    console.log(response.data);

    navigate("/notes");
  };

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLTextAreaElement;
    // const { name, value } = e.target;

    setSingleUserData({
      ...singleUserData,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    const fetchSingleUserData = async () => {
      const response = await axios.get(
        `http://localhost:3001/server/note/${id}`
      );
      setSingleUserData(response.data);
    };
    fetchSingleUserData();
    // console.log(id);
  }, [id]);

  return (
    <div>
      <form onSubmit={handleEditSubmit}>
        <input
          style={{ width: "20rem", height: "50px" }}
          type="text"
          name="title"
          placeholder="Title"
          value={singleUserData.title}
          onChange={(e) => handleChange(e)}
          autoComplete="off"
        />{" "}
        <br /> <br /> <br />
        <textarea
          name="text"
          cols={50}
          rows={9}
          placeholder="Text"
          value={singleUserData.text}
          onChange={(e) => handleChange(e)}
        ></textarea>
        <br />
        <br />
        <br />
        <button type="submit">{"Update"}</button>
      </form>
    </div>
  );
};

export default EditNote;
