import React, { useEffect, useState } from "react";
import styles from "../styles/style";
import Faq from "react-faq-component";

const data4 = {
    title: "All about our protocol",
    rows: [
        {
            title: <p className="mx-[2rem]">What's the purpose of this tool for companies ?</p>,
            content: <p className="mx-[4rem]"> Companies are eager to be part of Web3. But they usually don't know how to do it.
            This is the perfect first step for them. It could attract new customers that want to pay with crypto.
            Besides, it doesn't prevent customers to use other payment methods.</p>,
        },
        {
            title: <p className="mx-[2rem]">What's the purpose of this tool for customers ?</p>,
            content: <p className="mx-[4rem]"> Crypto hodlers would love to be able to use, pay with crypto for goods on a daily basis.
            It is a great way to show companies how engaged and serious they are, thus encourage other companies to make their first step in Web3. </p>,
        },
        {
            title: <p className="mx-[2rem]">Why subscriptions ?</p>,
            content: <p className="mx-[4rem]"> Making recurring payments on the blockchain can get tricky.
            But this payment method is getting more popular every day. We want to make it easier to use so that customers can integrated
            crypto into their usual payment methods without trouble.</p>,
        },
        {
            title: <p className="mx-[2rem]">How do I cancel a subscription ?</p>,
            content: <p className="mx-[4rem]"> You can cancel your subscription whenever you want, no  extra fees will be charged. You will be able to
            monitor all your subscription directly from the Subs application if the service using Subs doesn't provide a cancelation method.</p>,
        },
        {
            title: <p className="mx-[2rem]">Can I reward my subscribers ?</p>,
            content: <p className="mx-[4rem]">
                It's completly up to you but yes you can. We will provide you a detailed list of your current and past subscibers.
                We are also planning on offering you a convinent tool to make airdrops and create whitelists.
            </p>,
        },
    ],
};

const data = {
    title: "All about Personal Subs",
    rows: [
        {
            title: <p className="mx-[2rem]">Personal Subs ?</p>,
            content: <p className="mx-[4rem]">Personal Subs is our personal page platform and it's free. It gives the opportunity to small businesses
            to get a simple and periodic income stream.</p>,
        },
        {
            title: <p className="mx-[2rem]">How to use it ?</p>,
            content:
            <div>
                <p className="mx-[4rem]">In order to use Personal Subs you need to:</p>
                <p className="mx-[6rem]">
                    -  Connect your browser wallet with the website.<br/>
                    -  Create one or multiple plans.<br/>
                    -  Customize your page thanks to our low-code tool.</p></div>,
        },
    ],
};

const data2 = {
    title: "All about Subs Extensions",
    rows: [
        {
            title: <p className="mx-[2rem]">Subs Extensions ?</p>,
            content: <p className="mx-[4rem]">Subs Extensions is a browser extensions that allows you to subscribe to your favorite content creator 
            directly from your social media platform. The users can choose among all the plans created by the content creator.</p>,
        },
        {
            title: <p className="mx-[2rem]">How to use it ?</p>,
            content:
            <div>
                <p className="mx-[4rem]">In order to use Subs Extensions you need to:</p>
                <p className="mx-[6rem]">    -  Install the Subs Extensions.<br/>
                    -  Connect the extension with your browser wallet.<br/>
                    -  Connect the extension to your social media.</p></div>,
        },
        
    ],
};

const data3 = {
    title: "All about Subs Components",
    rows: [
        {
            title: <p className="mx-[2rem]">Subs Components ?</p>,
            content: <p className="mx-[4rem]">Subs Components is a kit that makes it possible to create plans very easily. 
            It offers a new convenient payment method to your customers .
            </p>,
        },
        {
            title: <p className="mx-[2rem]">How to use it ?</p>,
            content:
            <p className="mx-[4rem]">
            We will offer a collection of packages and plugins that will make it easy for you to implement it to your stack.
            You will be able to create your plan on our dApp, then get the infos for the API.
            Then add this data in the Subs package or plugin config. </p>,
        },  
    ],
};

const stylesFAQ = {
    bgColor: 'transparent',
    titleTextColor: "#a5f3fc",
    rowTitleTextSize: "25px",
    rowTitleColor: "white",
    rowContentColor: "white",
    // rowContentColor: 'grey',
    arrowColor: "#4f46e5",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function FAC() {

    return (
        <div>
            <div className="my-10">
            <Faq
                data={data4}
                styles={stylesFAQ}
                config={config}
            />
            </div>
            <div className="my-10">
            <Faq
                data={data}
                styles={stylesFAQ}
                config={config}
            />
            </div>
            <div className="my-10">
            <Faq
                data={data2}
                styles={stylesFAQ}
                config={config}
            />
            </div>
            <div className="my-10">
            <Faq
                data={data3}
                styles={stylesFAQ}
                config={config}
            />
            </div>
        </div>
        
    );
}