import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
const { basketContainer, basketCart, basketQuantity, pumpCartQuantity } =
  styles;

  type headerCounterProps = { 
    title: string;
    totalQuantity:number;
    page:string;
    svgIcon: React.ReactNode;
  }
const HeaderCounter = ({ title, totalQuantity, page, svgIcon } : headerCounterProps) => {
  const navigate = useNavigate();

  const [isAnimate, setIsAnimate] = useState(false);
  
  const quantityStyle = `${basketQuantity} ${
    isAnimate ? pumpCartQuantity : ""
  }`;

  useEffect(() => {
    if (!totalQuantity) {
      return;
    }

    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  return (
    <div className={basketContainer} onClick={() => navigate(page)}>
      <div className={basketCart}>
        {svgIcon}
        {totalQuantity > 0 && (
          <div className={quantityStyle}>{totalQuantity}</div>
        )}
      </div>

      <h3>{title}</h3>
    </div>
  );
};

export default HeaderCounter;
