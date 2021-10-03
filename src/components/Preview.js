import { useContext } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CVContext } from "../CVContext";
import "../styles/OverlayButtons.style.css";

const Preview = () => {
  const { preview, setPreview } = useContext(CVContext);

  return (
    <div className="overlay preview">
      {preview ? (
        <FaEyeSlash onClick={() => setPreview(!preview)} className="overlay-icon" />
      ) : (
        <FaEye onClick={() => setPreview(!preview)} className="overlay-icon" />
      )}
    </div>
  );
};

export default Preview;
