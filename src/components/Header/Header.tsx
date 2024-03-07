import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import Button from "../UI/Button/Button";
import styles from "./Header.module.scss";
import useWindowSize from "../../hooks/useWindowSize";

import { ButtonsbgColor } from "../../Types/enums";

const Header = () => {
   const { width } = useWindowSize();
   return (
      <div className={styles.header}>
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
               <Button to="/" bgColor={ButtonsbgColor.green} fontSize={14}>
                  Выйти
               </Button>
            </div>
         </div>
      </div>
   );
};

export default Header;
