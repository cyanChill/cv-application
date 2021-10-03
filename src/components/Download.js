import { useContext } from "react";

import { FaRegSave } from "react-icons/fa";
import { CVContext } from "../CVContext";
import "../styles/OverlayButtons.style.css";

const Download = () => {
  const { preview, setPreview } = useContext(CVContext);

  return (
    <div className="overlay download">
      <FaRegSave className="overlay-icon" />
    </div>
  );
};

export default Download;
