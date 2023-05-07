import { useState } from "react";
import styles from "../styles/style";
import { arrowUp, discount, robot } from "../assets";
import { close, logo, menu, extensionLogo, Subslogo3 } from "../assets";
import { navLinks } from "../constants";
import Button from "./Button";

const Products = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <h1 className="font-poppins font-semibold ss:text-[32px] text-[32px] text-white ">
          Our products <br className="sm:block hidden" />{" "}
        </h1>
        <div className="flex flex-start mt-20 px-20">
          <div className="flex flex-col justify-center items-center bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mr-3">
            <span className="inline-flex items-center justify-center bg-blue-gradient rounded-full shadow-lg">
            <img src={Subslogo3} alt="hoobank" className="w-[50px] " />
            </span>
            <h3 className="text-slate-900 dark:text-white text-center text-[20px] mt-5 text-base font-medium tracking-tight">
              Subs Components
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-center mt-4 text-sm">
              Implement a crypto subscription anywhere with ease.
              Use it on all your projects, no mather the language or framework.
              Contribute to crypto mass adoption.
            </p>
            <a href="/#/#component">
            <button
              type="button"
              className={`menu-transition mx-4 cursor-pointer flex flex-row justify-center items-center text-white bg-blue-gradient text-black  px-8 py-2 rounded-lg cursor-pointer hover:bg-[#2546bd] mt-4`}
            >
              Learn more
              
            </button>
            </a>
          </div>
          <div className="flex flex-col justify-center items-center bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mr-3">
            <span className="inline-flex items-center justify-center p-2 bg-blue-gradient rounded-full shadow-lg">
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              ></svg>
            </span>
            <h3 className="text-slate-900 dark:text-white text-center text-[20px] mt-5 text-base font-medium tracking-tight">
              Personal Subs
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-center mt-4 text-sm">
              Create your own plans directly on our platform in only a few clicks.
              Present your product by customizing your page.
              A smart solution for small businesses.
            </p>
            <a href="/#/#personal">
            <button
              type="button"
              className={`menu-transition mx-4 cursor-pointer flex flex-row justify-center items-center text-white bg-blue-gradient text-black  px-8 py-2 rounded-lg cursor-pointer hover:bg-[#2546bd] mt-4`}
            >
              Learn more
              
            </button>
            </a>
          </div>
          <div className="flex flex-col justify-center items-center bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mr-3">
            <span className="inline-flex items-center justify-center p-2 bg-blue-gradient rounded-full shadow-lg">
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              ></svg>
            </span>
            <h3 className="text-slate-900 dark:text-white text-center text-[20px] mt-5 text-base font-medium tracking-tight">
              Subs Extensions
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-center mt-4 text-sm">
              Send and recieve crypto through social media easely.
              Make it possible thanks to our new extensions.
              A revolutionary way of using social media.
            </p>
            <a href="/#/#extensions">
            <button
              type="button"
              className={`menu-transition mx-4 cursor-pointer flex flex-row justify-center items-center text-white bg-blue-gradient text-black  px-8 py-2 rounded-lg cursor-pointer hover:bg-[#2546bd] mt-4`}
            >
              Learn more
              
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
