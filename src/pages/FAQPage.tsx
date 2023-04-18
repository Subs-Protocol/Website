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
                <div className={`bg-primary mt-24 mx-10 ${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        
                        <div className={`flex-1  flex-col xl:px-0 sm:mb-12 sm:px-16 px-6`}>
                            
                            <a href='/front/src/pages/Subs_Protocol_Whitepaper.pdf' target='_blank' rel='noopener noreferrer'> Test</a>
                            <h1 className="font-poppins font-semibold ss:text-[32px] text-[32px] text-gradient ">
                                Frequently Asked Questions <br className="sm:block hidden" />{" "}
                            </h1>
                        </div>

                        <div className="mx-28">
                            <FAQ />
                        </div>

                        
                        <CTA />
                        <Footer />
                    </div>
                </div>
                

            </div>
        );
    }
};

export default FAQPage;