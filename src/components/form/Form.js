import { useContext, useRef } from "react";

import { CVContext } from "../../CVContext";
import uniqid from "uniqid";
import missingProfile from "../../images/addProfileImg.jpg";
import Inputs from "../../inputType";

import Skill from "../Skill";
import Job from "../Job";
import School from "../School";
import "./Form.style.css";

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

      <div className="row-2">
        <h2>Skills:</h2>
        <div className="skills-list">
          {cvInfo.skills.map((skill) => (
            <Skill key={skill.id} skill={skill} deleteSkill={deleteSkill} />
          ))}
        </div>
        <button onClick={addSkill}>Add More</button>
      </div>

      <div className="row-3">
        <h2>Experience:</h2>
        <div className="experience-list">
          {cvInfo.experience.map((job) => (
            <Job key={job.id} experience={job} deleteJob={deleteJob} />
          ))}
          <button onClick={addJob}>Add More</button>
        </div>
      </div>

      <div className="row-4">
        <h2>Education:</h2>
        <div className="school-list">
          {cvInfo.education.map((school) => (
            <School key={school.id} education={school} deleteSchool={deleteSchool} />
          ))}
          <button onClick={addSchool}>Add More</button>
        </div>
      </div>
    </div>
  );
};

export default Form;