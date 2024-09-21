import { useState, useEffect } from "react";
import styles from "../styles/style";
import { arrowUp, discount, robot } from "../assets";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Button } from "@mantine/core"
import {
  IconBrandAppstore,
  IconBrandPaypay,
  IconNfc,
  IconPhoneOutgoing, IconWallet
} from "@tabler/icons-react";

const Welcome = () => {

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 mt-20`}
      >
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Crypto subscriptions is finally possible .{' '}
            <a href="https://forms.gle/swPytjXAw2VYyDAx5" className="font-semibold text-indigo-600" target="_blank">
              <span className="absolute inset-0" aria-hidden="true" />
              Work with us <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div
          className={`${styles.flexCenter} justify-center items-center w-full`}
        >
          <h1 className="justify-center text-center items-center font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
          SDK for recurring payment on <br className="sm:block hidden" />{" "}
            <span className={`${styles.flexCenter} text-center text-secondary`}>
               Stellar
            </span>{" "}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
