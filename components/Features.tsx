import Feature2 from "../public/feature2.svg";
import Feature1 from "../public/feature1.svg";
import Feature3 from "../public/feature3.svg";
import Check from "../public/check.svg";
import BlueArrow from "../public/blueArrow.svg";
import RedArrow from "../public/redArrow.svg";
import GreenArrow from "../public/greenArrow.svg";
import Image from "next/image";
export default function Features() {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:g-y-[80px] ">
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse ">
        <Image
          src={Feature1}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px] ">
          <p className="font-medium text-[#0085FF] lg:text-[18px] ">
            Sales Monitoring
          </p>
          <h3 className="text-2xl pt-[12px] font-medium text-[#172026] lg:text-[42px] lg:leading-[58px] ">
            Simplify your sales monitoring
          </h3>
          <Image
            src={Feature1}
            alt="Feature 1 image"
            className="pt-6 sm:hidden"
          />
          <p className="py-6 text-[#36485C] lg:text-[18px]  ">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px] ">
            <li className="flex items-center gap-x-2 text-[#36485C] ">
              <span>
                <Image src={Check} alt="checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C] ">
              <span>
                <Image src={Check} alt="checkmark" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C] ">
              <span>
                <Image src={Check} alt="checkmark" />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>
          <p className="flex justify-start gap-x-3 py-2 text-[#0085FF] font-medium pt-6 lg:text-[18px] ">
            Learn More
            <span>
              <Image src={BlueArrow} alt="Learn More" />
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-x-6 sm:flex-row ">
        <Image
          src={Feature2}
          alt="Feature 2 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px] ">
          <p className="font-medium text-[#00A424] lg:text-[18px] ">
            Customer Support
          </p>
          <h3 className="text-2xl pt-[12px] font-medium text-[#172026] lg:text-[42px] lg:leading-[58px] ">
            Get in touch with your customers
          </h3>
          <Image
            src={Feature2}
            alt="Feature 2 image"
            className="pt-6 sm:hidden"
          />
          <p className="py-6 text-[#36485C] lg:text-[18px]  ">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px] ">
            <li className="flex items-center gap-x-2 text-[#36485C] ">
              <span>
                <Image src={Check} alt="checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C] ">
              <span>
                <Image src={Check} alt="checkmark" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C] ">
              <span>
                <Image src={Check} alt="checkmark" />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>
          <p className="flex justify-start gap-x-3 py-2 text-[#00A424] font-medium pt-6 lg:text-[18px] ">
            Learn More
            <span>
              <Image src={GreenArrow} alt="Learn More" />
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse ">
        <Image
          src={Feature3}
          alt="Feature 3 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px] ">
          <p className="font-medium text-[#EB2891] lg:text-[18px] ">
            Growth Monitoring
          </p>
          <h3 className="text-2xl pt-[12px] font-medium text-[#172026] lg:text-[42px] lg:leading-[58px] ">
            Monitor your site’s new subscribers{" "}
          </h3>
          <Image
            src={Feature3}
            alt="Feature 3 image"
            className="pt-6 sm:hidden"
          />
          <p className="py-6 text-[#36485C] lg:text-[18px]  ">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
          <div className="flex w-full gap-x-6 ">
            <div className="w-1/2 flex flex-col gap-y-3">
              <p className="text-[20px] font-medium text-[#172026] ">100+</p>
              <p className=" font-medium text-[#5F7896] ">
                Lorem ipsum dolor sit
              </p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              <p className="text-[20px] font-medium text-[#172026] ">800+</p>
              <p className=" font-medium text-[#5F7896] ">
                Conse adipiscing elit
              </p>
            </div>
          </div>
          <p className="flex justify-start gap-x-3 py-2 text-[#EB2891] font-medium pt-6 lg:text-[18px] ">
            Learn More
            <span>
              <Image src={RedArrow} alt="Learn More" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
