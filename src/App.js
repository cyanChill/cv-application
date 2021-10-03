import { useState, useContext } from "react";

import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Form from "./components/form/Form";

import { CVContext } from "./CVContext";
import "./styles/App.style.css";

function App() {
  const { preview, setPreview } = useContext(CVContext);

  return (
    <div className="app">
      {!preview ? (
        <Form />
      ) : (
        <>
          <Sidebar /> <MainContent />
        </>
      )}
    </div>
  );
}

export default App;
