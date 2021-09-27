import { useContext, useRef } from "react";

import { CVContext } from "../CVContext";
import missingProfile from "../images/addProfileImg.jpg";
import "../styles/Hero.style.css";
import Inputs from "../inputType";

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

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
        <div className="user-info">
          <div className="name">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your Name"
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
              placeholder="Enter your Job Title"
              value={cvInfo.title}
              onChange={(e) => setCVInfo({ ...cvInfo, title: e.target.value })}
            />
          </div>
        </div>
        <div className="contact-info">
          {Inputs.map((input, idx) => (
            <div className={`contactInput ${input.type}`} key={idx}>
              {input.icon}
              <input
                type="text"
                name={input.type}
                placeholder={input.placeholder}
                value={cvInfo[input.type]}
                onChange={(e) => setCVInfo({ ...cvInfo, [input.type]: e.target.value })}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div></div>;
};

export default Hero;
