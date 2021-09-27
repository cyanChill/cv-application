import { useContext, useRef } from "react";

import { CVContext } from "../CVContext";
import missingProfile from "../images/addProfileImg.jpg";
import "../styles/Hero.style.css";

const Hero = () => {
  const { preview, cvInfo, setCVInfo } = useContext(CVContext);
  const fileElem = useRef(null);
  const previewImg = useRef(null);

  /* 
    Want:
    - Image ✔️
    - Name
    - Title
    - Contact Info
  */
  const selectFile = () => {
    fileElem.current.click();
  };

  /* Reference: https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications */
  const updatePreviewImg = (e) => {
    const currFile = e.target.files;

    if (currFile.length) {
      if (!currFile[0].type.startsWith("image/")) return;
      previewImg.current.src = URL.createObjectURL(currFile[0]);
      previewImg.current.onload = () => URL.revokeObjectURL(previewImg.current.src);

      setCVInfo({
        ...cvInfo,
        image: currFile[0],
      });
    }
  };

  /* Have a preview for input and a field for displaying */
  if (!preview) {
    return (
      <div className="container">
        <div className="profile-img">
          <input
            type="file"
            id="fileElem"
            accept="image/*"
            ref={fileElem}
            style={{ display: "none" }}
            onChange={updatePreviewImg}
          />
          <img src={missingProfile} alt="Profile" ref={previewImg} onClick={selectFile} />
        </div>
        <div className="name">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={cvInfo.name}
            onChange={(e) => setCVInfo({ ...cvInfo, name: e.target.value })}
          />
        </div>
        <div className="title">
          <label htmlFor="title">Job Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={cvInfo.title}
            onChange={(e) => setCVInfo({ ...cvInfo, title: e.target.value })}
          />
        </div>
        <div className="contact-info">
          
        </div>
      </div>
    );
  }

  return <div></div>;
};

export default Hero;
