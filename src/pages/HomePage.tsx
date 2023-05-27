import { useState, Component } from "react";
import styles from "../styles/style";
import { Navbar, Products, Welcome, Subsproducts, Stats, Feedback, CTA, Footer } from "../Components";



class HomePage extends Component {
    render() {
    return (
        <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <Navbar />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Welcome />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Products />
          <Stats />
          <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:mb-12 sm:px-16 px-6`}>
            <h1 className="font-poppins font-semibold ss:text-[32px] text-[32px] text-white ">
              Don't miss all these new oportunities <br className="sm:block hidden" />{" "}
            </h1>
          </div>

          <Subsproducts />
          <Feedback />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
    

    );
}
};

export default HomePage;

