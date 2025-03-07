import { useEffect, useState } from "react";

const SingleProject = () => {
  const location = window.location.pathname.split("/")[2];
  const [details, setDetails] = useState({});
  const data = [
    {
      name: "Ecommerce",
      link: "https://spotify-eccomerce.netlify.app/",
      description: "Shopping website with all the functionality",
      frontEndGithublink: "https://github.com/GANGADHARAN26/ecommerce-fronend",
      backEndGithublink:"https://github.com/GANGADHARAN26/ecommerce-backend",
      BackEndDeployLink:"https://dashboard.render.com/web/srv-cm9okgvqd2ns73dqqblg",
      features:"React ,Node js,Express js,React Redux,Redux Toolkit ",
      detail:"Form Validation using Formik and Yup ,Payment gateway using Razorpay ,Notification features using Toastify , Redux and Redux Toolkit for State Management ,Rating feature included using react star components ,Product Photos included using cloudinary ,Authentication and Authorization feature included using Jsonwentoken and bcrypt ",

    },
    {
      name: "Ecommerce Admin",
      link: "https://amazing-starship-43095c.netlify.app/",
      description: "Admin Dashboard for ecommerce website",
      frontEndGithublink: "https://github.com/GANGADHARAN26/ecommerce-admin-app",
      backEndGithublink:"https://github.com/GANGADHARAN26/ecommerce-backend",
      BackEndDeployLink:"https://dashboard.render.com/web/srv-cm9okgvqd2ns73dqqblg",
      features:"React ,Node js,Express js,React Redux,Redux Toolkit ",
      detail:"  Redux and Redux Toolkit for State Management ,For Notification features using Toastify ,Authentication and Authorization feature included using Jsonwentoken and bcrypt ,For Chart Designs Ant Design used with Graph",

    },
    {
      name: "Gmail Clone",
      link: "https://cerulean-banoffee-542bb7.netlify.app/",
      description: "Gmail Clone with all the functionality",
      frontEndGithublink: "https://github.com/GANGADHARAN26/gmail-clone-frontend",
      backEndGithublink:"https://github.com/GANGADHARAN26/Gmail-Clone-BackEnd",
      BackEndDeployLink:"https://dashboard.render.com/web/srv-ckujh3q37rbc73d1gl8g",
      features:"React ,Node js,Express js ,Material UI and Styled Components,Nodemailer,MongoDB ",
      detail:"Email Sending Implemented using Nodemailer Package and For Authentication and Authorization features included using Jsonwebtoken and Bcrypt"

    },
    {
      name: "Netflix Clone",
      link: "https://shiny-bavarois-bdc5af.netlify.app/",
      description: "Netflix Clone with all the functionality",
      frontEndGithublink: "https://github.com/GANGADHARAN26/netflix-mern-client",
      backEndGithublink:"https://github.com/GANGADHARAN26/netflix-clone-server",
      BackEndDeployLink:"https://dashboard.render.com/web/srv-cmdmhvv109ks7399d13g",
      features:"React ,Node js,Express js , Styled Components,Firebase",
      detail:"For User Authentication Firebase is used and TMDB API is for Movie Data and Added Wishlist Functionality"
    },
    {
      name: "Chat Application",
      link: "https://mellow-chimera-cd179a.netlify.app/",
      description: "Chat Appliction with all the functionality",
      frontEndGithublink: "https://github.com/GANGADHARAN26/chat-client",
      backEndGithublink:"https://github.com/GANGADHARAN26/chat-server",
      BackEndDeployLink:"https://dashboard.render.com/web/srv-cmc5m9f109ks73aj1oeg",
      features:"React ,Node js,Express js,React Redux,Redux Toolkit ,Socket.io,Socket.io-client,Tailwindcss",
      detail:"Authentication and Authorization features included using Jsonwebtoken and Bcrypt,For Message conversation using socket.io "
    },
    {
      name: "LMS Analytics Research",
      link: "https://dashboard-analytics-lll.netlify.app/",
      description: "Static analuytics research demo page of LMS ",
      frontEndGithublink: "https://github.com/GANGADHARAN26/Analytics-Dashboard",
      backEndGithublink:"https://github.com/GANGADHARAN26/Analytics-Dashboard",
      BackEndDeployLink:"https://github.com/GANGADHARAN26/Analytics-Dashboard",
      features:"React, MUI material design and charts , React charts",
      detail:"This is page is static page and research demo for the top to bottom how to can implemtn the analytics dashboard of the LMS "
    },
    {
      name: "Refferal management system",
      link: "https://referralmanagementsystem.netlify.app/",
      description: "Refferal management system for developers ",
      frontEndGithublink: "https://github.com/GANGADHARAN26/RFS-Client",
      backEndGithublink:"https://github.com/GANGADHARAN26/RFS-server",
      BackEndDeployLink:"https://rfs-server.onrender.com",
      features:"React, TailwindCSS, Redux and Redux toolkit, AWS javscript SDK",
      detail:"Refferal management with implmented features of remuse upload with aws s3 bucket with javascript sdk"
    },
  ];
  useEffect(() => {
    if (location) {
      setDetails(data[location]);
    }
  }, [location]);
  return (
 <div className="h-screen py-5">
     <div className="flex justify-center  ">
      <div className="backdrop-blur-3xl max-w-2xl shadow overflow-hidden sm:rounded-lg border-2 border-white">
        <div className="px-4 py-4 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-white">
            {details?.name}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-white">
            {details?.description}
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="backdrop-blur-xl px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-white">
                Front End Code 
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 hover:text-blue-400">
                <a href={details.frontEndGithublink}  target="_blank" rel="noopener noreferrer">{details.frontEndGithublink} </a>
              </dd>
            </div>
            <div className="backdrop-blur-xl px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-white">
                Back End Code 
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 hover:text-blue-400">
              <a href={details.backEndGithublink} target="_blank" rel="noopener noreferrer">{details.backEndGithublink}</a>
              </dd> 
            </div>
            <div className="backdrop-blur-xl px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-white">
                Front End Deploy Link
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 hover:text-blue-400">
              <a href={details.link} target="_blank" rel="noopener noreferrer">{details.link}</a>
              </dd>
            </div>
            <div className="backdrop-blur-xl px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-white">
                Back End Deploy Link
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 hover:text-blue-400">
              <a href={details.BackEndDeployLink} target="_blank" rel="noopener noreferrer">{details.BackEndDeployLink}</a>
              </dd>
            </div>
            <div className="backdrop-blur-xl px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-white">
                Technologies Used
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
               {details.features}
              </dd>
            </div>
            <div className="backdrop-blur-xl px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-white">
                Details
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
               {details.detail}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
 </div>
  );
};

export default SingleProject;
