import { FC, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logoLight from "../assets/logo_light.svg";
import logoDark from "../assets/logo_dark.svg";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

interface Props {
  country: string | undefined;
  isBlackHeader: boolean | undefined;
}

interface City {
  title: string;
  url: string;
}

const Header: FC<Props> = ({ isBlackHeader }) => {
  const [showCities, setShowCities] = useState(false);
  const [showMobNav, setShowMobNav] = useState(false);

  const paraRef = useRef<HTMLParagraphElement>(null);
  const navigate = useNavigate();

  const cities1: City[] = [
    { title: "Amsterdam", url: "stays/amsterdam" },
    { title: "Barcelone", url: "stays/barcelone" },
    { title: "Berlin", url: "stays/berlin" },
    { title: "Frankfurt", url: "stays/frankfurt" },
    { title: "Hamburg", url: "stays/hamburg" },
  ];
  const cities2: City[] = [
    { title: "Lisbon", url: "stays/lisbon" },
    { title: "Madrid", url: "stays/madrid" },
    { title: "Milan", url: "stays/milan" },
    { title: "Modena", url: "stays/modena" },
    { title: "Paris", url: "stays/paris" },
  ];
  const cities3: City[] = [
    { title: "Turin", url: "stays/turin" },
    { title: "Munich", url: "stays/munich" },
    { title: "Rotterdam", url: "stays/rotterdam" },
    { title: "Stuttgart", url: "stays/stuttgart" },
    { title: "Dusseldorf", url: "stays/dusseldorf" },
  ];
  const cities4: City[] = [
    { title: "Cologne", url: "stays/cologne" },
    { title: "Zurich", url: "stays/zurich" },
    { title: "The Hauge", url: "stays/the-hauge" },
    { title: "Graz", url: "stays/graz" },
  ];
  const cities5: City[] = [
    { title: "Hong Kong", url: "stays/hong-kong" },
    { title: "Singapore", url: "stays/singapore" },
  ];

  const country = window.location.pathname.split("/")[2]
    ? window.location.pathname
        .split("/")[2]
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Find a Home";

  return (
    <div className={`w-[100%] fixed left-0 top-0 z-[99999] ${
      isBlackHeader ? "bg-[#30303a] text-white" : "bg-white text-zinc-900"
    }`}>
      <div className='nav w-[100%] max-w-[1170px] mx-auto'>
        <div className="navbar w-full px-[8px] flex justify-between items-center border-b">
          <div className="navLeft flex justify-center items-center gap-16 h-full">
            <div
              className="logo my-8 inline-block lg:ml-0 cursor-pointer"
              onClick={() => navigate("/")}
            >
              {isBlackHeader ? (
                <img src={logoDark} className="object-cover" alt="Logo" />
              ) : (
                <img src={logoLight} className="object-cover" alt="Logo" />
              )}
            </div>
            <div
              className="find-a-home border-zinc-900 hidden lg:flex items-center gap-2 px-4 cursor-pointer font-semibold h-full py-8 hover:text-[#E680E6]"
              onClick={() => setShowCities(!showCities)}
              onMouseOver={(e) => {
                setShowCities(true);
              }}
            >
              <p
                ref={paraRef}
                className="capitalize transition-all duration-300 ease-in-out hover:border-b hover:border-zinc-900 "
              >
                {country ? country : "Find a Home"}
              </p>
              {showCities ? (
                <MdOutlineArrowDropUp className="text-[20px]" />
              ) : (
                <IoMdArrowDropdown className="text-[20px]" />
              )}
            </div>
          </div>
          <div className="navRight hidden lg:flex justify-center items-center gap-12 lg:pr-0 my-8">
            <p className="cursor-pointer hovered-text active:text-purple-500 transition-all duration-300 ease-in-out hover:border-b hover:border-zinc-900">
              <a href="/#">About Habyt</a>
            </p>
            <p className="cursor-pointer hovered-text active:text-purple-500 transition-all duration-300 ease-in-out hover:border-b hover:border-zinc-900">
              <a href="/#">For Landlords</a>
            </p>
            <p className="cursor-pointer hovered-text active:border-purple-500 hovered-text transition-all duration-300 ease-in-out font-bold px-4 py-2 border-zinc-500 border-[1px] hover:border-zinc-900 hover:border-[2px]">
              Get In Touch
            </p>
            <p className="cursor-pointer hovered-text active:text-purple-500 hovered-text transition-all duration-300 ease-in-out hover:border-b hover:border-zinc-900">
              Login
            </p>
          </div>
          {!showMobNav && (
            <div className="nav-mob cursor-pointer lg:hidden">
              <RxHamburgerMenu
                className="text-[1.5rem]"
                onClick={() => setShowMobNav(true)}
              />
            </div>
          )}
          <div
            className={`w-[85%] md:w-[40%] lg:w-[100%] shadow-2xl mobile-nav flex flex-col h-full py-12 px-8 fixed top-0 right-0 z-20 
                ${isBlackHeader ? "bg-[#30303a]" : "bg-white"}
                ${showMobNav ? "fadeIn block" : "fadeOut hidden"}
              `}
          >
            <RxCross1
              className="text-[1.2rem] ml-auto cursor-pointer"
              onClick={() => setShowMobNav(false)}
            />
            <div className="mt-12 flex flex-col gap-8">
              <a
                href="/#"
                className="decoration-0 w-fit font-bold hover:border-b-2 hover:border-zinc-900"
              >
                About Habyt
              </a>
              <a
                href="/#"
                className="decoration-0 w-fit font-bold hover:border-b-2 hover:border-zinc-900"
              >
                For Landlords
              </a>
              <a
                href="/#"
                className="decoration-0 w-full flex justify-center items-center p-2 font-bold border border-zinc-400 hover:border-zinc-900"
              >
                Find A Home
              </a>
              <a
                href="/#"
                className="decoration-0 w-full flex justify-center items-center p-2 font-bold border border-zinc-400 hover:border-zinc-900"
              >
                Get In Touch
              </a>
            </div>
            <div className="w-full border mt-8"></div>
            <a
              href="/#"
              className="mt-4 w-fit font-bold hover:border-b-2 hover:border-zinc-900"
            >
              Login
            </a>
          </div>
        </div>
        {showCities && (
          <div
            onMouseOver={() => setShowCities(true)}
            onMouseOut={() => setShowCities(false)}
            className={`w-full py-12 gap-32 absolute left-0 ${
              isBlackHeader ? "bg-[#4B4C53] text-white" : "bg-stone-100 text"
            }`}
          >
            <div className="w-[100%] max-w-[1170px] mx-auto flex">
              <div className="flex flex-col gap-4 w-[60%] pl-2">
                <h2 className="text-lg font-bold">Europe</h2>
                <div className="flex gap-8 font-bold">
                  <div className="flex flex-col gap-4 ">
                    {cities1.map(({ title, url }) => (
                      <span
                        onClick={() => navigate(url)}
                        key={title}
                        className="cursor-pointer flex items-center gap-4 w-32 focus:text-purple-500 active:text-purple-500 transition-colors group overflow-hidden"
                      >
                        <div className="transition-all duration-300 ease-out transform group-hover:scale-105">
                          <p className="text-[16px] font-medium">{title}</p>
                        </div>

                        <FaArrowRight className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out" />
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4">
                    {cities2.map(({ title, url }) => (
                      <span
                        onClick={() => navigate(url)}
                        key={title}
                        className="cursor-pointer flex items-center gap-4 w-32 focus:text-purple-500 active:text-purple-500 transition-colors group overflow-hidden"
                      >
                        <div className="transition-all duration-300 ease-out transform group-hover:scale-105">
                          <p className="text-[16px] font-medium">{title}</p>
                        </div>

                        <FaArrowRight className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out" />
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4">
                    {cities3.map(({ title, url }) => (
                      <span
                        onClick={() => navigate(url)}
                        key={title}
                        className="cursor-pointer flex items-center gap-4 w-32 focus:text-purple-500 active:text-purple-500 transition-colors group overflow-hidden"
                      >
                        <div className="transition-all duration-300 ease-out transform group-hover:scale-105">
                          <p className="text-[16px] font-medium">{title}</p>
                        </div>

                        <FaArrowRight className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out" />
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4">
                    {cities4.map(({ title, url }) => (
                      <span
                        onClick={() => navigate(url)}
                        key={title}
                        className="cursor-pointer flex items-center gap-4 w-32 focus:text-purple-500 active:text-purple-500 transition-colors group overflow-hidden"
                      >
                        <div className="transition-all duration-300 ease-out transform group-hover:scale-105">
                          <p className="text-[16px] font-medium">{title}</p>
                        </div>

                        <FaArrowRight className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out" />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-[40%]">
                <h2 className="text-lg font-bold">Asia</h2>
                <div className="flex gap-24 font-bold">
                  <div className="flex flex-col gap-4 ">
                    {cities5.map(({ title, url }) => (
                      <span
                        onClick={() => navigate(url)}
                        key={title}
                        className="cursor-pointer flex items-center gap-4 w-32 focus:text-purple-500 active:text-purple-500 transition-colors group overflow-hidden"
                      >
                        <div className="transition-all duration-300 ease-out transform group-hover:scale-105">
                          <p className="text-[16px] font-medium">{title}</p>
                        </div>

                        <FaArrowRight className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out" />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
