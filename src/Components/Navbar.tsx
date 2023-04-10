import { useState } from "react";
import { Link } from 'react-router-dom';
import { HashLink as BetterLink } from 'react-router-hash-link';

import { close, logo, menu, Subs_Protocol_Whitepaper } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/">
      <img src={logo} alt="hoobank" className="w-[124px] " />
      </Link>
      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-10" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <BetterLink to={`${nav.id}`}>{nav.title}</BetterLink>
          </li>
        ))}
        <a className= "text-dimWhite font-poppins font-normal cursor-pointer text-[16px] mr-10" href="https://subsprotocol1s-organization.gitbook.io/subs/" target='_blank' rel='noopener noreferrer'> Documentation </a>
        <a className= "text-dimWhite font-poppins font-normal cursor-pointer text-[16px] mr-10" href={Subs_Protocol_Whitepaper} target='_blank' rel='noopener noreferrer'> Whitepaper </a>
      </ul>

      <button className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none"> Get Started</button>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;

