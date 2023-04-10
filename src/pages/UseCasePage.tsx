import { useState, Component } from "react";
import styles from "../styles/style";
import { Footer, Navbar, CTA, UseCasesIntroduction } from "../Components";

class UseCasePage extends Component {
    render() {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <UseCasesIntroduction />
                    <CTA />
                    <Footer />
                </div>
            </div>


        </div>
    );
}};

export default UseCasePage;