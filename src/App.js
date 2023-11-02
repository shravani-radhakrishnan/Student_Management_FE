import "./App.css";
import React from "react";
import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
import { Routes, Route } from "react-router-dom";
import Directory from "./components/Directory";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<StudentForm />}></Route>
        <Route path="/student" element={<StudentForm />}></Route>
        <Route path="/directory" element={<Directory />}></Route>
      </Routes>
    </div>
  );
}

export default App;
