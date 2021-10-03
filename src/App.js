import { useState, useContext } from "react";

import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Form from "./components/Form";
import Preview from "./components/Preview";
import Download from "./components/Download";

import { CVContext } from "./CVContext";
import "./styles/App.style.css";

function App() {
  const { preview } = useContext(CVContext);

  return (
    <div className="app">
      {!preview ? (
        <Form />
      ) : (
        <>
          <Sidebar /> <MainContent />
        </>
      )}
      {preview ? <Download /> : ""}
      <Preview />
    </div>
  );
}

export default App;
