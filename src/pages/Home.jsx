import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImCool2 } from "react-icons/im";
import { FaCode } from "react-icons/fa";
import Meta from "../components/Meta";
const Home = () => {
  return (
    <>
    <Meta title={"Home"} />
    <div className=" flex  justify-between xl:px-20 px-5 items-center y  w-full h-3/4">
        <div>
          <h1 className=" leading-[2rem]">
            <p className="text-white flex align-center text-2xl">
              Hello,&nbsp;
              <ImCool2 className="text-3xl " />
            </p>
            <br />
            <h1 className="text-white text-6xl">I am Gangadharan...</h1>
            <br />
            <div className="border-4 shadow-md hover:shadow-2xl border-yellow-500 rounded-xl hover:scale-105 transition ease-in-out delay-150 ">
              <h4 className="text-yellow-700 border-yellow-700 border-2 rounded-xl p-4 flex items-center justify-center  bg-white hover:bg-gray-200 text-2xl">
                <FaCode />
                &nbsp; Web Developer
              </h4>
            </div>
          </h1>
        </div>
        <div id="social " className=" flex  flex-col space-y-28 ml-8 ">
            <a href="https://github.com/GANGADHARAN26">
              <FaGithub
                className={` text-white text-5xl flex justify-end sm:visibility:none hover:scale-105 transition ease-in-out delay-150 }`}
              />
            </a>
            <a href="https://www.linkedin.com/in/ganga-dharan-9241611b1/">
              <FaLinkedin
                className="text-white text-5xl sm:visibility:none hover:scale-105 transition ease-in-out delay-150"
              />
            </a>
        </div>
      </div>
    </>
  )
}

export default Home