import { useContext } from "react";
import { CVContext } from "../CVContext";
import uniqid from "uniqid";

import Skill from "./Skill";

const Skills = () => {
  const { preview, cvInfo, setCVInfo } = useContext(CVContext);
  /* 
    - Have button to "add skill" that will create a new Skill component
    - For each skill, user needs to rate themselves from 0 to 10
    - cvInfo.skills is an array of objects with 2 properties:
      1. Skill name
      2. Skill rating
      3. Skill id
    - Maybe how we do this is that when we click "add skill", it adds an item to the cvInfo.skills array which will then render onto the page
  */

  return <div></div>;
};

export default Skills;
