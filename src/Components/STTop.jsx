// Packages
import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const STTop = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const ShowArrow = () => setIsActive(window.scrollY >= 300);
    window.addEventListener("scroll", ShowArrow);
    return () => {
      window.removeEventListener("scroll", ShowArrow);
    }
  }, [])

  return (
    <div className={isActive ? "app__sttop active" : "app__sttop"}>
      <a href="#home">
        <BsArrowUp />
      </a>
    </div>
  );
};

export default STTop;
