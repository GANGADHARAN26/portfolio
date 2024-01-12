import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" border-gray-200 backdrop-blur-xl bg-fixed">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://img.icons8.com/pulsar-color/48/user-male-circle.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-cyan-200 hover:text-white">
            Portfolio
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li className="py-2">
              <Link
                to="/"
                className="block py-2 px-3  text-blue-300  text-transparent font-extrabold rounded md:bg-transparent  md:p-0  "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/projects"
                className="block py-2 px-3 text-blue-300 hover:text-white md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Projects
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/skills"
                className=" block py-2 px-3  text-blue-300 text-transparent hover:text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Skills
              </Link>
            </li>
            <li className="py-2">
              <a
                href="https://drive.google.com/file/d/1dTIdUwaBHwKHHqGl9A4RI7S3qkS1Nb6C/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-3 text-blue-300  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Resume
              </a>
            </li>
            <li className="py-2">
              <Link
                to="/about"
                className="block py-2 px-3  text-blue-300 text text-transparent rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/contact"
                className=" hover:text-white border border-cyan-500 ring-1 ring-blue-300 hover:bg-cyan-900 focus:ring-4 focus:outline-none text-blue-300 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600   dark:hover:bg-cyan-600 dark:focus:ring-gray-800"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
