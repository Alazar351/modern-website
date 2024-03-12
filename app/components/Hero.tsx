import Image from "next/image";
import BlueArrow from "../../public/blueArrow.svg";
import Gradient from "../../public/gradient.svg";
import HeroImage from "../../public/image1.svg";
import Google from "../../public/google.svg";
import Slack from "../../public/slack.svg";
import Trustpilot from "../../public/trustpilot.svg";
import Cnn from "../../public/cnn.svg";
import Clutch from "../../public/clutch.svg";

export default function Hero() {
  return (
    <div className="pt-4 lg:pt-10 ">
      <div className="px-5 lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:leading-[72px] lg:text-[64px] ">
          Start monitoring your website like a pro
        </h1>
        <p className="text-center pt-6 text-[#36485C] leading-6 lg:text[18px] lg:leading-7">
          Get a birds eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>
        <div className="flex w-full pt-8 justify-center gap-x-6">
          <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit ">
            Try for free
          </button>
          <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">
            View Pricing
            <span>
              <Image src={BlueArrow} alt="Learn More" />
            </span>
          </button>
        </div>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradient}
          alt="Gradient"
          className="min-h-[500px] w-full object-cover lg:h-auto "
        />
        <div className="absolute bottom-5 flex w-full flex-col items-center ">
          <Image
            src={HeroImage}
            alt="hero image"
            className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[68%] "
          />

          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20 ">
            <p className="text-white text-center lg:text-[18px]">
              Trusted by these companies
            </p>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5 ">
              <Image src={Google} alt="Google" />
              <Image src={Slack} alt="Slack" />
              <Image src={Trustpilot} alt="Trustpilot" />
              <Image src={Cnn} alt="CNN" />
              <Image src={Clutch} alt="Clutch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
