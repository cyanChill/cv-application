import { useContext, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Form from "./components/Form";
import Preview from "./components/Preview";
import Download from "./components/Download";

import { CVContext } from "./CVContext";
import "./styles/App.style.css";

function App() {
  const { preview, isPrinting, setIsPrinting } = useContext(CVContext);

  useEffect(() => {
    if (isPrinting) {
      window.print();
      setIsPrinting(false);
    }
  }, [isPrinting, setIsPrinting]);

  return (
    <div className="app">
      {!preview ? (
        <Form />
      ) : (
        <div id="cv-content">
          <Sidebar />
          <MainContent />
        </div>
      )}
      {isPrinting ? (
        ""
      ) : preview ? (
        <>
          <Download /> <Preview />
        </>
      ) : (
        <Preview />
      )}
    </div>
  );
}

export default App;
