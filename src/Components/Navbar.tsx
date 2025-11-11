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
      <div className="flex flex-row">
        <Link to="/">
          <img src={logo} alt="hoobank" className=" w-12 h-12 " />
        </Link>
        <span className={`text-center text-secondary font-bold text-[32px]`}>
          ubs
        </span>
      </div>
      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-secondary" : "text-black"
              } ${index === navLinks.length - 1 ? "mr-10" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <BetterLink to={`${nav.id}`}>{nav.title}</BetterLink>
          </li>
        ))}
        <li>
          <a className="text-black font-poppins font-normal cursor-pointer text-[16px] mr-10" href="https://subspro.gitbook.io/" target='_blank' rel='noopener noreferrer'> Documentation </a>
        </li>
        <li>
          <a className="text-black font-poppins font-normal cursor-pointer text-[16px] mr-10" href={Subs_Protocol_Whitepaper} target='_blank' rel='noopener noreferrer'> Whitepaper </a>
        </li>
      </ul>
      <a className="justify-center items-center" href="https://app.subsprotocol.com" target="_blank">
        <button className="py-2 px-6 font-poppins font-medium text-[18px] text-white bg-secondary rounded-[10px] outline-none"> Get Started</button>
      </a>
      <div className="sm:hidden inset-y-0 right-0">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-4" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li className="mb-4">
              <a className="text-dimWhite font-poppins font-normal cursor-pointer text-[16px] mb-4" href="https://subsprotocol1s-organization.gitbook.io/subs/" target='_blank' rel='noopener noreferrer'> Documentation </a>
            </li>
            <li>
              <a className="text-dimWhite font-poppins font-normal cursor-pointer text-[16px] " href={Subs_Protocol_Whitepaper} target='_blank' rel='noopener noreferrer'> Whitepaper </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;

