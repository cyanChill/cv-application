import { useContext } from "react";
import { CVContext } from "../CVContext";

import { FaTrash } from "react-icons/fa";

const Job = ({ deleteJob, experience }) => {
  const { preview, cvInfo, setCVInfo } = useContext(CVContext);
  const { title, company, description, startDate, endDate, id } = experience;

  const updateField = (e, type) => {
    const updatedExperience = cvInfo.experience.map((job) => {
      if (job.id === id) {
        job[type] = e.target.value;
        return job;
      }
      return job;
    });

    setCVInfo({
      ...cvInfo,
      experience: updatedExperience,
    });
  };

  return (
    <div className="job">
      <div className="text flex-col">
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => updateField(e, "title")}
        />
        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => updateField(e, "company")}
        />
        <textarea
          className="description-field"
          placeholder="Job Description"
          rows="2"
          value={description}
          onChange={(e) => updateField(e, "description")}
        ></textarea>
      </div>
      <div className="dates flex-col">
        <span className="field-title">Start Date:</span>
        <input type="date" value={startDate} onChange={(e) => updateField(e, "startDate")} />
        <span className="field-title">End Date:</span>
        <input type="date" value={endDate} onChange={(e) => updateField(e, "endDate")} />
        <button className="btn trash" onClick={() => deleteJob(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Job;
