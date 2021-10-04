import { useContext } from "react";
import { CVContext } from "../CVContext";

import School from "./School";
import Job from "./Job";
import "../styles/MainContent.style.css";

const MainContent = () => {
  const {
    cvInfo: { education, experience },
  } = useContext(CVContext);

  const isEducationEmpty = education.every((obj) => {
    obj.id = "";
    return Object.values(obj).every((val) => val === "");
  });
  const isExperienceEmpty = experience.every((obj) => {
    obj.id = "";
    return Object.values(obj).every((val) => val === "");
  });

  return (
    <div id="main-content">
      {isExperienceEmpty ? (
        ""
      ) : (
        <div id="experience">
          <h2 className="section-title">Experience</h2>
          {experience.map((job) => (
            <Job experience={job} key={job.id} />
          ))}
        </div>
      )}
      {isEducationEmpty ? (
        ""
      ) : (
        <div id="education">
          <h2 className="section-title">Education</h2>
          {education.map((school) => (
            <School education={school} key={school.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainContent;
