import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import Button from "../UI/Button/Button";
import styles from "./Header.module.scss";
import useWindowSize from "../../hooks/useWindowSize";

import { ButtonsBgColor, HeaderType } from "../../Types/enums";

import exitIcon from "../../assets/icons/exit.svg";
import classNames from "classnames/bind.js";

interface HeaderProps {
   type: HeaderType;
}

const Header = ({ type }: HeaderProps) => {
   const { width } = useWindowSize();

   ///// Определяем что будет в левой части Header изходя из type prop
   let leftSideContent;
   if (type === HeaderType.auth) {
      leftSideContent = (
         <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.header__exit}>
            <path
               d="M2 2.00586L24 23.7869"
               stroke={width < 991 ? "#f1f1f1" : "#262626"}
               stroke-width="3"
               stroke-linecap="round"
            />
            <path
               d="M2 23.5684L24 1.78727"
               stroke={width < 991 ? "#f1f1f1" : "#262626"}
               stroke-width="3"
               stroke-linecap="round"
            />
         </svg>
      );
   } else if (type === HeaderType.cabinet) {
      leftSideContent = (
         <Button to="/" bgColor={ButtonsBgColor.green} fontSize={14}>
            Выйти
         </Button>
      );
   }

   return (
      <header className={styles.header}>
         <div className="container">
            <div className={styles.header__inner}>
               <div className={styles.header__logo}>
                  <Link to={"/"}>
                     <img src={logo} alt="Логотип" />
                  </Link>
                  {width > 576 ? (
                     <div className={styles.header__logoDate}>
                        29 июня 2024 г. ЦСКА Арена (Москва)
                     </div>
                  ) : null}
               </div>
               {leftSideContent}
            </div>
         </div>
      </header>
   );
};

export default Header;
