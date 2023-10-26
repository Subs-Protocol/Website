import { useState, Component } from "react";
import styles from "../styles/style";
import { Footer, Navbar, CTA, FAQ } from "../Components";

class FAQPage extends Component {
    render() {
        return (
            <div className="bg-primary w-full overflow-hidden">
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Navbar />
                    </div>
                </div>
                <center>
                    <div className={`bg-primary mt-24 mx-10 `}>

                        <div className={`flex-1  flex-col xl:px-0 sm:mb-12 sm:px-16 px-6`}>
                            <h1 className="font-poppins font-semibold ss:text-[32px] text-[32px] text-secondary ">
                                Frequently Asked Questions <br className="sm:block hidden" />{" "}
                            </h1>
                        </div>

                        <div className="w-[80%]">
                            <FAQ />
                            <Footer />

                        </div>
                    </div>

                </center>
            </div>
        );
    }
};

export default FAQPage;