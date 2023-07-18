import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

const routes = [
  {
    path: "/",
    name: "Manage",
    icon: <FaHome />,
  },
  {
    path: "/messages",
    name: "Service",
    icon: <MdMessage />,
  },
  {
    path: "/analytics",
    name: "Events",
    icon: <BiAnalyse />,
  },
  {
    path: "/order",
    name: "Monetize",
    icon: <BsCartCheck />,
  },
  {
    path: "/saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Commune
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>
          <div className="button-container">
            <a
              href="https://bobdao.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="button"
                style={{
                  width: "600px",
                  height: "480px",
                  margin: "120px",
                  backgroundImage: "url('https://bobdao.in/assets/poster.7b4f2257.jpeg')",
                }}
              >
                Button 1
              </button>
            </a>
            <a
              href="https://www.lumoslabs.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="button"
                style={{
                  width: "600px",
                  height: "480px",
                  margin: "120px",

                  backgroundImage: "url('https://viestories.com/wp-content/uploads/2022/05/A-12.jpg')",
                }}
              >
                Button 2
              </button>
            </a>
          </div>
        </main>
      </div>

      <style>
        {`
          .button-container {
            display: flex;
            justify-content: space-between;
          }

          .button {
            /* Add your button styles here */
            /* Example styles */
            width: 600px;
            height: 480px;
            background-size: cover;
            background-position: center;
          }
        `}
      </style>
    </>
  );
};

export default SideBar;
