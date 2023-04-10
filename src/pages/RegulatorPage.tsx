import { useState, Component } from "react";
import styles from "../styles/style";
import { Footer, Navbar, CTA, RegulatorIntroduction } from "../Components";

class RegulatorPage extends Component {
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
                    <RegulatorIntroduction />
                    <CTA />
                    <Footer />
                </div>
            </div>


        </div>
    );
}};

export default RegulatorPage;