
import { Outlet } from 'react-router-dom';
import img2 from "../assets/img2.jpg";
import Navbar from './Navbar';
const Layout = () => {
  return (
    <>
     <div
      style={{
        backgroundImage: `url(${img2})`,
        backgroundAttachment: "fixed",
        height: "100vh",
      }}
      className=" w-full bg-black h-screen bg-auto sm:bg-cover md:bg-contain lg:bg-auto xl:bg-cover"
    >
      <Navbar />
      <Outlet />
    </div>
    </>
  )
}

export default Layout