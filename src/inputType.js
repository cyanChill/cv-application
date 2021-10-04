import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Inputs = [
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
    placeholder: "Enter your Linkedin Username",
  },
  {
    type: "github",
    icon: <FaGithub />,
    placeholder: "Enter your Github Username",
  },
];

export default Inputs;
