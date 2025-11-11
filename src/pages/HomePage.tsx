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
          <Subsproducts />
          {/* <Feedback /> */}
          <Footer />
        </div>
      </div>
    </div>
    

    );
}
};

export default HomePage;

