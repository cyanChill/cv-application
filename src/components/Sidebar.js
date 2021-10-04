import { useContext, useRef, useEffect } from "react";
import { CVContext } from "../CVContext";
import Inputs from "../inputType";

import "../styles/Sidebar.style.css";

const Sidebar = () => {
  const { cvInfo } = useContext(CVContext);
  const { name, title, image, contact, skills } = cvInfo;
  const profileImg = useRef(null);

  const isContactEmpty = Object.values(contact).every((val) => val === "");
  const isSkillEmpty = skills.every((val) => val.name === "");

  const showProfileImg = () => {
    if (image) {
      profileImg.current.src = URL.createObjectURL(image);
      profileImg.current.onload = () => URL.revokeObjectURL(profileImg.current.src);
    }
  };

  useEffect(() => {
    showProfileImg();
  }, []);

  return (
    <div id="sidebar">
      {image ? <img alt="Profile" ref={profileImg} id="profile" /> : ""}
      <p id="name">{name}</p>
      <p id="title">{title}</p>
      {isContactEmpty ? (
        ""
      ) : (
        <div id="contacts">
          <h2 className="section-title">Contact</h2>
          {Inputs.map((type, idx) => (
            <p key={idx} className="contact-field">
              {type.type === "github"
                ? `github.com/${contact[type.type]}`
                : type.type === "linkedin"
                ? `linkedin.com/in/${contact[type.type]}`
                : contact[type.type]}
            </p>
          ))}
        </div>
      )}
      {isSkillEmpty ? (
        ""
      ) : (
        <div id="skills">
          <h2 className="section-title">Skills</h2>
          {skills.map((skill) => {
            if (!skill.name) return "";
            return (
              <div key={skill.id} className="skill-field">
                <p>{skill.name}</p>
                <div className="rating-meter">
                  <div
                    className="rating-meter-fill"
                    style={{ width: `${skill.rating * 10}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
