import { useState, useEffect } from "react";
import styles from "../styles/style";
import { arrowUp, discount, robot } from "../assets";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";


const Welcome = () => {

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 mt-20`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
             Free For{" "}
            <span className="text-white">Everyone</span>
          </p>
        </div>

        <div
          className={`${styles.flexCenter} justify-center items-center w-full`}
        >
          <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Decentralized Subscription <br className="sm:block hidden" />{" "}
            <span className={`${styles.flexCenter} text-gradient`}>
              Services
            </span>{" "}
          </h1>
        </div>
        <p
          className={`${styles.paragraph} justify-center items-center max-w-[470px] mt-5`}
        >
          Automatic and recurrent payments for self custodial wallets without blocking funds.
        </p>
        <p
          className={`${styles.paragraph} justify-center items-center max-w-[470px]`}
        >
          A fully integrated suite of Web3 payment products.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
