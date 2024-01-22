import { useState } from "react";
import logo from "../assets/react.svg";
import { motion } from "framer-motion";
import {
  dashboard,
  products,
  supports,
  transactions,
  users,
} from "../constants/navLinks";
import { NavLink } from "../types/navLink";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [dashboard, users, products, transactions, supports];

const variants = {
  expanded: { width: "20%" },
  nonExpanded: { width: "5%" },
};

const NavBar = () => {
  const [activeItem, setActiveItem] = useState<NavLink>(dashboard);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <motion.div
      animate={isOpen ? "expanded" : "nonExpanded"}
      variants={variants}
      className={`py-12 flex flex-col border border-r-1 w-1/5 h-screen relative ${
        isOpen ? "px-10" : "px-4"
      }`}
    >
      <div className="brand flex space-x-3 items-center">
        <img src={logo} alt="my brand" />
        <span className={`${isOpen ? "block" : "hidden"}`}>
          React Dashboard
        </span>
      </div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-5 h-5 bg-teal-700 rounded-full absolute -right-[10.5px] top-14 flex items-center justify-center cursor-pointer"
      >
        <ChevronRight color="white" className="w-4" />
      </div>

      <div className="mt-10 flex flex-col space-y-8 pl-2">
        {navLinks.map((item) => {
          return (
            <Link to="/" key={item.id}>
              <div
                onClick={() => setActiveItem(item)}
                className={`p-2 flex space-x-3 ${
                  activeItem.id === item.id
                    ? "bg-teal-500 text-white rounded"
                    : ""
                } ${isOpen ? "p-2" : ""}`}
              >
                <item.icon
                  color={`${activeItem.id === item.id ? "#fff" : "#14b8a6"}`}
                />
                <span className={`${isOpen ? "block" : "hidden"}`}>
                  {item.lable}
                </span>
              </div>
            </Link>
          );
          ("");
        })}
      </div>
    </motion.div>
  );
};

export default NavBar;
