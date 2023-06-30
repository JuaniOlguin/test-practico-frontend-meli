import { useEffect } from "react";

export const DeviceWidthObject = {
  Mobile: { max: 768, min: 0 },
  Desktop: { max: 8000, min: 769 }
};


//returns browser window size
export const getWindowDimension = () => {
  const width = window.innerWidth 
              || document.documentElement.clientWidth
              || document.body.clientWidth;
  const height = window.innerHeight
              || document.documentElement.clientHeight
              || document.body.clientHeight;
  return {width, height}
};