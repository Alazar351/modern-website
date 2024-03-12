import Logo from "../../public/logo.svg";
import User from "../../public/user.svg";
import Menu from "../../public/hamburger.svg";
import Image from "next/image";

const navLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Enterprise" },
  { name: "Carrers" },
];

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-5 py-4 lg:container lg:mx-auto lg:px-20">
      <div className=" flex items-center">
        <Image src={Logo} alt="Logo" />

        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => {
            return (
              <p className="text-[#36485C] font-medium " key={index}>
                {item.name}
              </p>
            );
          })}
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <p className="hidden font-medium text-[#36485C] lg:block pr-[56px]">
          Open an Account
        </p>
        <div className="flex items-center gap-x-2">
          <Image src={User} alt="User Profile" />
          <span className="hidden font-medium text-[#36485C] lg:block">
            Sign in
          </span>
        </div>
        <Image src={Menu} alt="Menu Button" className="lg:hidden" />
      </div>
    </nav>
  );
}
