import Button from "../../../../components/UI/Button/Button";
import Title from "../../../../components/UI/Title/Title";

import person from "../../../../assets/images/cabinet/person.png";
import squarePink from "../../../../assets/icons/decor/squarePink.svg";

import { ButtonsbgColor, TitleVariants } from "../../../../Types/enums";
import { ButtonsBgVariants } from "../../../../Types/enums";

import styles from "./CabinetProfile.module.scss";
import useWindowSize from "../../../../hooks/useWindowSize";

const CabinetProfile = () => {
   const { width } = useWindowSize();

   return (
      <div className={styles.cabinet__inner}>
         <div className={styles.cabinet__data}>
            <Title className={styles.cabinet__title} variant={TitleVariants.h1}>
               анкета
               <br />
               музыканта
            </Title>
            {width < 991 ? (
               <div className={styles.cabinet__person}>
                  <img
                     src={person}
                     alt="картинка"
                     className={styles.cabinet__personImg}
                  />
                  <img
                     src={squarePink}
                     alt="декор"
                     className={styles.cabinet__personDecor}
                  />
                  <div className={styles.cabinet__personLike}>
                     <svg
                        width="22"
                        height="19"
                        viewBox="0 0 22 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M10.998 3.93378L10.279 3.18981C9.32372 2.20147 7.79009 1 6.132 1C4.56134 1 3.28963 1.53727 2.4142 2.40099C1.53974 3.26375 1 4.51175 1 6.04932C1 7.71658 1.65645 9.11619 2.72065 10.4277C3.80409 11.7629 5.25693 12.9449 6.7894 14.1861L6.7898 14.1864L6.84692 14.2327C8.24424 15.3656 9.7745 16.6063 10.9636 17.9976C10.9637 17.9976 10.9643 17.9983 10.9658 17.999C10.9674 17.9998 10.9689 18 10.97 18H11.028C11.0287 18 11.0295 17.9999 11.0303 17.9996C11.0306 17.9995 11.0308 17.9994 11.031 17.9993C11.0322 17.9988 11.0328 17.9982 11.033 17.998C11.0331 17.9979 11.0331 17.9979 11.0331 17.9979L11.792 18.6491C12.929 17.3206 14.408 16.1216 15.839 14.9632L10.998 3.93378ZM10.998 3.93378L11.717 3.18981C12.6715 2.20228 14.2093 1 15.869 1C17.4391 1 18.7105 1.53722 19.5859 2.40095C20.4603 3.26373 21 4.51175 21 6.04932C21 7.71696 20.3431 9.11678 19.2786 10.4283C18.1948 11.7636 16.7418 12.9452 15.2098 14.1859L10.998 3.93378Z"
                           fill="#F1F1F1"
                           stroke="#F1F1F1"
                           stroke-width="2"
                        />
                     </svg>
                     <span>132</span>
                  </div>
               </div>
            ) : null}
            <div className={styles.cabinet__form}>
               <div className={styles.cabinet__item}>Имя Фамилия</div>
               <div className={styles.cabinet__item}>Барабаны</div>
               <div className={styles.cabinet__item}>Ссылка вк</div>

               <Button
                  className={styles.cabinet__changeLink}
                  to="change"
                  bgColor={ButtonsbgColor.green}
                  bgType={ButtonsBgVariants.narrow}>
                  Редактировать
               </Button>
            </div>
         </div>
         {width > 991 ? (
            <div className={styles.cabinet__person}>
               <img
                  src={person}
                  alt="картинка"
                  className={styles.cabinet__personImg}
               />
               <img
                  src={squarePink}
                  alt="декор"
                  className={styles.cabinet__personDecor}
               />
               <div className={styles.cabinet__personLike}>
                  <svg
                     width="22"
                     height="19"
                     viewBox="0 0 22 19"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M10.998 3.93378L10.279 3.18981C9.32372 2.20147 7.79009 1 6.132 1C4.56134 1 3.28963 1.53727 2.4142 2.40099C1.53974 3.26375 1 4.51175 1 6.04932C1 7.71658 1.65645 9.11619 2.72065 10.4277C3.80409 11.7629 5.25693 12.9449 6.7894 14.1861L6.7898 14.1864L6.84692 14.2327C8.24424 15.3656 9.7745 16.6063 10.9636 17.9976C10.9637 17.9976 10.9643 17.9983 10.9658 17.999C10.9674 17.9998 10.9689 18 10.97 18H11.028C11.0287 18 11.0295 17.9999 11.0303 17.9996C11.0306 17.9995 11.0308 17.9994 11.031 17.9993C11.0322 17.9988 11.0328 17.9982 11.033 17.998C11.0331 17.9979 11.0331 17.9979 11.0331 17.9979L11.792 18.6491C12.929 17.3206 14.408 16.1216 15.839 14.9632L10.998 3.93378ZM10.998 3.93378L11.717 3.18981C12.6715 2.20228 14.2093 1 15.869 1C17.4391 1 18.7105 1.53722 19.5859 2.40095C20.4603 3.26373 21 4.51175 21 6.04932C21 7.71696 20.3431 9.11678 19.2786 10.4283C18.1948 11.7636 16.7418 12.9452 15.2098 14.1859L10.998 3.93378Z"
                        fill="#F1F1F1"
                        stroke="#F1F1F1"
                        stroke-width="2"
                     />
                  </svg>
                  <span>132</span>
               </div>
            </div>
         ) : null}
      </div>
   );
};

export default CabinetProfile;
