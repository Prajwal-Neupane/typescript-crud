// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// interface NotesProps {
//   _id?: string;
//   title: string;
//   text: string;
// }

// const Create = () => {
//   // const { id } = useParams();
//   const navigate = useNavigate();
//   const [notesData, setNotesData] = useState<NotesProps>({
//     title: "",
//     text: "",
//   });
//   // const [updateNotesData, setUpdateNotesData] = useState<NotesProps>();
//   // const fetchSingleNoteData = async () => {
//   //   const response = await axios.get(`http://localhost:3001/server/note/${id}`);
//     // setUpdateNotesData(response.data);
//   };
//   // console.log(updateNotesData);
//   // updateNotesData
//   //   ? console.log("Updated data is here")
//   //   : console.log("Updated data is not here");

//   // useEffect(() => {
//   //   id && fetchSingleNoteData();
//   // }, [id]);

//   const handleChange = (
//     e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.currentTarget;
//     // console.log(e.currentTarget.value);
//     setNotesData({
//       ...notesData,
//       [name]: value,
//     });
//   };
//   const handleAddSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
// e.preventDefault();
// const { title, text } = notesData;
// const response = await axios.post("http://localhost:3001/server/notes", {
//   title,
//   text,
// });
// response.status === 200
//   ? alert("Notes created")
//   : alert("Failed to create notes");
// setNotesData({
//   title: "",
//   text: "",
// });
// navigate("/notes");
//   };
//   // const handleUpdateSubmit = async (
//   //   e: React.SyntheticEvent<HTMLFormElement>
//   // ) => {
//   //   e.preventDefault();
//   //   const { title, text } = notesData;
//   //   console.log({ title, text });
//   // };

//   return (
//     <div>
// <form onSubmit={handleAddSubmit}>
//   <input
//     style={{ width: "20rem", height: "50px" }}
//     type="text"
//     name="title"
//     placeholder="Title"
//     value={notesData.title}
//     onChange={handleChange}
//     autoComplete="off"
//   />{" "}
//   <br /> <br /> <br />
//   <textarea
//     name="text"
//     cols={50}
//     rows={9}
//     placeholder="Text"
//     value={notesData.text}
//     onChange={handleChange}
//   ></textarea>
//   <br />
//   <br />
//   <br />
//   <button type="submit">{"Add"}</button>
// </form>
//     </div>
//   );
// };

// export default Create;

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
interface NotesProps {
  _id?: string;
  title: string;
  text: string;
}

const Create = () => {
  const [userData, setUserData] = useState<NotesProps>({
    title: "",
    text: "",
  });
  const navigate = useNavigate();
  const handleAddSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, text } = userData;
    const response = await axios.post("http://localhost:3001/server/notes", {
      title,
      text,
    });
    response.status === 200
      ? alert("Notes created")
      : alert("Failed to create notes");
    setUserData({
      title: "",
      text: "",
    });
    navigate("/notes");
  };
  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    // console.log(e.currentTarget.value);
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  return (
    <div>
      <form onSubmit={handleAddSubmit}>
        <input
          style={{ width: "20rem", height: "50px" }}
          type="text"
          name="title"
          placeholder="Title"
          value={userData.title}
          onChange={handleChange}
          autoComplete="off"
        />{" "}
        <br /> <br /> <br />
        <textarea
          name="text"
          cols={50}
          rows={9}
          placeholder="Text"
          value={userData.text}
          onChange={handleChange}
        ></textarea>
        <br />
        <br />
        <br />
        <button type="submit">{"Add"}</button>
      </form>
    </div>
  );
};

export default Create;
