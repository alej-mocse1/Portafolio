import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const TextAos = ({ children, time, direction,SetSectionm, section2Ref}) => {
  useEffect(() => {
      Aos.init({ duration: time });  
  }, [time]);

  return ( 
    <div 
     data-aos={direction}
      data-aos-duration={time}
     >
      {children}
    </div> 
  );
};

export default TextAos;