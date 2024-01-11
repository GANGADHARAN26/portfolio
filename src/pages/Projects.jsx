import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import  { useRef, useState } from "react";
import ecommerce from "../assets/ecommerce.png";
import admin from "../assets/admin.png";
import gmail from "../assets/gmail.png";
import chat from "../assets/chat.png";
import netflix from "../assets/netflix.png";
import { Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Projects() {
  const data=[
        {name:"Ecommerce",img:ecommerce,link:"https://app.netlify.com/sites/curious-chimera-d907ab/"},
        {name:"Ecommerce Admin",img:admin,link:"https://main--amazing-starship-43095c.netlify.app/"},
        {name:"Gmail Clone",img:gmail,link:"https://app.netlify.com/sites/cerulean-banoffee-542bb7/"},
        {name:"Netflix Clone",img:netflix,link:"https://app.netlify.com/sites/shiny-bavarois-bdc5af/"},
        {name:"Chat Application",img:chat,link:"https://app.netlify.com/sites/mellow-chimera-cd179a/"},
      ]
  const listRef = useRef();
  const [sliderPosition, setSliderPosition] = useState(1);
  const [showControls, setShowControls] = useState(false);
  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSliderPosition(sliderPosition - 1);
    }
    if (direction === "right" && sliderPosition < 5) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
    }
  };
  return (
    <Container
    className="flex column  overflow-hidden"
    showControls={showControls}
    onMouseEnter={() => setShowControls(true)}
    onMouseLeave={() => setShowControls(false)}
  >
    <h1>Projects</h1>
    <div className="wrapper ">
      <div
        className={`slider-action left ${
          !showControls ? "none" : ""
        } flex j-center a-center`}
      >
        <AiOutlineLeft onClick={() => handleDirection("left")} className="text-white"/>
      </div>
      <div className="slider flex " ref={listRef}>
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
                          <a href="#" className="flex justify-between">
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
        className={`slider-action right ${
          !showControls ? "none" : ""
        } flex j-center a-center`}
      >
        <AiOutlineRight onClick={() => handleDirection("right")} className="text-white"/>
      </div>
    </div>
  </Container>
  );
}
const Container = styled.div`
  gap: 1rem;
  position: relative;
  padding: 2rem 0;
  h1 {
    margin-left: 50px;
  }
  .wrapper {
    .slider {
      width: max-content;
      gap: 1rem;
      transform: translateX(0px);
      transition: 0.3s ease-in-out;
      margin-left: 50px;
    }
    .slider-action {
      position: absolute;
      z-index: 99;
      height: 100%;
      top: 0;
      bottom: 0;
      width: 50px;
      transition: 0.3s ease-in-out;
      svg {
        font-size: 2rem;
      }
    }
    .none {
      display: none;
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
  }
`;
