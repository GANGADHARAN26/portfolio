import { FiDownload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate=useNavigate()
  return (
    <div className="container mt-28">
      <div className="py-20 px-8 h-96 border-2 w-full backdrop-blur-3xl ">
        <div className="heading">
          <h1 className="text-white">About Me</h1>
        </div>
        <div className="body">
          <p className="text-white flex py-5">
            Hello everyone, I am Gangadharan from India and I have finished
            Bachelors of Technology in Informational Technology. I share
            interest in developing  Web Development Projects and also I have
            in doing IEEE Projects ant I have done two IEEE projects like Automated
            vehicle and  Alcohal control Technology in vehicle as my Bachelors
            Projects and I am currently working on learning Web Development Technology
            and Doing Projects 
          </p>
          <a href="https://drive.google.com/file/d/1dTIdUwaBHwKHHqGl9A4RI7S3qkS1Nb6C/view?usp=sharing" className="bg-white text p-3 border-yellow-500 border-4 flex gap-2 w-40 justify-center items-center">
            <FiDownload className="block" /> Download CV
          </a>
        </div>
      </div >
    </div>
  );
};

export default About;
