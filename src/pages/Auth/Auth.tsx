import concert from "../../assets/images/concert.png";
import whiteBg from "../../assets/images/auth/whiteBg.png";
import greenFigure from "../../assets/icons/auth/greenFigure.svg";
import pinkFigure from "../../assets/icons/auth/pinkFigure.svg";

import Button from "../../components/UI/Button/Button";
import { ButtonsBgColor } from "../../Types/enums";

import Header from "../../components/Header/Header";
import { HeaderType } from "../../Types/enums";

import styles from "./Auth.module.scss";
import { Outlet } from "react-router-dom";

const Auth = () => {
   return (
      <>
         <Header type={HeaderType.auth} />
         <div className={styles.content}>
            <div className={styles.left}>
               <div className={styles.left__text}>
                  <h2 className={styles.left__textTitle}>
                     Станьте участником самого масштабного рок-бэнда страны!
                  </h2>
                  <Button
                     bgColor={ButtonsBgColor.green}
                     to={"/"}
                     className={styles.left__button}>
                     БИЛЕТЫ
                  </Button>
                  <img
                     src={greenFigure}
                     alt="Задний фон"
                     className={styles.left__textBg1}
                  />
                  <img
                     src={pinkFigure}
                     alt="Задний фон"
                     className={styles.left__textBg2}
                  />
               </div>
               <img src={concert} alt="Концерт" className={styles.left__bg} />
            </div>
            <div className={styles.right}>
               <div
                  style={{
                     position: "relative",
                     zIndex: 15,
                  }}>
                  <Outlet />
               </div>
               <img
                  src={whiteBg}
                  alt="Задний фон"
                  className={styles.right__bg}
               />
            </div>
         </div>
      </>
   );
};

export default Auth;
