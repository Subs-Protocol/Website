import styles from "../styles/style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Try out SUBS now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Be a pioneer in the crypto payment industry
        and be an actor of the ecosystem growth.

      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <a href="https://app.subsprotocol.com">
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] menu-transition mx-4 cursor-pointer bg-blue-gradient text-black rounded-lg cursor-pointer hover:bg-[#2546bd]`}
      >
        Get Started
      </button>
      </a>
    </div>
  </section>
);

export default CTA;
