import { useState, useEffect } from "react";
import moment from "moment";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import CustomAccordion from "../components/Accordion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import ImageSlider from "../components/ImageSlider";
import CropFreeIcon from "@mui/icons-material/CropFree";
import LocalHotelOutlinedIcon from "@mui/icons-material/LocalHotelOutlined";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";
import TableRestaurantOutlinedIcon from "@mui/icons-material/TableRestaurantOutlined";
import LivingOutlinedIcon from "@mui/icons-material/LivingOutlined";
import BlenderOutlinedIcon from "@mui/icons-material/BlenderOutlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import DeckOutlinedIcon from "@mui/icons-material/DeckOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import PersonalVideoOutlinedIcon from "@mui/icons-material/PersonalVideoOutlined";
import MicrowaveOutlinedIcon from "@mui/icons-material/MicrowaveOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { countriesData } from "../constants/roomsData";
import mapImage from "../assets/map.avif";
import CardVert from "../components/CardVert";
import backgroundRoom from "../assets/images/rooms/bedRoom.webp";
import backgroundRoom1 from "../assets/images/rooms/badroom-2.webp";
import backgroundRoom2 from "../assets/images/rooms/rooms.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const RoomDetails = () => {
  // const { country } = useParams()
  // const navigate = useNavigate()

  // const room = {
  //   shareType: 'PRIVATE_ROOM',
  //   rent: { currency: 'USD', amount: '500' },
  //   availableFrom: '2023-12-01',
  //   availableUntil: '2023-12-31',
  //   images: ['image1.jpg', 'image2.jpg'],
  //   apartment: {
  //     code: 'ABC123',
  //   },
  // }

  // const roomEquipments = [
  //   {
  //     icon: <CropFreeIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: `${room?.area?.value} ${room?.area?.unit}`,
  //   },
  //   {
  //     icon: <BlenderOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Basic Appliances',
  //   },
  //   {
  //     icon: <KitchenOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Fridge',
  //   },
  //   {
  //     icon: <ChairOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Sofa',
  //   },
  //   {
  //     icon: <ShowerOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Private Bathroom',
  //   },
  //   {
  //     icon: <BedOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Bed',
  //   },
  //   {
  //     icon: <AcUnitOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Air Conditioner',
  //   },
  //   {
  //     icon: <WifiOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Wifi',
  //   },
  //   {
  //     icon: <WindowOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Windows',
  //   },
  // ]

  // const apartmentEquipments = [
  //   {
  //     icon: <CropFreeIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: `${room?.apartment?.area?.value} ${room?.apartment?.area?.unit}`,
  //   },
  //   {
  //     icon: <LocalHotelOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: `${room?.apartment?.bedroomCount} Bedrooms`,
  //   },
  //   {
  //     icon: <StairsOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: room?.apartment.floor,
  //   },
  //   {
  //     icon: <LivingOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Common Area',
  //   },
  //   {
  //     icon: <TableRestaurantOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Dining Area',
  //   },
  //   {
  //     icon: <BlenderOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Fully equipped kitchen',
  //   },
  //   {
  //     icon: <KitchenOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Fridge',
  //   },
  //   {
  //     icon: (
  //       <LocalLaundryServiceOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />
  //     ),
  //     name: 'Laundary Machine',
  //   },
  //   {
  //     icon: <DeckOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Roof Deck',
  //   },
  //   {
  //     icon: <ChairOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Sofa',
  //   },
  //   {
  //     icon: <ShowerOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Shared Bathroom',
  //   },
  //   {
  //     icon: <PersonalVideoOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Television',
  //   },
  //   {
  //     icon: <MicrowaveOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Microwave',
  //   },
  //   {
  //     icon: <BedOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Bed',
  //   },
  //   {
  //     icon: <AcUnitOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Air Conditioner',
  //   },
  //   {
  //     icon: <CheckroomOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Washing Machine',
  //   },
  //   {
  //     icon: <WifiOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Wifi',
  //   },
  //   {
  //     icon: <WindowOutlinedIcon className='w-[1.5rem] h-[1.5rem]' />,
  //     name: 'Windows',
  //   },
  // ]

  const { country, roomId } = useParams();
  const countryName =
    country.replace("-", " ").charAt(0).toUpperCase() +
    country.replace("-", " ").slice(1);
  const navigate = useNavigate();
  const { state } = useLocation();

  const [key, setKey] = useState(null);
  const [room, setRoom] = useState(null);
  const [isImageShow, setIsImageShow] = useState(false);
  const [allRooms, setAllRooms] = useState(null);

  const availableFrom = moment(room?.availableFrom).format("MMM D");

  const shareType = {
    PRIVATE_APARTMENT: "Private Apartment",
    PRIVATE_ROOM: "Private Room",
    SHARED_ROOM: "Shared Room",
    ALL_TYPES_OF_STAY: "All Types of Stay",
  };

  function findParentKeyByChildId(childId, parentObject) {
    for (var key in parentObject) {
      if (parentObject[key].id === childId) {
        return key;
      }
    }
    return null;
  }

  useEffect(() => {
    const keyStr = findParentKeyByChildId(
      roomId,
      countriesData[country.replace("-", "")]
    );
    setKey(keyStr);
    setRoom(countriesData[country.replace("-", "")][keyStr]);
  }, [roomId, country]);

  useEffect(() => {
    setAllRooms(state?.allRooms);
  }, [state]);

  const roomEquipments = [
    {
      icon: <CropFreeIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: `${room?.area?.value} ${room?.area?.unit}`,
    },
    {
      icon: <BlenderOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Basic Appliances",
    },
    {
      icon: <KitchenOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Fridge",
    },
    {
      icon: <ChairOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Sofa",
    },
    {
      icon: <ShowerOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Private Bathroom",
    },
    {
      icon: <BedOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Bed",
    },
    {
      icon: <AcUnitOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Air Conditioner",
    },
    {
      icon: <WifiOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Wifi",
    },
    {
      icon: <WindowOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Windows",
    },
  ];

  const apartmentEquipments = [
    {
      icon: <CropFreeIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: `${room?.apartment?.area?.value} ${room?.apartment?.area?.unit}`,
    },
    {
      icon: <LocalHotelOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: `${room?.apartment?.bedroomCount} Bedrooms`,
    },
    {
      icon: <StairsOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: room?.apartment.floor,
    },
    {
      icon: <LivingOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Common Area",
    },
    {
      icon: <TableRestaurantOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Dining Area",
    },
    {
      icon: <BlenderOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Fully equipped kitchen",
    },
    {
      icon: <KitchenOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Fridge",
    },
    {
      icon: (
        <LocalLaundryServiceOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />
      ),
      name: "Laundary Machine",
    },
    {
      icon: <DeckOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Roof Deck",
    },
    {
      icon: <ChairOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Sofa",
    },
    {
      icon: <ShowerOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Shared Bathroom",
    },
    {
      icon: <PersonalVideoOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Television",
    },
    {
      icon: <MicrowaveOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Microwave",
    },
    {
      icon: <BedOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Bed",
    },
    {
      icon: <AcUnitOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Air Conditioner",
    },
    {
      icon: <CheckroomOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Washing Machine",
    },
    {
      icon: <WifiOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Wifi",
    },
    {
      icon: <WindowOutlinedIcon className="w-[1.5rem] h-[1.5rem]" />,
      name: "Windows",
    },
  ];

  const buildingData = ["Community space", "Security", "Swimming Pool"];

  console.log(
    "room",
    room,
    country.replace("-", " ").charAt(0).toUpperCase() +
      country.replace("-", " ").slice(1)
  );
  const formatSharedType = (sharedType = "") => {
    return sharedType
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };
  const imageStyle = {
    width: "50%", // Adjust width as needed
    height: "300px", // Adjust height as needed
  };
  return (
    <div className="habyt-container">
      <div className="mt-[9%]">
        <div className="w-full h-full flex flex-col gap-2 p-4">
          <div className="hidden lg:flex justify-between items-center px-[3rem] gap-4 pt-4 mb-4">
            <div className="flex flex-col lg:gap-2 gap-[0px]">
              <p className="text-[0.8rem] capitalize flex gap-[10px] items-center">
                <div className="font-[400] text-[12px] leading-[18px] flex gap-[10px] items-center bricolage">
                  {countryName === "Hong Kong" || countryName === "Singapore"
                    ? "Asia"
                    : "Europe"}{" "}
                  <span className="text-[7px] text-gray-300">──</span>{" "}
                </div>
                <span
                  className="cursor-pointer hover:border-b hover:border-zinc-700 text-[12px] font-[400] leading-[18px]"
                  onClick={() => navigate(`/stays/${country}`)}
                >
                  {countryName}
                </span>
                <>
                  {" "}
                  <span className="text-[7px] text-gray-300">──</span>
                  {formatSharedType(room?.shareType)}
                </>
              </p>
              <div className="flex gap-4 items-center">
                <h1 className="text-[48px] font-[700] tracking-[-1.92px] leading-[1] bricolage text-left w-fit">
                  Private Room
                </h1>
                <p className="text-[0.8rem] border-[1px] border-zinc-800 p-[4px] px-2 h-fit">
                  Available From:{" "}
                  <b>{moment(room?.availableFrom).format("MMM DD")}</b>
                </p>
              </div>
              <p className="text-[18px] leading-[0.8] font-[400] text-left capitalize bricolage">
                {countryName}
              </p>
            </div>
            <div className="flex justify-end items-center gap-4">
              <div className="flex flex-col">
                <p className="w-full text-right text-[12px] leading-[18px] bricolage">
                  From
                </p>
                <div className="flex w-fit items-center gap-2">
                  <IoMdInformationCircleOutline
                    className="text-[#707070]"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                  />
                  <p className="font-[700] leading-[30px] text-[36px] capitalize font-mono">
                    HK$
                    {new Intl.NumberFormat("en-US").format(
                      room?.grossRent?.amount
                    )}
                  </p>
                </div>
                <p className="w-full text-right text-[12px] leading-[18px] bricolage">
                  monthly
                </p>
              </div>
              <button className="p-3 leading-[24px] font-[700] px-4 h-fit bg-[#272220] text-white text-center align-middle rounded-sm bricolage text-[16px] hover:border-[1px] hover:border-black hover:text-black hover:bg-none respons-btn">
                Request Booking
              </button>
            </div>
          </div>
          {room && (
            <>
              <div className="my-[30px] lg:block hidden">
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  emulateTouch={true}
                  infiniteLoop
                  autoPlay={true}
                >
                  <div className="carousel-item">
                    <img src={backgroundRoom} alt="Room Background 1" />
                    <img src={backgroundRoom1} alt="Room Background 2" />
                  </div>
                  <div className="carousel-item">
                    <img src={backgroundRoom2} alt="Room Background 3" />
                    <img src={backgroundRoom1} alt="Room Background 4" />
                  </div>

                  {/* Add more divs with image pairs as needed */}
                </Carousel>
              </div>
              <div className="mt-[90px] mb-[20px] lg:hidden block">
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  emulateTouch={true}
                  infiniteLoop
                  autoPlay={true}
                >
                  <div className="carousel-item">
                    <img src={backgroundRoom} alt="Room Background 1" />
                  </div>
                  <div className="carousel-item">
                    <img src={backgroundRoom1} alt="Room Background 4" />
                  </div>

                  {/* Add more divs with image pairs as needed */}
                </Carousel>
              </div>
            </>
          )}

          <div className="flex flex-col gap-[0px] mt-2 md:hidden">
            <p className="text-[0.8rem] capitalize flex gap-[10px] items-center">
              <div className="font-[400] text-[12px] leading-[18px] flex gap-[10px] items-center bricolage">
                {countryName === "Hong Kong" || countryName === "Singapore"
                  ? "Asia"
                  : "Europe"}{" "}
                <span className="text-[7px] text-gray-300">──</span>{" "}
              </div>
              <span
                className="cursor-pointer hover:border-b hover:border-zinc-700 text-[12px] font-[400] leading-[18px]"
                onClick={() => navigate(`/stays/${country}`)}
              >
                {countryName}
              </span>
              <>
                {" "}
                <span className="text-[7px] text-gray-300">──</span>
                {formatSharedType(room?.shareType)}
              </>
            </p>
            <h1 className="text-[28px] font-[700] tracking-[-1.92px] leading-[1.9] bricolage text-left w-fit">
              {shareType[room?.shareType]}
            </h1>

            <p className="text-[18px] leading-[0.8] font-[400] text-left capitalize bricolage flex flex-col gap-[15px]">
              {country}
              <p className="text-[0.7rem] border-[1px] border-zinc-800 p-[4px] p-[9px] h-fit w-fit">
                Available From:{" "}
                <b>{moment(room?.availableFrom).format("MMM DD")}</b>
              </p>
            </p>
          </div>
          <>
            <div className="flex flex-col">
              <div className="w-full h-fit flex flex-col gap-4 ">
                <div className="w-full h-fit flex flex-col gap-4">
                  <div className=" lg:flex flex-col justify-center items-center  gap-4  mb-4 ">
                    <div className="hidden lg:block  text-center w-[90%]">
                      <div className="flex items-center justify-between ">
                        <h2 className="text-[22px] font-bold leading-[30px] mb-2 bricolage">
                          About the room
                        </h2>
                        <div className="flex justify-end gap-2 font-bold">
                          <span className="font-mono font-[300] leading-[24px] text-[14px] text-[#212121]">
                            Ref. Number: {room?.code}
                          </span>
                        </div>
                      </div>
                      <div className="text-left my-[15px] mb-[30px] bricolage font-[300] text-[18px] leading-[30px] text-[#212121]">
                        Our rooms come fully-furnished with a premium mattress,
                        wardrobe, air conditioning, desk and chair, and access
                        to a bathroom (ensuite, private or shared). For added
                        comfort and a hassle-free stay, pillows, bedsheets,
                        blankets and towels are also provided. To learn more
                        about the room or to arrange for a non-obligatory
                        in-person house tour, please get in touch with us.
                        Deposit-free options are now...
                      </div>
                      <div className="border-[1px] border-[#E0E0E0]"></div>
                      <div className="mx-auto my-10 overflow-x-auto overflow-y-hidden hide-scrollbar">
                        <div className="flex justify-start items-start  gap-3">
                          <div className="w-fit flex flex-col justify-center items-center gap-2 ">
                            <CropFreeIcon style={{ fontSize: "2rem" }} />
                            <p className="text-center text-[16px] flex flex-col items-center font-[300] w-[10rem] bricolage">
                              {room?.area?.value} sqm. <br />{" "}
                              <p className="text-white">Bathroom</p>
                            </p>
                          </div>

                          <div className="w-fit flex flex-col justify-center items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="30"
                              viewBox="0 -960 960 960"
                              width="30"
                            >
                              <path d="M280-600q-33 0-56.5-23.5T200-680q0-33 23.5-56.5T280-760q33 0 56.5 23.5T360-680q0 33-23.5 56.5T280-600ZM200-80q-17 0-28.5-11.5T160-120q-33 0-56.5-23.5T80-200v-240h120v-30q0-38 26-64t64-26q20 0 37 8t31 22l56 62q8 8 15.5 15t16.5 13h274v-326q0-14-10-24t-24-10q-6 0-11.5 2.5T664-790l-50 50q5 17 2 33.5T604-676L494-788q14-9 30-11.5t32 3.5l50-50q16-16 36.5-25t43.5-9q48 0 81 33t33 81v326h80v240q0 33-23.5 56.5T800-120q0 17-11.5 28.5T760-80H200Zm-40-120h640v-160H160v160Zm0 0h640-640Z" />
                            </svg>
                            <p className="text-center text-[16px] flex flex-col items-center font-[300] w-[10rem] bricolage">
                              En suite <br /> <p>Bathroom</p>{" "}
                            </p>
                          </div>

                          <div className="w-fit flex flex-col justify-center items-center gap-2">
                            <CheckroomOutlinedIcon
                              style={{ fontSize: "2rem" }}
                            />
                            <p className=" text-center text-[16px] flex flex-col items-center font-[300] w-[10rem] bricolage">
                              Wardrobe <br />{" "}
                              <p className="text-white">Bathroom</p>
                            </p>
                          </div>

                          <div className="w-fit flex flex-col justify-center  items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="30"
                              viewBox="0 -960 960 960"
                              width="30"
                            >
                              <path d="M200-120v-280q0-33 23.5-56.5T280-480h40v-80h-40q-33 0-56.5-23.5T200-640v-120q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v120q0 33-23.5 56.5T680-560h-40v80h40q33 0 56.5 23.5T760-400v280h-80v-120H280v120h-80Zm80-520h400v-120H280v120Zm120 160h160v-80H400v80ZM280-320h400v-80H280v80Zm0-320v-120 120Zm0 320v-80 80Z" />
                            </svg>
                            <p className="text-center text-[16px] flex flex-col items-center font-[300] w-[10rem] bricolage">
                              Table and <br /> <p className="">Chair</p>
                            </p>
                          </div>

                          <div className="w-fit flex flex-col justify-center  items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="30"
                              viewBox="0 -960 960 960"
                              width="30"
                            >
                              <path d="M200-200h-40l-26-80H80v-201q0-33 23.5-56t56.5-23v-120q0-33 23.5-56.5T240-760h480q33 0 56.5 23.5T800-680v120q33 0 56.5 23.5T880-480v200h-54l-26 80h-40l-26-80H226l-26 80Zm320-360h200v-120H520v120Zm-280 0h200v-120H240v120Zm-80 200h640v-120H160v120Zm640 0H160h640Z" />
                            </svg>
                            <p className="text-center text-[16px] flex flex-col items-center font-[300] w-[10rem] bricolage">
                              140x200cm <br /> <p className="">mattress</p>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="border-b-[1px] border-gray-500"></div>
                    </div>
                    <div className="hidden lg:block w-[90%] mt-12">
                      <div className="flex flex-col justify-between items-start md:flex-row md:items-center gap-3">
                        <h2 className="text-[22px] font-bold leading-[30px] mb-2 bricolage">
                          About the apartment
                        </h2>
                        <button className="hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 border border-black">
                          See 3d Map
                        </button>
                      </div>
                      <p className="text-left my-[15px] mb-[30px] bricolage font-[300] text-[18px] leading-[30px] text-[#212121]">
                        HK$0 Deposit options are now available for all Hong Kong
                        accommodations. Learn more{" "}
                        <a href="" className="text-[#0001EE] underline">
                          here
                        </a>
                        .
                      </p>
                      <div className="mt-20">
                        <div className="mt-12 border-b-[1px] border-gray-300"></div>
                      </div>
                      <div className="mx-auto my-10 overflow-x-auto overflow-y-hidden hide-scrollbar">
                        <div className="flex flex-wrap text-[16px] text-center justify-center items-start gap-2 ml-0 md:ml-[-31%]">
                          <div className="w-fit flex flex-col  justify-center items-center ">
                            <CropFreeIcon style={{ fontSize: "2rem" }} />
                            <p className="text-center text-[16px] flex flex-col items-center font-[300] w-[10rem] bricolage">
                              {room?.area?.value} sqm <br />
                            </p>
                          </div>

                          <div className="w-fit flex flex-col justify-center items-center ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="30"
                              viewBox="0 -960 960 960"
                              width="30"
                            >
                              <path d="M120-80v-80h140v-180h180v-180h180v-180h180v-140h80v220H700v180H520v180H340v180H120Z" />
                            </svg>
                            <p className="text-center text-[16px] flex flex-col items-center font-[300] w-[10rem] bricolage">
                              3rd Floor <br />
                            </p>
                          </div>

                          <div className="w-fit flex flex-col justify-center items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="30"
                              viewBox="0 -960 960 960"
                              width="30"
                            >
                              <path d="M40-200v-600h80v400h320v-320h320q66 0 113 47t47 113v360h-80v-120H120v120H40Zm240-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm240 40h320v-160q0-33-23.5-56.5T760-640H520v240ZM280-520q17 0 28.5-11.5T320-560q0-17-11.5-28.5T280-600q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0-40Zm240-80v240-240Z" />
                            </svg>
                            <p className=" text-center text-[16px] flex flex-col items-center font-[300] w-[10rem] bricolage ">
                              1 Bedroom <br />
                            </p>
                          </div>

                          <div className="w-fit flex flex-col justify-center items-center ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 -960 960 960"
                              width="24"
                            >
                              <path d="M320-80q-33 0-56.5-23.5T240-160v-40q0-47 20.5-87t53.5-67l-25-166h-89q-33 0-56.5-23.5T120-600v-160q0-33 23.5-56.5T200-840h200v-40h160v40h159l-73 486q33 27 53.5 67t20.5 87v40q0 33-23.5 56.5T640-80H320Zm-43-520-24-160h-53v160h77Zm203 400q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200Zm-92-200h184l54-360H334l54 360Zm-68 240h320v-40q0-50-35-85t-85-35h-80q-50 0-85 35t-35 85v40Zm160-80Z" />
                            </svg>
                            <p className="text-center text-[16px] flex flex-col items-center font-[300] w-[10rem] bricolage">
                              Fully
                              <p>
                                equiped <br /> kitchen
                              </p>
                            </p>
                          </div>
                          <div className="w-fit flex flex-col justify-center items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="30"
                              viewBox="0 -960 960 960"
                              width="30"
                            >
                              <path d="M320-120v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z" />
                            </svg>
                            <p className="text-center text-[16px] flex flex-col items-center font-[300] w-[10rem] bricolage">
                              Personal <br /> <p className="">Smart tv</p>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="border-b-[1px] border-[#D1D5DB] mb-12"></div>
                    </div>
                    <div className="hidden lg:block w-[90%] ">
                      <h2 className="text-[22px] font-bold leading-[30px] mb-2 bricolage">
                        All rooms in this apartment
                      </h2>
                      <div className="flex gap-[20px] w-[100%]">
                      <div className="flex w-[40%] mt-[30px] items-center border-[1px] border-[#e8e8e8] cursor-pointer hover:border-[#000]">
                        <div className="w-[50%] overflow-hidden">
                          <Carousel
                            showThumbs={false}
                            showStatus={false}
                            emulateTouch={true}
                            infiniteLoop
                            autoPlay={true}
                          >
                            <div className="carousel-item 	w-auto h-[202px]">
                              <img
                                src={backgroundRoom}
                                alt="Room Background 1"
                              />
                            </div>
                            <div className="carousel-item 	w-auto h-[202px]">
                              <img
                                src={backgroundRoom1}
                                alt="Room Background 4"
                              />
                            </div>

                            {/* Add more divs with image pairs as needed */}
                          </Carousel>
                        </div>
                        <div className="w-[50%]">
                          <h2 className="text-[18px] font-[900] leading-[24px] bricolage p-[10px]">{state.address}</h2>
                          <div className="p-[10px] ">
                            <div className="w-fit flex  items-center gap-2 ">
                              <CropFreeIcon style={{ fontSize: "1rem" }} />
                              <p className=" text-[12px] flex flex-col  font-[300] w-[10rem] bricolage">
                                {room?.area?.value} sqm. <br />{" "}
                              </p>
                            </div>
                            <div className="w-fit flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20"
                                viewBox="0 -960 960 960"
                                width="20"
                              >
                                <path d="M280-600q-33 0-56.5-23.5T200-680q0-33 23.5-56.5T280-760q33 0 56.5 23.5T360-680q0 33-23.5 56.5T280-600ZM200-80q-17 0-28.5-11.5T160-120q-33 0-56.5-23.5T80-200v-240h120v-30q0-38 26-64t64-26q20 0 37 8t31 22l56 62q8 8 15.5 15t16.5 13h274v-326q0-14-10-24t-24-10q-6 0-11.5 2.5T664-790l-50 50q5 17 2 33.5T604-676L494-788q14-9 30-11.5t32 3.5l50-50q16-16 36.5-25t43.5-9q48 0 81 33t33 81v326h80v240q0 33-23.5 56.5T800-120q0 17-11.5 28.5T760-80H200Zm-40-120h640v-160H160v160Zm0 0h640-640Z" />
                              </svg>
                              <p className=" text-[12px] flex flex-col  font-[300] w-[10rem] bricolage">
                               <p>6th Floor</p>{" "}
                              </p>
                            </div>
                            <div className="w-fit flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20"
                                viewBox="0 -960 960 960"
                                width="20"
                              >
                                <path d="M40-200v-600h80v400h320v-320h320q66 0 113 47t47 113v360h-80v-120H120v120H40Zm240-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm240 40h320v-160q0-33-23.5-56.5T760-640H520v240ZM280-520q17 0 28.5-11.5T320-560q0-17-11.5-28.5T280-600q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0-40Zm240-80v240-240Z" />
                              </svg>
                              <p className=" text-[12px] flex flex-col  font-[300] w-[10rem] bricolage ">
                                1 Bedroom <br />
                              </p>
                            </div>
                          </div>
                          <div className="flex bg-[#f5f5f5] gap-[10px] p-2 items-center">
                            <p className="text-[0.8rem] border-[1px] border-zinc-800 p-[4px] px-2 h-fit">
                              From:{" "}
                              <b>
                                {moment(room?.availableFrom).format("MMM DD")}
                              </b>
                            </p>
                            <p className="font-[700] leading-[24px] text-[18px] capitalize font-mono">
                              HK$
                              {new Intl.NumberFormat("en-US").format(
                                room?.grossRent?.amount
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-[40%] mt-[30px] items-center border-[1px] border-[#e8e8e8] cursor-pointer hover:border-[#000]">
                        <div className="w-[50%] overflow-hidden">
                          <Carousel
                            showThumbs={false}
                            showStatus={false}
                            emulateTouch={true}
                            infiniteLoop
                            autoPlay={true}
                          >
                            <div className="carousel-item 	w-auto h-[202px]">
                              <img
                                src={backgroundRoom}
                                alt="Room Background 1"
                              />
                            </div>
                            <div className="carousel-item 	w-auto h-[202px]">
                              <img
                                src={backgroundRoom1}
                                alt="Room Background 4"
                              />
                            </div>

                            {/* Add more divs with image pairs as needed */}
                          </Carousel>
                        </div>
                        <div className="w-[50%]">
                          <h2 className="text-[18px] font-[900] leading-[24px] bricolage p-[10px]">{state.address}</h2>
                          <div className="p-[10px] ">
                            <div className="w-fit flex  items-center gap-2 ">
                              <CropFreeIcon style={{ fontSize: "1rem" }} />
                              <p className=" text-[12px] flex flex-col  font-[300] w-[10rem] bricolage">
                                {room?.area?.value} sqm. <br />{" "}
                              </p>
                            </div>
                            <div className="w-fit flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20"
                                viewBox="0 -960 960 960"
                                width="20"
                              >
                                <path d="M280-600q-33 0-56.5-23.5T200-680q0-33 23.5-56.5T280-760q33 0 56.5 23.5T360-680q0 33-23.5 56.5T280-600ZM200-80q-17 0-28.5-11.5T160-120q-33 0-56.5-23.5T80-200v-240h120v-30q0-38 26-64t64-26q20 0 37 8t31 22l56 62q8 8 15.5 15t16.5 13h274v-326q0-14-10-24t-24-10q-6 0-11.5 2.5T664-790l-50 50q5 17 2 33.5T604-676L494-788q14-9 30-11.5t32 3.5l50-50q16-16 36.5-25t43.5-9q48 0 81 33t33 81v326h80v240q0 33-23.5 56.5T800-120q0 17-11.5 28.5T760-80H200Zm-40-120h640v-160H160v160Zm0 0h640-640Z" />
                              </svg>
                              <p className=" text-[12px] flex flex-col  font-[300] w-[10rem] bricolage">
                               <p>6th Floor</p>{" "}
                              </p>
                            </div>
                            <div className="w-fit flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20"
                                viewBox="0 -960 960 960"
                                width="20"
                              >
                                <path d="M40-200v-600h80v400h320v-320h320q66 0 113 47t47 113v360h-80v-120H120v120H40Zm240-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm240 40h320v-160q0-33-23.5-56.5T760-640H520v240ZM280-520q17 0 28.5-11.5T320-560q0-17-11.5-28.5T280-600q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0-40Zm240-80v240-240Z" />
                              </svg>
                              <p className=" text-[12px] flex flex-col  font-[300] w-[10rem] bricolage ">
                                1 Bedroom <br />
                              </p>
                            </div>
                          </div>
                          <div className="flex bg-[#f5f5f5] gap-[10px] p-2 items-center">
                            <p className="text-[0.8rem] border-[1px] border-zinc-800 p-[4px] px-2 h-fit">
                              From:{" "}
                              <b>
                                {moment(room?.availableFrom).format("MMM DD")}
                              </b>
                            </p>
                            <p className="font-[700] leading-[24px] text-[18px] capitalize font-mono">
                              HK$
                              {new Intl.NumberFormat("en-US").format(
                                room?.grossRent?.amount
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      </div>
                      <div className="border-b-[1px] border-[#D1D5DB] my-12"></div>
                    </div>
                    <div className="container hidden lg:block">
                      <div className="w-[90%] mx-auto mb-10">
                        <div className="grid grid-cols-2">
                          <div>
                            <h2 className="text-[22px] font-bold leading-[30px] mb-2 bricolage">
                              About the building
                            </h2>
                          </div>
                          <div className="flex justify-end">
                            <a
                              href="/#"
                              className="h-fit text-center border font-bold hover:border-2  border-zinc-900 cursor-pointer p-2"
                            >
                              More About the Building
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="flex mx-auto w-[90%] gap-[30px]">
                        <div className="w-[50%] flex justify-center items-center ">
                          <div>
                            <img
                              src="https://www.habyt.com/_next/image?url=https%3A%2F%2Fdkxxy6rs8czp7.cloudfront.net%2Fa01-property__c%2Fa011i00000kMhzMAAS%2F1_The_Waterfront_by_Habyt_1_v1.jpg&w=1920&q=75"
                              alt="Building"
                              className="w-[100%] rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="w-[50%]">
                          <div className="text-start text-[18px] ">
                            <p className="text-left my-[15px] mb-[30px] bricolage font-[300] text-[18px] leading-[30px] text-[#212121]">
                              Combining the vibrancy of Berlin with nature's
                              serenity, the Waterfront was crafted with wood and
                              raw textures, blending modern art and colorful
                              accents. The property is purposefully built to be
                              an ideal location for you to make the most of the
                              co-living lifestyle, and be part of the Habyt
                              community.....
                            </p>
                            <div className="border-b-[1px] border-[#D1D5DB] mb-[12px]"></div>

                            <div className="flex flex-row mt-5">
                              {buildingData.map((data) => (
                                <div
                                  key={data}
                                  className="w-fit flex flex-col justify-center items-center gap-2"
                                >
                                  <ChairOutlinedIcon
                                    style={{
                                      width: "2.2rem",
                                      height: "2.2rem",
                                    }}
                                  />
                                  <p className="text-center text-[16px] flex flex-col items-center font-[300] w-[10rem] bricolage">
                                    {data}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-[0.2px] border-[#000] my-12 w-[90%] hidden lg:block"></div>
                    <div className="hidden lg:flex justify-center items-center">
                      <div className="mt-8  w-[90%]">
                        <div className="flex justify-between w-[100%] items-center">
                          <h2 className="text-[22px] font-bold leading-[30px] mb-2 bricolage w-[80%]">
                            About the neighbourhood
                          </h2>
                          <a
                            href="/#"
                            className="w-[20%] h-fit flex justify-center items-center text-center border border-zinc-900 cursor-pointer p-2 mt-4"
                          >
                            Open in Google Maps
                          </a>
                        </div>

                        <p className="mt-10 leading-relaxed  text-[18px] ">
                          A vibrant neighborhood located in the eastern part of
                          Berlin, Friedrichshain is known for its lively
                          atmosphere, rich history, and cultural scene. Nested
                          at the intersection where the city center meets a
                          picturesque lakeside, the district offers a thriving
                          nightlife and a great mix of parks, bars, cafes, and
                          restaurants, making it one of the most sought-after
                          residential areas for creative communities and young
                          professionals. The area is also well-served by public
                          transportation, providing convenient access to other
                          parts of Berlin.
                        </p>
                        <div className="w-full h-[200px] bg-gray-200 mt-10"></div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="w-full h-fit flex md:hidden flex-col gap-4 mt-8 bricolage">
                        <CustomAccordion
                          title="About the room"
                          className="bricolage border-[0px]"
                          text={
                            <>
                              <p>
                                Our rooms come fully-furnished with a premium
                                mattress, wardrobe, air conditioning, desk and
                                chair, and access to a bathroom (ensuite,
                                private or shared). For added comfort and a
                                hassle-free stay, pillows, bedsheets, blankets
                                and towels are also provided. To learn more
                                about the room or to arrange for a
                                non-obligatory in-person house tour, please get
                                in touch with us. Deposit-free options are now
                                available for all Singapore accommodations.
                                Learn more{" "}
                                <a href="#" className="text-blue-600">
                                  here
                                </a>
                              </p>
                              <div className="flex gap-2 mt-4 overflow-x-auto overflow-y-hidden hide-scrollbar">
                                {roomEquipments.map(({ icon, name }) => (
                                  <div
                                    key={name}
                                    className="w-fit flex flex-col justify-center items-center gap-2"
                                  >
                                    {icon}
                                    <p className="text-center text-[0.8rem] w-[8rem]">
                                      {name}
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <p className="flex items-center gap-2 mt-4">
                                <span>
                                  Ref Number : {room?.apartment?.code}
                                </span>{" "}
                                <ContentCopyOutlinedIcon
                                  className="ml-2 cursor-pointer"
                                  style={{ width: "0.9rem", height: "0.9rem" }}
                                  onClick={() => {
                                    navigator.clipboard.writeText(
                                      room?.apartment?.code
                                    );
                                  }}
                                />
                              </p>
                            </>
                          }
                        />
                        <CustomAccordion
                          title="About the apartment"
                          text={
                            <>
                              <p>
                                There's room for everyone in our bigger 2
                                bedroom apartments. Also perfect for working
                                professionals who prefer a separate study
                                room!S$0 Deposit options are now available for
                                all Singapore accommodations. Learn more{" "}
                                <a href="#" className="text-blue-600">
                                  here
                                </a>
                              </p>
                              <div className="flex gap-2 mt-4 overflow-x-auto overflow-y-hidden hide-scrollbar">
                                {apartmentEquipments.map(({ icon, name }) => (
                                  <div className="w-fit flex flex-col justify-center items-center gap-2">
                                    {icon}
                                    <p className="text-center text-[0.8rem] w-[8rem]">
                                      {name}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </>
                          }
                        />
                        <CustomAccordion
                          title="All rooms in this apartment"
                          text={
                            <div className="flex flex-wrap gap-4 h-fit w-full overflow-x-auto overflow-y-hidden hide-scrollbar">
                              {allRooms?.map((room, index) => (
                                <CardVert
                                  key={index}
                                  images={room?.apartment?.images}
                                  country={country}
                                  size={room?.area?.value}
                                  measurement={room?.area?.unit}
                                  rooms={room?.apartment?.bedroomCount}
                                  floor={room?.apartment?.floor}
                                  currency={room?.currencyIsoCode}
                                  oldPrice={room?.rent?.amount}
                                  currentPrice={room?.rent?.amount}
                                  availableFrom={room?.availableFrom}
                                  id={room?.id}
                                  data={room}
                                  allRooms={allRooms}
                                  code={room?.apartment?.code}
                                  setIsImageShow={setIsImageShow}
                                  isImageShow={isImageShow}
                                />
                              ))}
                            </div>
                          }
                        />
                        <CustomAccordion
                          title="About the building"
                          text={
                            <>
                              <p>
                                Located in Newton, this building is located
                                close to Singapore's main shopping district,
                                Orchard Road. Considered as a residential hot
                                spot, it boasts nearby local gems like Newton
                                Food Centre and malls in Novena, which is only
                                one train stop away. Portofino is our second
                                dedicated building in Singapore and includes its
                                own rooftop, lounge, and pool as common spaces
                                for all of our members to use.
                              </p>
                              <div className="flex gap-2 mt-4 overflow-x-auto overflow-y-hidden hide-scrollbar">
                                {buildingData.map((data) => (
                                  <div className="w-fit flex flex-col justify-center items-center gap-2">
                                    <ChairOutlinedIcon
                                      style={{
                                        width: "0.9rem",
                                        height: "0.9rem",
                                      }}
                                    />
                                    <p className="text-center text-[0.8rem] w-[8rem]">
                                      {data}
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <a
                                href="#"
                                className="w-full h-fit flex justify-center items-center text-center border border-zinc-900 cursor-pointer p-2 mt-4"
                              >
                                More About Building
                              </a>
                            </>
                          }
                        />
                        <CustomAccordion
                          title="About the neighbourhood"
                          text={
                            <>
                              <img
                                src={mapImage}
                                alt="map"
                                className="w-full h-[400px] object-cover"
                              />
                              <a
                                href="#"
                                className="w-full h-fit flex justify-center items-center text-center border border-zinc-900 cursor-pointer p-2 mt-4"
                              >
                                Open in Google Maps
                              </a>
                            </>
                          }
                        />
                        <CustomAccordion
                          title="Cost overview"
                          text={
                            <>
                              <>
                                <div className="flex flex-col w-full gap-2 p-2 border-b border-zinc-600 my-4">
                                  <div className="w-full flex justify-between">
                                    <h3 className="text-left">Monthly Rent</h3>
                                    <p className="text-right text-[0.7em]">
                                      From
                                    </p>
                                  </div>
                                  <div className="w-full flex justify-between">
                                    <p className="text-left text-[0.7em]">
                                      Furniture surcharge, operating costs,
                                      heating and eletricity
                                    </p>
                                    <h3 className="text-right font-bold">{`${room?.rent?.currency} ${room?.rent?.amount}`}</h3>
                                  </div>
                                  <div className="w-full flex justify-between mb-4">
                                    <p className="text-right text-[0.7em]">
                                      Charged monthly from your move-in date
                                    </p>
                                  </div>
                                </div>
                              </>
                              <>
                                <div className="flex flex-col w-full gap-2 p-2 border-b border-zinc-600  my-4">
                                  <div className="w-full flex justify-between">
                                    <p className="text-left">Deposit</p>
                                    <h3 className="text-right font-bold">{`${room?.rent?.currency} ${room?.rent?.amount}`}</h3>
                                  </div>
                                  <div className="w-full flex justify-between mb-4">
                                    <p className="text-right text-[0.7em]">
                                      Charged after contract signature
                                    </p>
                                  </div>
                                </div>
                              </>
                              <>
                                <div className="flex flex-col w-full gap-2 p-2 border-b border-zinc-900  my-4">
                                  <div className="w-full flex justify-between">
                                    <p className="text-left">Membership Fee</p>
                                    <h3 className="text-right font-bold">{`${room?.rent?.currency} 200`}</h3>
                                  </div>
                                  <div className="w-full flex justify-between mb-4">
                                    <p className="text-right text-[0.7em]">
                                      Charged only at the signature of the
                                      contract
                                    </p>
                                  </div>
                                </div>
                              </>
                            </>
                          }
                        />
                      </div>
                    </div>
                    <div className="border-[0.2px] border-[#000] my-12 w-[90%] hidden lg:block"></div>
                    <div className="mt-8 lg:w-[90%] w-[100%]">
                      <h2 className="text-[22px] font-bold leading-[30px] mb-2 bricolage">
                        Things To Know
                      </h2>
                      <div className="flex  m-auto w-[100%] lg:flex-row flex-col">
                        <div className="lg:m-5 m-0 lg:mt-5 mt-[20px]">
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                              className=" accordion-res"
                            >
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  style={{
                                    userSelect: "none",
                                    width: "1em",
                                    height: "1em",
                                    display: "inline-block",
                                    fill: "currentcolor",
                                    flexShrink: 0,
                                    transition:
                                      "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                    fontSize: "1.5rem",
                                    color: "rgb(50, 195, 155)",
                                  }}
                                >
                                  <path d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path>
                                </svg>
                                <Typography>
                                  Fully Furnished Apartment
                                </Typography>
                              </div>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                All you need to do is pack your clothes and move
                                into your new Habyt home! Your apartment and
                                room are fully furnished for you to live
                                comfortably in it from day one. Common-use items
                                such as iron, vacuum cleaner, clothes rack, and
                                washing machine* are included. The kitchen is
                                fully equipped with cooking utensils, a fridge,
                                a dishwasher, and a stove. Cook your heart’s
                                desires! *Some buildings offer a shared laundry
                                room and others a washing machine inside the
                                flat.
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <br />
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                              className=" accordion-res"
                            >
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  style={{
                                    userSelect: "none",
                                    width: "1em",
                                    height: "1em",
                                    display: "inline-block",
                                    fill: "currentcolor",
                                    flexShrink: 0,
                                    transition:
                                      "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                    fontSize: "1.5rem",
                                    color: "rgb(50, 195, 155)",
                                  }}
                                >
                                  <path d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path>
                                </svg>
                                <Typography>
                                  All inclusive monthly rent payment
                                </Typography>
                              </div>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                All you need to do is pack your clothes and move
                                into your new Habyt home! Your apartment and
                                room are fully furnished for you to live
                                comfortably in it from day one. Common-use items
                                such as iron, vacuum cleaner, clothes rack, and
                                washing machine* are included. The kitchen is
                                fully equipped with cooking utensils, a fridge,
                                a dishwasher, and a stove. Cook your heart’s
                                desires! *Some buildings offer a shared laundry
                                room and others a washing machine inside the
                                flat.
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <br />
                        </div>
                        <div className="lg:m-5 m-0">
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                              className=" accordion-res"
                            >
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  style={{
                                    userSelect: "none",
                                    width: "1em",
                                    height: "1em",
                                    display: "inline-block",
                                    fill: "currentcolor",
                                    flexShrink: 0,
                                    transition:
                                      "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                    fontSize: "1.5rem",
                                    color: "rgb(50, 195, 155)",
                                  }}
                                >
                                  <path d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path>
                                </svg>
                                <Typography>
                                  Self Check in with pick up keys
                                </Typography>
                              </div>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                All you need to do is pack your clothes and move
                                into your new Habyt home! Your apartment and
                                room are fully furnished for you to live
                                comfortably in it from day one. Common-use items
                                such as iron, vacuum cleaner, clothes rack, and
                                washing machine* are included. The kitchen is
                                fully equipped with cooking utensils, a fridge,
                                a dishwasher, and a stove. Cook your heart’s
                                desires! *Some buildings offer a shared laundry
                                room and others a washing machine inside the
                                flat.
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <br />
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                              className=" accordion-res"
                            >
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  style={{
                                    userSelect: "none",
                                    width: "1em",
                                    height: "1em",
                                    display: "inline-block",
                                    fill: "currentcolor",
                                    flexShrink: 0,
                                    transition:
                                      "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                    fontSize: "1.5rem",
                                    color: "rgb(50, 195, 155)",
                                  }}
                                >
                                  <path d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path>
                                </svg>

                                <Typography>Smooth Booking Process</Typography>
                              </div>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                All you need to do is pack your clothes and move
                                into your new Habyt home! Your apartment and
                                room are fully furnished for you to live
                                comfortably in it from day one. Common-use items
                                such as iron, vacuum cleaner, clothes rack, and
                                washing machine* are included. The kitchen is
                                fully equipped with cooking utensils, a fridge,
                                a dishwasher, and a stove. Cook your heart’s
                                desires! *Some buildings offer a shared laundry
                                room and others a washing machine inside the
                                flat.
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <br />
                        </div>
                        <div className="lg:m-5 m-0">
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                              className=" accordion-res"
                            >
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  style={{
                                    userSelect: "none",
                                    width: "1em",
                                    height: "1em",
                                    display: "inline-block",
                                    fill: "currentcolor",
                                    flexShrink: 0,
                                    transition:
                                      "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                    fontSize: "1.5rem",
                                    color: "rgb(50, 195, 155)",
                                  }}
                                >
                                  <path d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path>
                                </svg>

                                <Typography>
                                  Confirmation for city registrations
                                </Typography>
                              </div>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                All you need to do is pack your clothes and move
                                into your new Habyt home! Your apartment and
                                room are fully furnished for you to live
                                comfortably in it from day one. Common-use items
                                such as iron, vacuum cleaner, clothes rack, and
                                washing machine* are included. The kitchen is
                                fully equipped with cooking utensils, a fridge,
                                a dishwasher, and a stove. Cook your heart’s
                                desires! *Some buildings offer a shared laundry
                                room and others a washing machine inside the
                                flat.
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <br />
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                              className=" accordion-res"
                            >
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="24"
                                  viewBox="0 -960 960 960"
                                  width="24"
                                >
                                  <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q54 0 104-17.5t92-50.5L228-676q-33 42-50.5 92T160-480q0 134 93 227t227 93Zm252-124q33-42 50.5-92T800-480q0-134-93-227t-227-93q-54 0-104 17.5T284-732l448 448Z" />
                                </svg>

                                <Typography>Pets are not allowed</Typography>
                              </div>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                All you need to do is pack your clothes and move
                                into your new Habyt home! Your apartment and
                                room are fully furnished for you to live
                                comfortably in it from day one. Common-use items
                                such as iron, vacuum cleaner, clothes rack, and
                                washing machine* are included. The kitchen is
                                fully equipped with cooking utensils, a fridge,
                                a dishwasher, and a stove. Cook your heart’s
                                desires! *Some buildings offer a shared laundry
                                room and others a washing machine inside the
                                flat.
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <br />
                        </div>
                      </div>
                    </div>

                    <div
                      className="mt-20 w-[90%] p-5 lg:block hidden"
                      style={{
                        backgroundImage:
                          "url(https://www.habyt.com/images/building/banner.svg)",
                        height: "200px",
                        width: "100%",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="flex gap-[50px] items-center  p-4 px-12">
                        <div className="  font-2xl flex gap-[10px] bricolage text-[24px] w-[50%]">
                          <h1 className="font-[900] font-[34px]">
                            Have more questions?{" "}
                          </h1>
                          <span className=""> Check our FAQ </span>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="text-white text-2xl hover:text-black border bg-black border-white hover:bg-white focus:outline-none font-medium rounded-lg text-sm px-20 py-3 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 w-[97%]"
                          >
                            Help Center
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="mt-20 w-[90%] p-5 lg:hidden block"
                      style={{
                        backgroundImage:
                          "url(https://www.habyt.com/images/building/banner-mobile.svg)",
                        height: "370px",
                        width: "100%",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="flex gap-[50px] items-center  p-4  flex-col gap-[80px]">
                        <div className="  font-2xl flex flex-col gap-[10px] bricolage text-[24px] w-[100%]">
                          <h1 className="font-[900] font-[24px]">
                            Have more questions?{" "}
                          </h1>
                          <span className="mt-[-10px]"> Check our FAQ </span>
                        </div>
                        <div className="flex justify-end w-[100%] mt-[30px]">
                          <button
                            type="button"
                            className="text-white text-2xl hover:text-white border bg-black  border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-3 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 w-[57%]"
                          >
                            Help Center
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="border-[0.2px] border-[#000] my-12 w-[90%] lg:block hidden"></div>
                    <div className="mt-20 w-[90%] bricolage lg:block hidden">
                      <h2 className="text-[22px]  font-[500] leading-[30px] mb-2 bricolage">
                        Cost overview
                      </h2>
                      <div className="flex flex-col w-full  p-2 border-b border-zinc-600 my-4">
                        <div className="w-full flex justify-between">
                          <h3 className="text-[18px] text-left leading-[26px] font-[300]">
                            Monthly Rent
                          </h3>
                          <p className="text-[12px] leading-[18px] font-[300]">
                            From
                          </p>
                        </div>
                        <div className="w-full flex justify-between">
                          <p className="text-[12px] leading-[18px] font-[300]">
                            This is a sample description of monthly rent.
                          </p>
                          <h3 className="font-[700] leading-[11px] text-[20px] capitalize font-mono">
                            €1,255.00
                          </h3>
                        </div>
                        <div className="w-full flex justify-end mb-4">
                          <p className="text-[12px] leading-[18px] font-[300]">
                            Charged monthly from your move-in date
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col w-full gap-2 p-2 border-b border-zinc-600  my-4">
                        <div className="w-full flex justify-between">
                          <p className="text-[18px] text-left leading-[26px] font-[300]">
                            Deposit
                          </p>
                          <h3 className="font-[700] leading-[31px] text-[20px] capitalize font-mono">
                            €1,255.00
                          </h3>
                        </div>
                        <div className="w-full flex justify-between mb-4">
                          <p className="text-[12px] leading-[18px] font-[300]">
                            Charged after contract signature
                          </p>
                          <p className="text-[12px] leading-[18px] font-[300]">
                            Charged after contract signature
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col w-full gap-2 p-2 border-b border-zinc-900  my-4">
                        <div className="w-full flex justify-between">
                          <p className="text-[18px] text-left leading-[26px] font-[300]">
                            Membership Fee
                          </p>
                          <h3 className="font-[700] leading-[31px] text-[20px] capitalize font-mono">
                            €200
                          </h3>
                        </div>
                        <div className="w-full flex justify-between mb-4">
                          <p className="text-[12px] leading-[18px] font-[300]">
                            Charged only at the signature of the contract
                          </p>
                          <p className="text-[12px] leading-[18px] font-[300]">
                            Charged after contract signature
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-[90%] w-[100%] border-b border-zinc-900 pb-8">
                      <div className="flex flex-col-reverse	 md:flex-row items-center items-stretch justify-center gap-5 w-[100%] lg:mt-[0px] mt-[50px]">
                        <div className="bg-[#F6B7E4] p-6 lg:p-12 rounded-2xl lg:w-[50%] w-[90%] flex flex-col justify-end bricolage">
                          <div className="text-[12px] leading-[18px] font-[200]">
                            ABOUT THE CITY
                          </div>
                          <div className="text-[18px] md:text-4xl font-black w-full lg:leading-[42px] leading-[20px] mt-4">
                            Hong Kong, a fusion of tradition and innovation
                          </div>
                          <div className="w-full leading-relaxed mt-4 text-[16px]">
                            With a rich history and a captivating cultural
                            scene, Berlin keeps you enthralled with its
                            diversity and creativity. From exploring the
                            historic landmarks to experiencing the lively
                            nightlife and vibrant neighborhoods, there is never
                            a dull moment in the city. Pick your accommodation
                            and get ready to be part of the Berlin lifestyle!
                          </div>
                        </div>
                        <div className="h-[inherit] border border-zinc-500">
                          {" "}
                        </div>
                        <div className="w-full lg:w-[55%] h-[250px] lg:h-auto w-full rounded-xl">
                          <img
                            className="rounded-2xl w-[100%] h-full"
                            src="https://www.habyt.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fervhsvqp%2Fproduction%2Fe45efe8d1b3962b4999c76bd884926d629bba963-2000x1334.jpg&w=1920&q=75"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-[90%] w-[80%] m-auto lg:mt-20 mt-[60px] bricolage">
                      <div>
                        <h1 className="lg:text-4xl text-[40px] font-black mt-5 lg:leading-normal leading-[1.5]">
                          Why move to Berlin?
                        </h1>
                        <p className="text-[16px] mt-[10px]">
                          Berlin is a dynamic and diverse city known for its
                          creative energy and artistic community, making it an
                          inspiring place for anyone interested in the arts and
                          innovation. The city has a legendary nightlife that
                          caters to different tastes, and its food scene is a
                          delightful mix of international cuisines and
                          traditional German dishes.
                        </p>
                      </div>
                      <br />
                      <br />
                      <div>
                        <h1 className="lg:text-4xl text-[40px] font-black mt-5 lg:leading-normal leading-[1.5]">
                          Where to start?
                        </h1>
                        <p className="text-[16px] mt-[10px]">
                          Get familiar with the neighborhoods, cost of living
                          and amenities in Berlin. Depending on your
                          nationality, check the visa and residency requirements
                          for moving. Ensure you have the necessary
                          documentation to live and work in Berlin legally.
                          Reach out to local communities, attend events, and
                          join clubs or groups to start building connections.
                        </p>
                      </div>
                    </div>
                    <div className="max-w-[1400px] h-[600px]  lg:flex pl-[251px] justify-center w-[100%] p-[128px] gap-[140px] last-room-bg mt-20  hidden">
                      <div className="w-[40%]">
                        <p className="font-black text-[36px] leading-[42px] bricolage">
                          Haven't found the rooms of your dreams?
                        </p>
                      </div>
                      <div className="w-[40%] pl-[51px]">
                        <p className="font-normal text-[18px] bricolage">
                          With Habyt you can find it as quickly as you imagine!
                          Don’t hesitate in contact us and we’ll help you find a
                          home.
                          <br />
                          <button className="m-w-[64px] py-[6px] px-[16px] font-medium leading-[1.75] border-2 bg-[#272220] text-[#fff] mt-[20px]">
                            Get in Touch
                          </button>
                        </p>
                      </div>
                    </div>
                    <div className="max-w-[1400px] w-[100%] mt-20 lg:hidden block">
                      <div className="w-[100%]">
                        <p className="font-black text-[21px] leading-[32px] bricolage">
                          Haven't found the rooms of your dreams?
                        </p>
                      </div>
                      <div className="w-[100%] ">
                        <p className="font-normal text-[18px] bricolage">
                          With Habyt you can find it as quickly as you imagine!
                          Don’t hesitate in contact us and we’ll help you find a
                          home.
                          <br />
                          <button className="m-w-[64px] py-[6px] px-[16px] font-medium leading-[1.75] border-2 bg-[#272220] text-[#fff] mt-[20px]">
                            Get in Touch
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
        <div className="fixed w-full bottom-0 z-10 flex lg:hidden justify-between items-center gap-2 pt-2">
          <div className="flex w-full flex-col justify-end items-center gap-2 pb-8 bg-white shadow-2xl p-2">
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col">
                <p className="w-full text-right text-sm">From</p>
                <div className="flex w-fit items-center gap-2">
                  <IoMdInformationCircleOutline
                    className="text-zinc-600"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                  />
                  <p className="font-bold text-[1.5rem] capitalize">
                    €1,255.00
                  </p>
                </div>
                <p className="w-full text-right text-sm">monthly</p>
              </div>
              <div className="flex flex-col">
                <p>
                  From: <span className="font-bold">€1,255.00</span>
                </p>
                <p>
                  To: <span className="font-bold">€1,255.00</span>
                </p>
              </div>
            </div>
            <button className="p-2 px-4 h-fit w-full bg-zinc-900 text-white text-center align-middle rounded-sm">
              Request Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
