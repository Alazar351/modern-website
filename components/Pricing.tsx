import Image from "next/image";
import Check from "../public/check.svg";
import { Button } from "./ui/button";

export default function Pricing() {
  return (
    <div className="py-12 px-5 lg:py-[60px] lg:px-[80px] ">
      <h3 className="text-[#172026] font-medium text-2xl text-center lg:text-[42px] ">
        Flexible plans for you
      </h3>
      <p className="text-center text-[#36485C] pt-4 pb-10 lg:text-[18px] ">
        No hidden fees!
      </p>

      <div className="flex flex-col gap-y-6 gap-x-6 lg:flex-row">
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <h4 className="font-medium text-[#4328EB] text-[18px] lg:text-xl  ">
            Free Trial
          </h4>
          <p className="text-[#36485C] pt-3 lg:text-[18px] ">
            Perfect for testing the waters
          </p>
          <p className="font-medium text-2xl text-[#172026] pt-4 lg:text-[32px]">
            $0<span className="text-[#5F7896]">/mo</span>
          </p>
          <ul className="flex flex-col gap-y-2 pt-4 text-[#36485C] ">
            <li className="flex items-center gap-x-2 text-[#36485C] ">
              <span>
                <Image src={Check} alt="included" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C] ">
              <span>
                <Image src={Check} alt="included" />
              </span>
              Sed do eiusmod tempor incididunt
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C] ">
              <span>
                <Image src={Check} alt="included" />
              </span>
              Consectetur adipiscing elit{" "}
            </li>
          </ul>
          <Button className="hover:bg-white w-full mt-4 bg-white py-[14px] text-[#4328EB] font-medium">
            Start Trial
          </Button>
        </div>
        <div className="w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col ">
          <h4 className="font-medium text-white text-[18px] lg:text-xl  ">
            Bussiness
          </h4>
          <p className="text-white pt-3 lg:text-[18px] ">
            Perfect for small business
          </p>
          <p className="font-medium text-2xl text-white pt-4 lg:text-[32px]">
            $500<span className="text-white">/mo</span>
          </p>
          <ul className="flex flex-col gap-y-2 pt-4 text-white ">
            <li className="flex items-center gap-x-2 text-white ">
              <span>
                <Image src={Check} alt="included" className="text-white" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-white ">
              <span>
                <Image src={Check} alt="included" />
              </span>
              Sed do eiusmod tempor incididunt
            </li>
            <li className="flex items-center gap-x-2 text-white ">
              <span>
                <Image src={Check} alt="included" />
              </span>
              Consectetur adipiscing elit{" "}
            </li>
            <li className="flex items-center gap-x-2 text-white ">
              <span>
                <Image src={Check} alt="included" className="text-white" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-white ">
              <span>
                <Image src={Check} alt="included" className="" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
          </ul>
          <Button className="hover:bg-white w-full mt-4 bg-white py-[14px] text-[#4328EB] font-medium">
            Get Started
          </Button>
        </div>
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <h4 className="font-medium text-[#4328EB] text-[18px] lg:text-xl  ">
            Enterprise
          </h4>
          <p className="text-[#36485C] pt-3 lg:text-[18px] ">
            Perfect for big companies
          </p>
          <p className="font-medium text-2xl text-[#172026] pt-4 lg:text-[32px]">
            Custom
          </p>
          <p className="pt-4 text-[16px] text-[#36485C] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <p className="pt-2 text-[16px] text-[#36485C]">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Button className="hover:bg-white w-full mt-4 bg-white py-[14px] text-[#4328EB] font-medium">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
