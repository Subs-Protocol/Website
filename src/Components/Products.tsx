import { useState } from "react";
import styles from "../styles/style";
import { Subslogo3 } from "../assets";
import { HashLink as BetterLink } from 'react-router-hash-link';
import { Text } from "@mantine/core";
import { IconBrandSpotify, IconCalendarBolt, IconCurrencyBitcoin, IconHeartHandshake, IconSettingsAutomation } from "@tabler/icons-react";


const Products = () => {
  return (
    <section
      id="component"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={` flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <h1 className="font-poppins font-semibold ss:text-[32px] text-[32px] text-black ">
          Uses cases <br className="sm:block hidden" />{" "}
        </h1>
        <div className="flex w-[80%]">
          <p className="text-center mt-6 text-lg leading-8 text-black">
            As Subs protocol is a system that allows for the creation and management of subscription-based services on a blockchain. These services can take various forms, including Subscription, automated investing, peer to peer payments or many others.
          </p>
        </div>
        <div className="flex flex-wrap w-full mt-8 justify-center">
          <div className="mt-8 flex flex-col max-w-[300px] justify-center items-center bg-white  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mr-3">
            <span className="px-2 py-2 items-center justify-center bg-secondary rounded-full shadow-lg">
              {/* <img src={Subslogo3} alt="hoobank" className="w-[50px] " /> */}
              <IconCalendarBolt size={40} color="white" />
            </span>
            <h3 className="text-black text-center text-[22px] mt-5 text-base font-medium tracking-tight">
              Subscription
            </h3>
            <p className="text-black text-center mt-4 text-md">
              Create no-code customized subscription services using Subs.
            </p>
            <a href="https://subsprotocol1s-organization.gitbook.io/subs-protocol/introduction/subscription" target="_blank">
              <button
                type="button"
                className={`menu-transition mx-4 cursor-pointer flex flex-row justify-center items-center text-white bg-secondary text-black  px-8 py-2 rounded-lg cursor-pointer hover:bg-[#2546bd] mt-4`}
              >
                Learn more
              </button>
            </a>
          </div>
          <div className="mt-8 flex flex-col max-w-[300px] justify-center items-center bg-white  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mr-3">
            <span className="px-2 py-2 items-center justify-center bg-secondary rounded-full shadow-lg">
              {/* <img src={Subslogo3} alt="hoobank" className="w-[50px] " /> */}
              <IconSettingsAutomation size={40} color="white" />
            </span>
            <h3 className="text-black text-center text-[22px] mt-5 text-base font-medium tracking-tight">
              Automating Investing
            </h3>
            <p className="text-black text-center mt-4 text-md">
              You can use Subs protocol to create fully DCA protocol easily.
            </p>
            <a href="https://subsprotocol1s-organization.gitbook.io/subs-protocol/introduction/uses-cases" target="_blank">
              <button
                type="button"
                className={`menu-transition mx-4 cursor-pointer flex flex-row justify-center items-center text-white bg-secondary text-black  px-8 py-2 rounded-lg cursor-pointer hover:bg-[#2546bd] mt-4`}
              >
                Learn more
              </button>
            </a>
          </div>
          <div className="mt-8 flex flex-col max-w-[300px] justify-center items-center bg-white  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mr-3">
            <span className="px-2 py-2 items-center justify-center bg-secondary rounded-full shadow-lg">
              {/* <img src={Subslogo3} alt="hoobank" className="w-[50px] " /> */}
              <IconCurrencyBitcoin size={40} color="white" />
            </span>
            <h3 className="text-black text-center text-[22px] mt-5 text-base font-medium tracking-tight">
              Peer to Peer
            </h3>
            <p className="text-black text-center mt-4 text-md">
              Make a recurring payment or be paid recurrently with subs
            </p>
            <a href="https://subsprotocol1s-organization.gitbook.io/subs-protocol/introduction/uses-cases" target="_blank">
              <button
                type="button"
                className={`menu-transition mx-4 cursor-pointer flex flex-row justify-center items-center text-white bg-secondary text-black  px-8 py-2 rounded-lg cursor-pointer hover:bg-[#2546bd] mt-4`}
              >
                Learn more
              </button>
            </a>
          </div>
          <div className="mt-8 flex flex-col max-w-[300px] justify-center items-center bg-white  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mr-3">
            <span className="px-2 py-2 items-center justify-center bg-secondary rounded-full shadow-lg">
              {/* <img src={Subslogo3} alt="hoobank" className="w-[50px] " /> */}
              <IconBrandSpotify size={40} color="white" />
            </span>
            <h3 className="text-black text-center text-[22px] mt-5 text-base font-medium tracking-tight">
              Content Services
            </h3>
            <p className="text-black text-center mt-4 text-md">
              Allow your users to allow their customers to subscribe to their content with Subs.
            </p>
            <a href="https://subsprotocol1s-organization.gitbook.io/subs-protocol/introduction/uses-cases" target="_blank">
              <button
                type="button"
                className={`menu-transition mx-4 cursor-pointer flex flex-row justify-center items-center text-white bg-secondary text-black  px-8 py-2 rounded-lg cursor-pointer hover:bg-[#2546bd] mt-4`}
              >
                Learn more
              </button>
            </a>
          </div>
          <div className="mt-8 flex flex-col max-w-[300px] justify-center items-center bg-white  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mr-3">
            <span className="px-2 py-2 items-center justify-center bg-secondary rounded-full shadow-lg">
              {/* <img src={Subslogo3} alt="hoobank" className="w-[50px] " /> */}
              <IconHeartHandshake size={40} color="white" />
            </span>
            <h3 className="text-black text-center text-[22px] mt-5 text-base font-medium tracking-tight">
              Charity and Donations
            </h3>
            <p className="text-black text-center mt-4 text-md">
              Use Subs to collect recurring donations transparently
            </p>
            <a href="https://subsprotocol1s-organization.gitbook.io/subs-protocol/introduction/uses-cases" target="_blank">
              <button
                type="button"
                className={`menu-transition mx-4 cursor-pointer flex flex-row justify-center items-center text-white bg-secondary text-black  px-8 py-2 rounded-lg cursor-pointer hover:bg-[#2546bd] mt-4`}
              >
                Learn more
              </button>
            </a>
          </div>
          <div className="mt-8 flex flex-col max-w-[300px] justify-center items-center bg-white  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mr-3">
            <h3 className="text-black text-center text-[18px]  tracking-tight">
              The choice is yours
            </h3>
            <a href="https://subsprotocol1s-organization.gitbook.io/subs-protocol/introduction/uses-cases" target="_blank">
              <button
                type="button"
                className={`menu-transition mx-4 cursor-pointer flex flex-row justify-center items-center text-white bg-secondary text-black  px-8 py-2 rounded-lg cursor-pointer hover:bg-[#2546bd] mt-4`}
              >
                See all use cases
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
