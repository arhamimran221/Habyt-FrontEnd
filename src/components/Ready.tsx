import { FunctionComponent } from "react";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";

const FramerTutorial: FunctionComponent = () => {
  return (
    <div className="habyt-container flex justify-between items-center px-[72px] py-[60px] flexcol-mobile">
      <p className="m-0 font-sans font-extrabold text-[32px] leading-[42px]">
        Are you ready to find your next home?
      <div className="mt-[5px] font-sans font-normal text-base text-[#707077]">
        Let us help you!
      </div>
      </p>
      <div>
      <button className="button">Get in Touch </button>
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
      </Typography> */}
      {/* <div className="self-stretch relative text-2xl tracking-[0.15px] leading-[26px] text-dimgray z-[2]">
        Habyt is a flexible housing solution offering private and shared
        apartments across 25+ cities worldwide.
      </div> */}
    </div>
  );
};

export default FramerTutorial;
