import axios from "axios";
import React, { useEffect, useState } from "react";
import Note from "../components/Note";
interface NoteProperties {
  _id: string;
  title: string;
  text: string;
}

const Notes = () => {
  const [allNotes, setAllNotes] = useState<NoteProperties[]>([]);
  // setAllNotes([{
  //     title: "prajwal",

  // }])

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await axios.get("http://localhost:3001/server/notes");

      //   console.log(response.data);
      setAllNotes(response.data);
    };
    fetchNotes();
  }, []);
  const handleDeleteNotes = (_id: string) => {
    setAllNotes(allNotes.filter((note) => note._id !== _id));
    // console.log(_id);
  };
  //   console.log(allNotes);
  return (
    <div>
      {/* {allNotes ? (
        allNotes.map((notes) => {
          return <div>{notes.title}</div>;
        })
      ) : (
        <h1>Null</h1>
      )} */}
      {allNotes ? (
        allNotes.map((notes) => {
          //   return <Note id={notes.id} title={notes.title} text={notes.text} />;
          return (
            <Note
              key={notes._id}
              notes={notes}
              handleDeleteNote={handleDeleteNotes}
            />
          );
        })
      ) : (
        <h1>Nothing here</h1>
      )}
    </div>
  );
};

export default Notes;
