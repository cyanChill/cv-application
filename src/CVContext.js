import { useState, createContext } from "react";

export const CVContext = createContext();

export const CVProvider = (props) => {
  const [preview, setPreview] = useState(false);
  const [cvInfo, setCVInfo] = useState({
    name: "",
    title: "",
    img: null,
  });

  return (
    <CVContext.Provider value={{ preview, setPreview, cvInfo, setCVInfo }}>
      {props.children}
    </CVContext.Provider>
  );
};
