import { quotes } from "../assets";

const FeedbackCard = (feedback: {
  content: string;
  name: string;
  title: string;
  img: string;
}) => (
  <div className="flex  justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
    />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-black my-10">
      {feedback.content}
    </p>
    <div className="flex flex-row">
      <img src={feedback.img} alt={feedback.name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-black">
          {feedback.name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-black">
          {feedback.title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
