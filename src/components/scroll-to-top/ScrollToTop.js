import React, {useState, useEffect} from 'react'
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import './scrolltop.css'

export const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

    return (
        <div className="scroll__top ">
        {isVisible && (
            <div onClick={scrollToTop}>
               <KeyboardArrowUpSharpIcon sx={{fontSize: 40, color:'#54e6af'}} />
            </div>
        )}
        </div>
    )
}
