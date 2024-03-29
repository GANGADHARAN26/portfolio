import { FiDownload } from "react-icons/fi";
const About = () => {
  return (
    <div className="container mt-28 h-screen px-7">
      <div className="py-20 px-8 h-50 border-2 w-full backdrop-blur-3xl ">
        <div className="heading">
          <h1 className="text-white">About Me</h1>
        </div>
        <div className="body">
          <p className="text-white flex py-3">
            Hello everyone, I am Gangadharan from India and I have finished
            Bachelors of Technology in Informational Technology. I share
            interest in developing  Web Development Projects and also I have
            in doing IOT Projects ant I have done two IOT projects like Automated
            vehicle and  Alcohal control Technology in vehicle as my Bachelors
            Projects and I am currently working on learning Web Development Technology
            and Doing Projects 
          </p>
          <a href="https://drive.usercontent.google.com/u/0/uc?id=1CKHjc6IsKJRUUB5nZK2rEw64Pt-ejRFD&export=download" target="_blank" rel="noopener noreferrer" className="bg-white text p-3 border-yellow-500 border-4 flex gap-2 w-40 justify-center items-center">
            <FiDownload className="block" /> Download CV
          </a>
        </div>
      </div >
    </div>
  );
};

export default About;
