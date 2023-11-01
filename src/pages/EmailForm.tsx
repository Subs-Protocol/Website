import { useState, Component } from "react";
import styles from "../styles/style";
import { Footer, Navbar, MyForm } from "../Components";

class EmailForm extends Component {
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
                    <MyForm/>
                    <Footer />
                </div>
            </div>
        </div>
    );
}};

export default EmailForm;