import axios from "axios";
import React, { useState } from "react";
// import { NoteP } from "../models";
import { useNavigate } from "react-router-dom";
interface NoteProps {
  notes: {
    _id: string;
    title: string;
    text: string;
  };
  handleDeleteNote: (_id: string) => void;
}

const Note = ({ notes, handleDeleteNote }: NoteProps) => {
  const navigate = useNavigate();
  const [allNotes, setAllNotes] = useState(notes);
  // console.log(notes);
  // useEffect(() => {
  //   setDummyState(dummyState + 1);
  // }, [dummyState]);

  const handleDelete = async (_id: string) => {
    // console.log(id);
    // const response = await axios.delete(
    //   `http://localhost:3001/server/note/${_id}`
    // );
    await axios.delete(`http://localhost:3001/server/note/${_id}`);
    handleDeleteNote(_id);
    // console.log(allNotes);

    // window.location.reload();
    // console.log(response);
  };
  // console.log(notes._id);
  const handleUpdate = (_id: string) => {
    navigate(`/update/${_id}`);
    // console.log(_id);
  };
  return (
    <div>
      {allNotes ? (
        <div>
          <h1>{allNotes.title}</h1>
          <p>{allNotes.text}</p>
          <button onClick={() => handleUpdate(allNotes._id)}>Update</button>
          <button onClick={() => handleDelete(allNotes._id)}>Delete</button>
        </div>
      ) : (
        <h1>Nothing here</h1>
      )}
    </div>
  );
};

export default Note;
