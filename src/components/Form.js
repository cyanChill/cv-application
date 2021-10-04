import { useContext, useRef, useEffect } from "react";

import { CVContext } from "../CVContext";
import uniqid from "uniqid";
import missingProfile from "../images/addProfileImg.jpg";
import Inputs from "../inputType";

import Skill from "./Skill";
import Job from "./Job";
import School from "./School";
import "../styles/Form.style.css";

const Form = () => {
  const { cvInfo, setCVInfo } = useContext(CVContext);
  const fileElem = useRef(null);
  const previewImg = useRef(null);

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

  const showProfileImg = () => {
    if (cvInfo.image) {
      previewImg.current.src = URL.createObjectURL(cvInfo.image);
      previewImg.current.onload = () => URL.revokeObjectURL(previewImg.current.src);
    }
  };

  const updateContact = (type, e) => {
    setCVInfo({
      ...cvInfo,
      contact: {
        ...cvInfo.contact,
        [type]: e.target.value,
      },
    });
  };

  const addSkill = () => {
    setCVInfo({
      ...cvInfo,
      skills: [...cvInfo.skills, { name: "", rating: 5, id: uniqid() }],
    });
  };

  const deleteSkill = (id) => {
    setCVInfo({
      ...cvInfo,
      skills: cvInfo.skills.filter((skill) => skill.id !== id),
    });
  };

  const addJob = () => {
    const newJob = {
      title: "",
      company: "",
      description: "",
      startDate: "",
      endDate: "",
      id: uniqid(),
    };

    setCVInfo({
      ...cvInfo,
      experience: [...cvInfo.experience, newJob],
    });
  };

  const deleteJob = (id) => {
    setCVInfo({
      ...cvInfo,
      experience: cvInfo.experience.filter((job) => job.id !== id),
    });
  };

  const addSchool = () => {
    setCVInfo({
      ...cvInfo,
      education: [
        ...cvInfo.education,
        { school: "", degree: "", startDate: "", endDate: "", id: uniqid() },
      ],
    });
  };

  const deleteSchool = (id) => {
    setCVInfo({
      ...cvInfo,
      education: cvInfo.education.filter((school) => school.id !== id),
    });
  };

  useEffect(() => {
    showProfileImg();
  }, []);

  return (
    <div className="container flex-col">
      <div className="row-1 flex-col">
        {/* Profile input */}
        <div className="profile-img">
          <input
            type="file"
            id="fileElem"
            accept="image/*"
            ref={fileElem}
            style={{ display: "none" }}
            onChange={updatePreviewImg}
          />
          <img
            src={missingProfile}
            alt="Profile"
            ref={previewImg}
            onClick={() => fileElem.current.click()}
          />
        </div>
        {/* User name & job title */}
        <div className="user-info flex-col">
          <div className="name flex-col">
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
          <div className="title flex-col">
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
        {/* Profile contact information */}
        <div className="contact-info flex-col">
          {Inputs.map((input, idx) => (
            <div className={`contact-input ${input.type}`} key={idx}>
              {input.icon}
              <input
                type="text"
                name={input.type}
                placeholder={input.placeholder}
                value={cvInfo.contact[input.type]}
                onChange={(e) => updateContact([input.type], e)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="row-2">
        <h2 className="section-title">Skills:</h2>
        <div className="skills-list">
          {cvInfo.skills.map((skill) => (
            <Skill key={skill.id} skill={skill} deleteSkill={deleteSkill} />
          ))}
        </div>
        <button onClick={addSkill} className="btn">
          Add More
        </button>
      </div>

      <div className="row-3">
        <h2 className="section-title">Experience:</h2>
        <div className="experience-list flex-col">
          {cvInfo.experience.map((job) => (
            <Job key={job.id} experience={job} deleteJob={deleteJob} />
          ))}
          <button onClick={addJob} className="btn">
            Add More
          </button>
        </div>
      </div>

      <div className="row-4">
        <h2 className="section-title">Education:</h2>
        <div className="school-list flex-col">
          {cvInfo.education.map((school) => (
            <School key={school.id} education={school} deleteSchool={deleteSchool} />
          ))}
          <button onClick={addSchool} className="btn">
            Add More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
