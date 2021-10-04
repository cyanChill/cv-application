import { useContext } from "react";
import { CVContext } from "../CVContext";

import { FaRegSave } from "react-icons/fa";
import "../styles/OverlayButtons.style.css";

const Download = () => {
  const { setIsPrinting } = useContext(CVContext);

  return (
    <div className="overlay download">
      <FaRegSave className="overlay-icon" onClick={() => setIsPrinting(true)} />
    </div>
  );
};

export default Download;
