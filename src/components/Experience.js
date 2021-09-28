import { useContext } from "react";
import { CVContext } from "../CVContext";
import uniqid from "uniqid";

import "../styles/Experience.style.css";
import Job from "./Job";

const Experience = () => {
  const { preview, cvInfo, setCVInfo } = useContext(CVContext);

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
    const newJobs = cvInfo.experience.filter((job) => job.id !== id);

    setCVInfo({
      ...cvInfo,
      experience: newJobs,
    });
  };

  return (
    <div>
      <h2>Experience:</h2>
      <div className="experience-list">
        {cvInfo.experience.map((job) => (
          <Job key={job.id} experience={job} deleteJob={deleteJob} />
        ))}
        <button onClick={addJob}>Add More</button>
      </div>
    </div>
  );
};

export default Experience;
