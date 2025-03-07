import { Outlet } from "react-router-dom";
import img2 from "../assets/img2.jpg";
import Navbar from "./Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

const Layout = () => {
  return (
    <>
      <div
        className=" w-full bg-scroll bg-black  bg-cover "
        style={{
          backgroundImage: `url(${img2})`,
        }}
      >
        <SpeedInsights />

        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
