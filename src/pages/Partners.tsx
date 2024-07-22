import { useRef, useState } from "react";
import blogs from "../constants/blogs";
import Doted from "../assets/doted.svg";
import Sharp from "../assets/sharp.svg";
import left from "../assets/left-arrow.svg";
import right from "../assets/right-arrow.svg";
import read from "../assets/read-more.svg";
import Darkmap from "../assets/Map_dark.svg";
import BG from "../assets/images/partners/hero.svg";
import blogImg1 from "../assets/images/partners/blog-1.png";
import blogImg2 from "../assets/images/partners/blog-2.jpeg";
import blogImg3 from "../assets/images/partners/blog-3.jpeg";
import blogImg4 from "../assets/images/partners/blog-4.jpeg";
import blogImg5 from "../assets/images/partners/blog-5.jpeg";
import blogImg6 from "../assets/images/partners/blog-6.jpeg";
import blogImg7 from "../assets/images/partners/blog-7.png";
import blogImg8 from "../assets/images/partners/blog-8.jpeg";
import blogImg9 from "../assets/images/partners/blog-9.png";
import blogImg10 from "../assets/images/partners/blog-10.jpeg";
import blogImg11 from "../assets/images/partners/blog-11.jpeg";
import blogImg12 from "../assets/images/partners/blog-12.jpeg";
import blogImg13 from "../assets/images/partners/blog-13.jpeg";
import blogImg14 from "../assets/images/partners/blog-14.jpeg";
import blogImg15 from "../assets/images/partners/blog-15.jpeg";
import blogImg16 from "../assets/images/partners/blog-16.jpeg";
import blogImg17 from "../assets/images/partners/blog-17.jpeg";
import blogImg18 from "../assets/images/partners/blog-18.jpeg";
import blogImg19 from "../assets/images/partners/blog-19.jpeg";
import blogImg20 from "../assets/images/partners/blog-20.jpeg";
import blogImg21 from "../assets/images/partners/blog-21.jpeg";
import blogImg22 from "../assets/images/partners/blog-22.jpeg";
import blogImg23 from "../assets/images/partners/blog-23.jpeg";
import blogImg24 from "../assets/images/partners/blog-24.jpeg";
import { TextField, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './Partners.css'
const theme = createTheme({
  palette: {
    primary: {
      main: "#FF9800",
      contrastText: "#fff",
    },
    secondary: {
      light: "#9E9E9E",
      main: "#9E9E9E",
      dark: "#9E9E9E",
      contrastText: "#fff",
    },
  },
});

const Partners = () => {
  const blogImages = [
    blogImg1,
    blogImg2,
    blogImg3,
    blogImg4,
    blogImg5,
    blogImg6,
    blogImg7,
    blogImg8,
    blogImg9,
    blogImg10,
    blogImg11,
    blogImg12,
    blogImg13,
    blogImg14,
    blogImg15,
    blogImg16,
    blogImg17,
    blogImg18,
    blogImg19,
    blogImg20,
    blogImg21,
    blogImg22,
    blogImg23,
    blogImg24,
  ];

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    city: "",
    buildingType: "",
  });

  const cardSectionRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (cardSectionRef.current) {
      cardSectionRef.current.scrollLeft -= 440;
      cardSectionRef.current.style.scrollBehavior = "smooth";
    }
  };

  const scrollRight = () => {
    if (cardSectionRef.current) {
      cardSectionRef.current.scrollLeft += 440;
      cardSectionRef.current.style.scrollBehavior = "smooth";
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(data);
    fetch("https://api.ninon.io/apartment/partner/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error("Error:", error));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full bg-[#30303a]">
       <div className='habyt-container'>
        <div className="main  bg-[#30303a] max-w-[1440px] m-auto pt-[11%]">
          <div
            className="mainanimate hidden  m-auto lg:flex md:flex lg:justify-between text-white bg-no-repeat bg-cover h-[640px] sm:h-[560px]"
            style={{ backgroundImage: `url(${BG})`,backgroundSize:'100% 100%' }}
          >
            <div className="left w-[100%] flex flex-col items-end pl-200 pb-20 md:w-[100%] ">
              <span className="animation leading-[59px] flex justify-center items-center flex-col rounded-l-full   md:w-[100%] text-5xl leading-16 flex-wrap font-bold pl-[18%] pr-[180px] lg:text-[48px] lg:ml-[30px] pt-[18%] bricolage">
                We manage the property.
              </span>
            </div>
            <div className="right w-[100%] flex justify-center items-center py-10 rounded-bl-[200px]">
              <span className="text-[#30303A] unlock flex justify-center font-[700] tracking-[-2.56px] text-[64px] w-[100%] lg:mt-[50%] h-[100%] rounded-t-none rounded-l-none rounded-r-none rounded-b-full m-20 bricolage leading-[80px] ml-[2%]">
                You manage <br /> your time.
              </span>
            </div>
          </div>
          <div className="para hidden lg:flex justify-start courier mt-[-13%]  text-white w-[100%] leading-6  pl-[118px]  text-[16px] font-[400]">
            Discover property <br /> management that takes the <br /> pressure
            off.
          </div>
          <div className="main lg:hidden md:hidden pt-[60px]">
            <div className="animate flex flex-col justify-around pl-[40px]">
              <span className="text-white font-bold text-[28px] mt-[-31%] ">
                We manage <br /> the property.
              </span>
              <span className=" text-black pl-[90px] lg:mt-[44%]  font-bold text-[28px] text[#30303a] ml-[60px] mt-[-170px] mr-[72px] text-right w-[76%] bricolage">
                You manage <br /> your time.
              </span>
            </div>
            <p className="courier text-white mt-3 p-4">
              <span className="font-normal text-[16px] leading-[24px]">
                Discover property management that takes the pressure off.
              </span>
            </p>
          </div>
          <div className="body max-w-[1440px] flex flex-col items-center justify-center m-auto lg:mt-[17%] mt-[5%]">
            <div className="responsiveEverywhere bricolage flex items-center justify-start mt-8 lg:text-[64px] text-[36px] lg:leading-[44px] leading-[42px] font-[700] text-white p-8 lg:w-[100%] w-[70%] pl-[1.5rem] ml-[-130px] lg:ml-[90px] lg:tracking-[-2.56px] tracking-[0px] lg:pb-[60px] pb-[10px]">
              From Berlin, to everywhere
            </div>
            <div className="darkmap flex w-[100%] mt-8 flex-wrap-reverse border-t-[1px] border-b-[1px] border-gray-500 ">
              <div className="unitrespo millage flex flex-col  items-start gap-[10px] lg:w-[29%] justify-between p-10 w-[69%] b-t-[#fff]">
                <span className="unites flex flex-col items-start justify-start">
                  <h1 className="h1  text-[#EF8250] mt-2 font-[700] lg:text-[54px] pb-[14px] bricolage text-[36px] mx-[25px]">
                    30.000
                  </h1>
                  <p className="paragraph lg:text-[20px] text-amber-50 font-[700] text-[24px] mx-[25px] bricolage mt-[-20px]">
                    Units
                  </p>
                </span>
                <span className="cities flex flex-col items-start justify-start bricolage">
                  <h1 className="h1  text-[#EF8250] mx-[25px] mt-2 font-[700] lg:text-[54px] pb-[14px] text-[36px]">50</h1>
                  <p className="paragraph lg:text-[20px] text-amber-50 font-[700] text-[24px] mx-[25px] mt-[-20px]">
                    Cities
                  </p>
                </span>
                <span className="employe flex flex-col items-start justify-start bricolage">
                  <h1 className="h1  text-[#EF8250] mx-[25px] mt-2 font-[700] lg:text-[54px] pb-[14px] text-[36px]">400+</h1>
                  <p className="paragraph lg:text-[20px] text-amber-50 font-[700] text-[24px] mx-[25px] mt-[-20px]">
                    Employees
                  </p>
                </span>
                <span className="nation flex flex-col items-start justify-start bricolage">
                  <h1 className="h1  text-[#EF8250] mx-[25px] mt-2 font-[700] lg:text-[54px] pb-[14px] text-[36px]">45+</h1>
                  <p className="paragraph lg:text-[20px] text-amber-50 font-[700] text-[24px] mx-[25px] mt-[-20px]">
                    Nationalities
                  </p>
                </span>
              </div>
              <div className="border-[1px] z-[49] border-gray-500">
              </div>
              <div className="lg:w-[70%] "
              style={{borderBottom:'1px solid #6B7280'}}>
                <img src={Darkmap} className=" w-[1140px] ml-[-3.5%]" alt="" />
              </div>
            </div>
            <div className="flex lg:flex-row flex-col w-full ">
              <div className="lg:w-[31.75%] w-[100%]">
                <div className="asia  flex flex-col w-[100%]   border-b-2 border-r-2 border-gray-500 ">
                  <span className="head lg:text-[18px] text-[14px] font-bold p-10 text-amber-50 border-b-2 border-gray-500 px-[35px] bricolage lg:px-[70px]">
                    <h1>NORTH AMERICA</h1>
                  </span>
                  <span className="text flex w-[100%] justify-start courier pl-8 lg:px-[70px]  lg:justify-start text-[18px] lg:text-[16px]  text-amber-50  pt-4  font-[400] ">
                    <p className="pb-[20px]">
                      United States 
                      <br />
                      Canada
                      <br />
                      <br />
                    </p>
                  </span>
                </div>
              </div>
              <div className="lg:w-[54%] w-[100%]">
                {" "}
                <div className="europe  flex flex-col w-[100%] justify-evenly border-b-2 border-r-2 border-gray-500">
                  <span className="head bricolage lg:text-[18px] text-[14px] px-[35px] font-bold p-10 text-amber-50 border-b-2 border-gray-500 lg:px-[80px]">
                    <h1>EUROPE</h1>
                  </span>
                  <span className="text flex w-[100%] courier justify-evenly text-amber-50   pt-4 text-[18px] lg:text-[16px] pb-[20px] gap-[29px] px-[40px] lg:px-[0px]">
                    <span>
                      <p>Netherlands </p>
                      <p>Switzerland </p>
                      <p> Portugal </p>
                    </span>
                    <span>
                      <p> Italy </p> <p>Austria </p> <p> Germany</p>
                    </span>
                    <span>
                      <p>
                        France <br /> Spain
                      </p>
                    </span>
                  </span>
                </div>
              </div>
              <div className="lg:w-[23%] w-[100%]">
                {" "}
                <div className="asia  flex flex-col w-[100%] justify-evenly   border-b-2 border-r-2 border-gray-500 ">
                  <span className="head bricolage lg:text-[18px] text-[14px] font-bold text-amber-50 p-10 border-b-2 border-gray-500 px-[35px] lg:px-[70px]">
                    <h1>ASIA</h1>
                  </span>
                  <span className="text flex w-[100%] text-amber-50 justify-start courier  pl-8 lg:px-[70px]  lg:justify-start  text-[18px] lg:text-[16px]  pt-4 pb-[20px] ">
                    <p>
                      Singapore <br />
                      Hong Kong <br />
                      Japan
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="global flex lg:justify-between items-center flex-wrap justify-start  py-16 lg:px-[26px] px-[10px] ">
              <h1 className="respolargest goal text-white text-[18px] lg:text-[30px] font-[200] w-[100%] min-w-[60%] lg:w-[59%] leading-normal   pl-4 lg:pl-14 lg:leading-[62px] tracking-[1.4px]">
                We are the largest <b className="font-[700]"> flexible housing company globally.</b> Our
                mission is to provide access to housing anywhere, for everyone.
              </h1>
              <button className="btn h-[34px] w-[100%]  lg:w-[130px]   bg-[#E6A33C] hover:border-2  hover:border-[#f59e0b] hover:text-[#fff] hover:border-[#fff] hover:bg-[#30303A] rounded-sm mr-[20px] m-auto text-[14px]  lg:mx-0 mx-[15px]">
                Discover More
              </button>
            </div>
          </div>
          <div className="workmain max-w-[1440px] m-auto text-white   border-t-[1px] border-gray-500 flex flex-col lg:flex-row w-[100%]">
            <div className="respoHow rightwork w-[100%] lg:w-[30%] flex flex-col    px-[76px] py-[40px] lg:border-r-[1px] border-gray-500 border-b-[1px]">
              <span className="h1 lg:text-[38px] text-[36px] bricolage leading-[59px] tracking-[-1.92px] py-[20px] lg:py-[10px]">How we do it</span>
              <span className="mm Grotesque text-[14px] leading-[26px] lg:w-[220px] font-[200] w-[100%] pt-[20px] pb-[30px] lg:pb-[0px]">
                We're not here to oversell or complicate. We promise to give you
                just what you need to accelerate your project and business growth.
              </span>
            </div>
            <div className="leftwork flex lg:w-[70%] w-[100%] lg:justify-between lg:mx-[40px] lg:py-[5%] py-[25px] mx-[10px] justify-start p-[1rem]  gap-[6rem] items-center lg:p-[3rem] lg:gap-4 flex-wrap">
              <span className="items flex flex-col w-[100%]  lg:w-[40%]   gap-6  lg:gap-4 ">
                <span>
                  <p className="color  bg-[#32C39B]  w-[30px] h-[30px]"></p>
                </span>
                <span className="headwrok text-[24px] font-bold bricolage">
                  INNOVATIVE BUSINESS MODEL{" "}
                </span>
                <span className="textwork text-[18px] font-[200]">
                  Our business model allows us to improve space density,
                  generating more revenues per sqm than any other solution.
                </span>
              </span>
              <span className="items flex flex-col w-[100%]  lg:w-[40%]  gap-6">
                <span>
                  <p className="color  bg-[#78D35C] w-[30px] h-[30px]"></p>
                </span>
                <span className="headwrok text-2xl font-bold bricolage">
                  TECHNOLOGY & AUTOMATION{" "}
                </span>
                <span className="textwork text-[18px] font-[200]">
                  Our technology allows customers to enjoy a seamless and fully
                  digitalized experience.
                </span>
              </span>
              <span className="items flex flex-col w-[100%]  lg:w-[40%]  gap-6 mt-[20px]">
                <span>
                  <p className="color  bg-[#C2E976] w-[30px] h-[30px]"></p>
                </span>
                <span className="headwrok text-2xl font-bold bricolage w-[115%]">
                  CENTRALIZED OPERATIONS{" "}
                </span>
                <span className="textwork text-[18px] font-[200]">
                  Our Sales, Member Service and Tech teams are all centralized,
                  allowing us to ensure efficiency and best-in-class processes.
                </span>
              </span>
              <span className="items flex flex-col w-[100%]  lg:w-[40%]  gap-6 mt-[20px]">
                <span>
                  <p className="color  bg-[#707077] w-[30px] h-[30px]"></p>
                </span>
                <span className="headwrok text-2xl font-bold bricolage w-[115%]">
                  SOLUTIONS, NOT STRESS{" "}
                </span>
                <span className="textwork text-[18px] font-[200]">
                  We’re agile by nature, and we flex to your needs. It’s never one
                  size fits all – we adapt our solutions to your ambitions.
                </span>
              </span>
            </div>
          </div>
          <div className="why w-[100%] m-auto flex text-white  border-t-2 border-gray-500 flex-col lg:flex-row bg-[#30303a]  ">
            <div className="whyright bricolage w-[100%] lg:w-[35%]  p-8 lg:pl-[5.5%] lg:pt-[160px]  text-[34px] font-bold ">
              <h1>Why Habyt</h1>
            </div>
            <div className="options flex flex-col   w-[100%] lg:w-[65%] border-l-2 border-gray-500 bg-[#30303a] border-t-2 lg:border-t-0  ">
              <div className="one flex justify-center items-center w-[100%] border-b-2 border-gray-500 h-[100px] ">
                <p className="para bricolage  w-[20px] text-[22px]  pr-12 flex justify-center items-center border-r-2 border-gray-500 h-[100%]">
                  1
                </p>
                <h1 className="head   pl-5 w-[80%] text-1xl lg:text-[22px] font-[700]">
                Stable and predictable <span className="font-[300] ml-[10px]">10+ years cash flow</span>
                </h1>
              </div>
              <div className="one flex justify-center items-center w-[100%] border-b-2 border-gray-500 h-[100px] ">
                <p className="para  w-[20px] text-[22px]  pr-12 flex justify-center items-center border-r-2 border-gray-500 h-[100%] bricolage">
                  2
                </p>
                <h1 className="head  pl-5 w-[80%] text-1xl lg:text-[22px] font-[700]">
                  No vacancy risk <span className="font-[300] ml-[10px]">for owners</span>
                </h1>
              </div>
              <div className="one flex justify-center items-center w-[100%] border-b-2 border-gray-500 h-[100px] ">
                <p className="para  w-[20px] text-[22px]  pr-12 flex justify-center items-center border-r-2 border-gray-500 h-[100%] bricolage">
                  3
                </p>
                <h1 className="head  pl-5 w-[80%] text-1xl lg:text-[22px] font-[700]">
                  Professional and most experienced <span className="font-[300] ml-[10px]">counterpart</span>
                </h1>
              </div>
              <div className="one flex justify-center items-center w-[100%] border-b-2 border-gray-500 h-[100px] ">
                <p className="para  w-[20px] text-[22px]  pr-12 flex justify-center items-center border-r-2 border-gray-500 h-[100%] bricolage">
                  4
                </p>
                <h1 className="head  pl-5 w-[80%] text-1xl lg:text-[22px] font-[300]">
                  Attractive returns due to  <span className="font-[700] ml-[10px]">highly profitable business model</span>
                </h1>
              </div>
              <div className="one flex justify-center items-center w-[100%] border-b-2 border-gray-500 h-[100px] ">
                <p className="para  w-[20px] text-[22px]  pr-12 flex justify-center items-center border-r-2 border-gray-500 h-[100%] bricolage">
                  5
                </p>
                <h1 className="head  pl-5 w-[80%] text-1xl lg:text-[22px] font-[700]">
                  Operating excellence  <span className="font-[300] ml-[10px]">in building maintenance and management</span>
                </h1>
              </div>
              <div className="one flex justify-center items-center w-[100%] border-b-0 border-gray-500 h-[100px] ">
                <p className="para  w-[20px] text-[22px]  pr-12 flex justify-center items-center border-r-2 border-gray-500 h-[100%] bricolage">
                  6
                </p>
                <h1 className="head  pl-5 w-[80%] text-1xl lg:text-[22px] font-[700] ">
                  Positive environmental impact (ESG)
                </h1>
              </div>
            </div>
          </div>
          <div className="news text-white flex flex-col lg:flex-row justify-between  lg:items-center items-start border-t-2 border-gray-500 px-[4%]">
            <h1 className="head text-[48px] mt-8 font-[700] lg:pl-[20px] pl-[1px]">News</h1>
            <button className="btn h-[50px] mt-8 items-center justify-center gap-2  w-[50%] lg:w-[130px]  border-[1px] border-white text-white font-bold text-[16px] transition duration-300 ease-in-out hover:border-[2px] mr-[70px] lg:flex hidden">
              Read All
              <img src={read} alt="Icon" className="h-[16px]" />
            </button>
          </div>
          <div className="cardsection flex lg:flex-row gap-4 lg:px-[6%] px-[0%]">
            <div
              className="cad flex lg:flex-row items-center gap-4 lg:overflow-auto mt-16 flex-col lg:max-h-[126vh] m-auto"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "transparent transparent",
              }}
              ref={cardSectionRef}
            >
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="card lg:min-w-[320px] lg:max-w-[320px] lg:w-[445px]  h-auto bg-[#30303a] text-white text-[24px]  border-2 border-gray-500 flex flex-col justify-between font-bold w-[90%] m-auto"
                >
                  <div className="image-container  ">
                    <img
                      src={blogImages[index]}
                      className="w-[385px] h-[220px] object-cover " // Updated Tailwind CSS classes
                      alt=""
                    />
                  </div>
                  <div className="py-[16px] px-[8px]">
                    <span className="text text-[18px] bricolage">{blog.title}</span>
                  </div>
                  <div className="button-container flex justify-end p-4">
                    <button className="btn bricolage flex items-center mb-[30px] w-45 gap-2 text-white text-[16px] border-b border-transparent hover:border-b-2 hover:border-white transition duration-300 ease-in-out">
                      Read More
                      <img src={read} alt="Icon" className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:flex flex-col justify-center items-start gap-5 text-white w-[20%]">
              <span className="one" onClick={scrollLeft}>
                <img src={left} alt="" />
              </span>
              <span className="one" onClick={scrollRight}>
                <img src={right} alt="" />
              </span>
            </div>
          </div>

          <div
            className="presentation  bg-cover text-white lg:text-4xl text-[20px]  mt-10 border-t-[1px] lg:py-[60px] lg:p-10 p-[1rem]
            border-gray-500  py-[55px]"
            style={{
              backgroundImage: `url(${Sharp})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "500px",
            }}
          >
            <h1 className="unlockrespo sm:w-[75%] w-100 lg:w-[80%] lg:font-[400] font-[500] lg:p-12 lg:mb-[0px] mb-[30px] lg:leading-[50px] text-[34px] leading-[35px]">
              Unlock your&nbsp;
              <span className="text-orange-400">building's true potential</span> with
              Habyt, the largest flexible housing company globally.
            </h1>
            <button className="btn lg:h-[42px] w-[80%] lg:w-[190px] mr-0 lg:ml-[3.5rem] ml-0 sm:ml-[48px] text-[14px] font-normal lg:mb-20 mb-[10px] border-[1px] border-white text-white font-bold text-[16px] transition duration-300 ease-in-out hover:border-[2px] py-[10px] lg:py-[0px]">
              Download Presentation
            </button>
          </div>

          <div className="lg:flex py-[10%] lg:px-[100px] px-[0px] justify-between gap-[40px]">
            <div className="left sm:w-[100%] lg:w-[43%]  flex flex-col text-white p-6 lg:p-0 gap-12">
              <span className="h1 text-3xl lg:text-[36px] bricolage">Partner With Us</span>
              <span className="text text-[20px] lg:text-[22px] leading-[30px] font-[200]">
                We're looking forward to present our solutions and onboard you
                into our{" "}
                <b className="font-[700] bricolage">
                  {" "}
                  highly profitable business model. Get in touch to know more!
                </b>
              </span>
            </div>
            <ThemeProvider theme={theme}>
              <div className="w-[95%] md:w-[50%] bg-[#30303a] ">
                <form onSubmit={handleSubmit} className=" flex flex-col gap-6">
                  <div className="lg:flex lg:gap-2 mx-[20px] gap-[20px]">
                    <div>
                      <TextField
                        label="First Name*"
                        color="secondary"
                        focused
                        className="rounded-0 "
                        sx={{
                          width: { xs: "300px", md: "246px" },
                          "& .MuiInputLabel-root": { color: "#ffff" },
                          "& .MuiInputBase-input::placeholder": {
                            color: "#ffffff",
                          },
                        }}
                        InputProps={{
                          sx: { color: "#ffffff" },
                        }}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mt-[20px] lg:mt-[1px]">
                      <TextField
                        label="Last Name*"
                        color="secondary"
                        focused
                        sx={{
                          width: { xs: "300px", md: "246px" },
                          "& .MuiInputLabel-root": { color: "#ffff" },
                          "& .MuiInputBase-input::placeholder": {
                            color: "#ffffff",
                          },
                        }}
                        InputProps={{
                          sx: { color: "#ffff" },
                        }}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex mx-[20px]">
                    <div>
                      <TextField
                        label="Email*"
                        color="secondary"
                        focused
                        sx={{
                          width: { xs: "300px", md: "500px" },
                          "& .MuiInputLabel-root": { color: "#ffff" },
                          "& .MuiInputBase-input::placeholder": {
                            color: "#ffff",
                          },
                        }}
                        InputProps={{
                          sx: { color: "#ffff" },
                        }}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 flex-col lg:flex-row mx-[20px] items-baseline mt-0 md:mt-[-15px]">
                    <div>
                      <TextField
                        label="Company*"
                        color="secondary"
                        focused
                        sx={{
                          width: { xs: "300px", md: "246px" },
                          "& .MuiInputLabel-root": { color: "#fff" },
                          "& .MuiInputBase-input::placeholder": {
                            color: "#ffffff",
                          },
                        }}
                        InputProps={{
                          sx: { color: "#ffffff" },
                        }}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mt-[20px]">
                      <TextField
                        label="Country/City*"
                        color="secondary"
                        focused
                        sx={{
                          width: { xs: "300px", md: "246px" },
                          "& .MuiInputLabel-root": { color: "#ffff" },
                          "& .MuiInputBase-input::placeholder": {
                            color: "#ffffff",
                          },
                        }}
                        InputProps={{
                          sx: { color: "#ffff" },
                        }}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mx-[20px]">
                  <TextField
                    id="outlined-select-currency"
                    select
                    color="secondary"
                    label="Building Type"
                    SelectProps={{ native: true }}
                    InputProps={{ sx: { color: "#ffff" } }}
                    InputLabelProps={{ sx: { color: "#ffff" } }}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#9E9E9E",
                      },
                      width: { xs: "300px", md: "500px" },
                    }}
                    onChange={handleChange}
                  >
                    <option value="option1" style={{ color: "#000000" }}>
                      Residential
                    </option>
                    <option value="option2" style={{ color: "#000000" }}>
                      Commercial
                    </option>
                  </TextField>
                  </div>
                  
                  <p className=" text-white courier w-[350px] lg:w-[500px] font-[300] pr-[65px] text-[12px] mx-[20px]">
                    By submitting this form, I confirm that I have read and I
                    accept Habyt's <a href="">privacy policy</a> and processing of my personal
                    data.
                  </p>
                  <div className="but flex lg:flex lg:justify-end  justify-center w-full lg:w-[525px] ml-[12px]">
                    <Button
                      variant="contained"
                      color="primary"
                      className="lg:w-[100px] w-[95%] m-auto text-white"
                    >
                      Send
                    </Button>
                  </div>
                </form>
              </div>
            </ThemeProvider>
          </div>
          <div className="relative doted flex justify-end items-center h-[600px] text-center overflow-hidden">
            <div
              className="absolute inset-0 bg-cover border-t-2 border-b-2 border-gray-500"
              style={{ backgroundImage: `url(${Doted})` }}
            ></div>
            <h1 className="adaptablerespo lg:text-[50px] bricolage text-[36px]  lg:mt-[-120px] mt-[100px] lg:w-[65%] lg:mt-0 lg:p-[7rem] p-16 relative z-10 font-bold text-left text-white lg:text-center text-left lg:leading-[90px] leading-normal">
              <span className=" text-[#EF8250]">Adaptable</span> living{" "}
              <span className=" text-[#F0A93C]">solutions</span> for{" "}
              <span className=" text-[#FFD378]">ambitious builders</span>
              <div className="lg:hidden block btn text-center lg:h-[50px] w-[40%]  py-[10px]  border-[1px] border-white text-white font-bold text-[16px] transition duration-300 ease-in-out hover:border-[2px] rounded-md mt-[10%] ">
              Get in Touch
            </div>
            </h1>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
