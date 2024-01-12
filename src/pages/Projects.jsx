import ecommerce from "../assets/ecommerce.png";
import admin from "../assets/admin.png";
import gmail from "../assets/gmail.png";
import chat from "../assets/chat.png";
import netflix from "../assets/netflix.png";
import { Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Projects() {
  const data=[
        {name:"Ecommerce",img:ecommerce,link:"https://curious-chimera-d907ab.netlify.app/"},
        {name:"Ecommerce Admin",img:admin,link:"https://amazing-starship-43095c.netlify.app/"},
        {name:"Gmail Clone",img:gmail,link:"https://cerulean-banoffee-542bb7.netlify.app/"},
        {name:"Netflix Clone",img:netflix,link:"https://shiny-bavarois-bdc5af.netlify.app/"},
        {name:"Chat Application",img:chat,link:"https://mellow-chimera-cd179a.netlify.app/"},
      ]
  return (
    <div
   className="bg-scroll scrollbar-hide"
  >
    <h1>Projects</h1>
    <div className=" px-7 py-5 ">
+-*      <div className="grid grid-cols-4 gap-5" >
        {data.map((info, index) => {
          return (
            <div id="card " className="hover:scale-105 transition ease-in-out delay-150" key={index}>
                     <div className="max-w-sm  border ring-orange-700 rounded-lg shadow backdrop-blur-3xl">
                         <Link to={`/project/${index}`}>
                           <img
                            className="rounded-t-lg"
                            src={info.img}
                            alt=""
                          />
                        </Link>
                        <div className="p-5">
                          <a href="#" className="flex justify-between" target="_blank" rel="noopener noreferrer">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                              {info.name}
                            </h5>
                           
                          </a>
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021
                            so far, in reverse chronological order.
                          </p>
                          <div className="flex justify-between">
                          <a
                            href={info.link}
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          
                          >
                            Live Demo
                           
                          </a>
                          <Link
                            to={`/project/${index}`}
                            className="inline-flex items-center px-3 py-1  text-sm font-medium text-center text-white border-2  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Deployment Links  <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </Link>
                          </div>
                        </div>
                      </div>
                    </div>
          )
        })}
      </div>
      <div
       
      >
      </div>
    </div>
  </div>
  );
}
