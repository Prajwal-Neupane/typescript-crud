import React from "react";
import { Home } from "./pages/Home";
import Notes from "./pages/Notes";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Create from "./pages/Create";
import EditNote from "./pages/EditNote";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<EditNote />} />
      </Routes>
    </div>
  );
}

export default App;
