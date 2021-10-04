import { useState, createContext } from "react";
import uniqid from "uniqid";

export const CVContext = createContext();

export const CVProvider = (props) => {
  const [preview, setPreview] = useState(false);
  const [cvInfo, setCVInfo] = useState({
    name: "",
    title: "",
    image: null,
    contact: { phone: "", email: "", linkedin: "", github: "" },
    skills: [
      {
        name: "",
        rating: 5,
        id: uniqid(),
      },
    ],
    education: [
      {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        id: uniqid(),
      },
    ],
    experience: [
      {
        title: "",
        company: "",
        description: "",
        startDate: "",
        endDate: "",
        id: uniqid(),
      },
    ],
  });

  return (
    <CVContext.Provider value={{ preview, setPreview, cvInfo, setCVInfo }}>
      {props.children}
    </CVContext.Provider>
  );
};
