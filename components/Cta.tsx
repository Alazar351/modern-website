import Image from "next/image";
import Arrow from "../public/arrow.svg";

export default function Cta() {
  return (
    <div className="w-full rounded-[16px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-[56px] px-[32px] lg:my-[60px] lg:px-[320px] lg:py-[89px] ">
      <h3 className="text-center text-white text-[32px] font-medium lg:text-[56px] lg:leading-[64px] ">
        Monitor your website like a pro
      </h3>
      <p className="text-white text-center pt-6 lg:text-[18px] lg:pt-[48px] ">
        Join over 800+ happy site owners boosting productivity and efficiency!
      </p>
      <div className="flex flex-col justify-center items-center mt-[14px] w-full lg:mt-[56px] lg:flex-row lg:gap-x-[40px]  ">
        <button className="py-[16px] px-[32px] bg-white rounded-[4px] text-pink-500 font-medium">
          Try for free
        </button>
        <button className="flex items-center justify-center gap-x-3 mt-[32px] text-white  lg:mt-0 font-medium">
          Contact Sales
          <span>
            <Image src={Arrow} alt="Contact" />
          </span>
        </button>
      </div>
    </div>
  );
}
