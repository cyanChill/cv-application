import { useContext } from "react";
import { CVContext } from "../CVContext";

import { FaTrash } from "react-icons/fa";

const Skill = ({ deleteSkill, skill }) => {
  const { preview, cvInfo, setCVInfo } = useContext(CVContext);
  const { id, name, rating } = skill;

  const updateSkill = (e) => {
    const updatedSkills = cvInfo.skills.map((skill) => {
      if (skill.id === id) {
        return { ...skill, name: e.target.value };
      }
      return skill;
    });

    setCVInfo({
      ...cvInfo,
      skills: updatedSkills,
    });
  };

  const updateRating = (e) => {
    const updatedSkills = cvInfo.skills.map((skill) => {
      if (skill.id === id) {
        const val = parseInt(e.target.value);
        const rating = val > 10 ? 10 : val < 0 ? 0 : val;
        return { ...skill, rating: rating };
      }
      return skill;
    });

    setCVInfo({
      ...cvInfo,
      skills: updatedSkills,
    });
  };

  return (
    <div>
      <div className="skill">
        <input type="text" placeholder="Skill Name" value={name} onChange={updateSkill} />
        <div className="rating">
          <input type="number" min="0" max="10" value={rating} onChange={updateRating} />
          <span>/ 10</span>
          <FaTrash onClick={() => deleteSkill(id)} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
