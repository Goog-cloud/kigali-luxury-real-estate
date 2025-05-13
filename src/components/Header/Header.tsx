import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logos/Photoroom.png";
import { useNavigate, NavLink } from "react-router-dom";
import BookmarkButton from "../Body/BookmarkButton";
import backgroundImage from "../../assets/Images/pexels-pixabay-258154.jpg";
import Layout from "../../pages/Layout";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/login");
    setMenuOpen(false);
  };

  const paragraphText =
    "We are a trusted real estate company dedicated to helping individuals, families, and investors find the perfect property to suit their needs. Whether you're looking to buy, sell, rent, or invest, our experienced team is here to guide you every step of the way.";
  const displayedText = paragraphText;

  useEffect(() => {
    setAnimate(true);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    {
      to: "/services",
      label: "Services",
      subItems: [
        { to: "/research", label: "Market Research" },
        { to: "/monitoring", label: "Monitoring, Evaluation & Learning" },
        { to: "/policy", label: "Advise policy Makers" },
        { to: "/program", label: "Programmatic Work" },
      ],
    },
    { to: "/publications", label: "Publications" },
    { to: "/reachus", label: "Connect with us" },
  ];

  return (
    <div
      className="relative h-auto text-white overflow-hidden pb-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header className="flex justify-between items-center p-4 relative z-20">
        <div className="flex items-center justify-between w-full md:hidden">
          <button
            className="text-[#DF4E10] cursor-pointer"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>

          <div className="absolute left-12">
            <img src={Logo} alt="Profile" className="w-26 h-16" />
          </div>
        </div>

        <div className="hidden md:flex items-center justify-between w-full">
          <div className="flex gap-5">
            <button
              className="text-[#DF4E10] cursor-pointer"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
            <img
              src={Logo}
              alt="Profile"
              className={`h-24 w-auto transition-opacity duration-1000 ${
                animate ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          <nav className="flex items-center">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.to} className="relative">
                  {item.subItems ? (
                    <div>
                      <button
                        className="text-white hover:text-[#DF4E10] transition-colors"
                        onClick={() =>
                          setServicesDropdownOpen(!servicesDropdownOpen)
                        }
                      >
                        {item.label}
                      </button>
                      {servicesDropdownOpen && (
                        <ul className="absolute left-0 mt-2 py-2 w-48 bg-[#001420] rounded-md shadow-xl">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.to}>
                              <NavLink
                                to={subItem.to}
                                className="block px-4 py-2 text-sm text-white hover:bg-[#0A4D8F] hover:text-[#DF4E10]"
                                onClick={() => {
                                  setServicesDropdownOpen(false);
                                  setMenuOpen(false);
                                }}
                              >
                                {subItem.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `text-white hover:text-[#DF4E10] transition-colors ${
                          isActive ? "font-bold" : ""
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={`bg-[#FFFFFF] hover:bg-[#DF4E10] text-[#DF4E10] hover:text-[#FFFFFF] font-bold py-2 px-4 rounded-lg transition-all duration-500 ${
              animate
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#001420] z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <header className="flex justify-between items-center p-4 border-b border-blue-700">
            <button
              title="Close Menu"
              className="text-white cursor-pointer"
              onClick={toggleMenu}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <img src={Logo} alt="Profile" className="h-16 w-auto" />
            <div className="w-8" />
          </header>

          <div className="flex flex-col h-full overflow-y-auto">
            <Layout />

            <div className="p-4">
              <button
                className="w-full bg-[#FFFFFF] hover:bg-[#DF4E10] text-[#DF4E10] hover:text-[#FFFFFF] font-bold py-3 px-4 rounded-lg transition-all duration-300"
                onClick={handleLoginClick}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-col md:flex-row">
        <div className="flex flex-col justify-center items-end px-6 md:px-8 space-y-2 sm:space-y-4 sm:mt-6 relative z-10">
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-sky-150 max-w-xl typing-cursor ml-[36px]">
            {displayedText}
          </p>
          <div className="flex flex-col sm:flex-row justify-between w-full mt-4 sm:mt-8 space-y-4 sm:space-y-0 sm:space-x-4 ml-[26px]">
            <BookmarkButton
              onClick={() =>
                document
                  .getElementById("targetContent")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
