import { FunctionComponent } from "react";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";

const FramerTutorial: FunctionComponent = () => {
  return (
    <div className="habyt-container justify-start   mt-10 border-t-2 border-gray-500">
      <div className="flex flex-col lg:gap-8 gap-2 mt-8 lg:px-20 px-0 m-2 mb-[20px]" >
        <h1 className="font-sans font-bold text-2xl lg:text-5xl leading-[29px] lg:leading-[49px]">
          How It Works
        </h1>
        <p className="font-sans font-normal text-[18px] leading-[30px] mt-[10px] leading-8 max-w-[600px] pr-[20px] text-[#707077]">
          Habyt is a flexible housing solution offering private and shared
          apartments across 25+ cities worldwide.
        </p>
      </div>

      {/* <Typography
        variant="h1"
        sx={{
          fontSize: '6rem', // Adjust the font size as needed
          fontWeight: 'bold',
          margin: 2,
          width: '294px',
          position: 'relative',
          color: 'inherit',
          letterSpacing: '0.15px',
          lineHeight: '59px',
          display: 'inline-block',
          zIndex: 2,
          '@media (min-width:450px)': {
            fontSize: '1.813rem', // Adjust font size for mq450 breakpoint
            lineHeight: '35px',
          },
          '@media (min-width:1050px)': {
            fontSize: '2.5rem', // Adjust font size for mq1050 breakpoint
            lineHeight: '47px',
          },
        }}
      >
        How it Works
      </Typography>
      <div className="self-stretch relative text-2xl tracking-[0.15px] leading-[26px] text-dimgray z-[2]">
        Habyt is a flexible housing solution offering private and shared
        apartments across 25+ cities worldwide.
      </div>
    </div> */}
    </div>
  );
};

export default FramerTutorial;
