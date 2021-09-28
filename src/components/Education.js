import { useContext } from "react";
import { CVContext } from "../CVContext";
import uniqid from "uniqid";

import "../styles/Education.style.css";
import School from "./School";

const Education = () => {
  const { preview, cvInfo, setCVInfo } = useContext(CVContext);

  const addSchool = () => {
    const newSchool = {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      id: uniqid(),
    };

    setCVInfo({
      ...cvInfo,
      education: [...cvInfo.education, newSchool],
    });
  };

  const deleteSchool = (id) => {
    const newSchools = cvInfo.education.filter((school) => school.id !== id);

    setCVInfo({
      ...cvInfo,
      education: newSchools,
    });
  };

  return (
    <div>
      <h2>Education:</h2>
      <div className="school-list">
        {cvInfo.education.map((school) => (
          <School key={school.id} education={school} deleteSchool={deleteSchool} />
        ))}
        <button onClick={addSchool}>Add More</button>
      </div>
    </div>
  );
};

export default Education;
