import { feedback } from "../constants";
import styles from "../styles/style";
import FeedbackCard from "./FeedCard";

const Feedback = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <h1 className="font-poppins font-semibold ss:text-[32px] text-[32px] text-black  ">
      What People are saying about us
    </h1>

    <div className="flex flex-wrap sm:justify-center  w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Feedback;
