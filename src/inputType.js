import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Inputs = [
  {
    type: "location",
    icon: <FaMapMarkerAlt />,
    placeholder: "Enter your Location",
  },
  {
    type: "phone",
    icon: <FaPhone />,
    placeholder: "Enter your Phone Number",
  },
  {
    type: "email",
    icon: <FaEnvelope />,
    placeholder: "Enter your Email",
  },
  {
    type: "linkedin",
    icon: <FaLinkedin />,
    placeholder: "Enter your Linkedin URL",
  },
  {
    type: "github",
    icon: <FaGithub />,
    placeholder: "Enter your Github URL",
  },
];

export default Inputs;
