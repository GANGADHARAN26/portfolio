import js from "../assets/javascript.svg";
import md from "../assets/mongodb.svg";
import sql from "../assets/mysql.svg";
import njs from "../assets/node-js.svg";
import bs from "../assets/bootstrap.svg";
import ejs from "../assets/express.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import tcss from "../assets/tailwind-css.svg";
const Skill = () => {
  return (
    <div className="container h-screen">
      <div className="card flex justify-around py-20 backdrop-blur-3xl ">
        <div className="h-96  border-2 w-1/2 grid grid-cols-5 gap-16 content-normal p-10 ">
          <div className="hover:scale-105 transition ease-in-out delay-150">
            <div className="logo ">
              <img
                src={js}
                width={50}
                height={50}
                className=""
                alt="javscript"
              />
            </div>
            <div className="name text-white py-2">JavaScript</div>
          </div>
          <div className="hover:scale-105 transition ease-in-out delay-150">
            <div className="logo">
              <img src={njs} width={70} height={70} alt="nodejs" />
            </div>
            <div className="name text-white py-2">Node JS</div>
          </div>{" "}
          <div className="hover:scale-105 transition ease-in-out delay-150">
            <div className="logo">
              <img src={react} width={70} height={60} alt="react" />
            </div>
            <div className="name text-white py-4">React JS</div>
          </div>{" "}
          <div className="hover:scale-105 transition ease-in-out delay-150">
            <div className="logo">
              <img src={ejs} width={60} height={60} alt="expressjs" />
            </div>
            <div className="name text-white py-4">Express JS</div>
          </div>{" "}
          <div className="hover:scale-105 transition ease-in-out delay-150">
            <div className="logo pt-3">
              <img src={md} width={90} height={60} alt="javscript" />
            </div>
          </div>{" "}
          <div className="hover:scale-105 transition ease-in-out delay-150">
            <div className="logo">
              <img src={redux} width={60} height={60} alt="javscript" />
            </div>
            <div className="name text-white">Redux</div>
          </div>
          <div className="hover:scale-105 transition ease-in-out delay-150">
            <div className="logo">
              <img src={bs} width={60} height={60} alt="javscript" />
            </div>
            <div className="name text-white">Bootstrap</div>
          </div>
          <div className="hover:scale-105 transition ease-in-out delay-150">
            <div className="logo">
              <img src={tcss} width={60} height={60} alt="javscript" />
            </div>
            <div className="name text-white">TailwindCSS</div>
          </div>
          <div className="hover:scale-105 transition ease-in-out delay-150">
            <div className="logo">
              <img src={sql} width={60} height={60} alt="javscript" />
            </div>
            <div className="name text-white">SQL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
