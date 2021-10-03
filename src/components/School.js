import { useContext } from "react";
import { CVContext } from "../CVContext";

import { FaTrash } from "react-icons/fa";

const School = ({ deleteSchool, education }) => {
  const { preview, cvInfo, setCVInfo } = useContext(CVContext);
  const { school, degree, startDate, endDate, id } = education;

  const updateField = (e, type) => {
    const updatedEducation = cvInfo.education.map((school) => {
      if (school.id === id) {
        school[type] = e.target.value;
        return school;
      }
      return school;
    });

    setCVInfo({
      ...cvInfo,
      education: updatedEducation,
    });
  };

  return (
    <div className="school">
      <div className="text flex-col">
        <input
          type="text"
          placeholder="School Name"
          value={school}
          onChange={(e) => updateField(e, "school")}
        />
        <input
          type="text"
          placeholder="Degree Name"
          value={degree}
          onChange={(e) => updateField(e, "degree")}
        />
      </div>
      <div className="dates flex-col">
        <span className="field-title">Start Date:</span>
        <input type="date" value={startDate} onChange={(e) => updateField(e, "startDate")} />
        <span className="field-title">End Date:</span>
        <input type="date" value={endDate} onChange={(e) => updateField(e, "endDate")} />
        <button className="btn trash" onClick={() => deleteSchool(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default School;
