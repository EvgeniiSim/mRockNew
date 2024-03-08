import { ReactNode, useMemo } from "react";
import useWindowSize from "../../../hooks/useWindowSize";

import { useNavigate } from "react-router-dom";

import classNames from "classnames";

import { ButtonsTags } from "../../../Types/enums";
import { ButtonsBgVariants } from "../../../Types/enums";
import { ButtonsBgColor } from "../../../Types/enums";

import styles from "./Buttton.module.scss";

interface ButtonProps {
   children: string;
   to?: string;
   bgColor: ButtonsBgColor;
   tagType?: ButtonsTags;
   form?: string;
   bgType?: ButtonsBgVariants;
   fontSize?: number;
   currentSize?: number;
   className?: ReactNode;
   onClick?: () => void;
}

const Button = ({
   children,
   to,
   bgColor,
   tagType = ButtonsTags.div,
   form,
   bgType = ButtonsBgVariants.wide,
   fontSize = 16,
   currentSize = 16,
   className,
   onClick: callback,
}: ButtonProps) => {
   const navigate = useNavigate();
   const { width } = useWindowSize();

   ///// Уменьшаем размер шрифта на маленьких экранах
   if (width <= 576) {
      fontSize -= 2;
   }

   ///// Определяем цвет текста
   const btnColor = classNames({
      btn: true,
      green: bgColor === ButtonsBgColor.green,
      pink: bgColor === ButtonsBgColor.pink,
      white: bgColor === ButtonsBgColor.white,
   });

   ///// Пересчитываем font-size в em
   const fontSizeCalculated = useMemo(() => {
      return `${fontSize / currentSize}em`;
   }, [fontSize]);
   // fontSize = fontSize / currentSize;

   ////// Считаем padding в em
   const paddingCalculated = useMemo(() => {
      const paddingY = 35 / currentSize;
      const paddingX = 50 / currentSize;
      return `${paddingY}em ${paddingX}em`;
   }, [fontSize]);

   let content;

   if (tagType === ButtonsTags.div) {
      content = (
         <div
            onClick={() => {
               if (callback) {
                  callback();
               }
               if (to) {
                  navigate(to);
               }
            }}
            className={`${styles.button} ${btnColor} ${
               className ? className : ""
            }`}
            style={{
               padding: paddingCalculated,
               fontSize: fontSizeCalculated,
               cursor: "pointer",
            }}>
            {children}
            {bgType === ButtonsBgVariants.narrow ? (
               <>
                  <svg
                     className={styles.button__border}
                     width="234"
                     height="60"
                     viewBox="0 0 234 60"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M233.716 25.9266C233.573 25.3776 233.451 24.7984 233.221 24.2481C233.086 23.9042 232.907 23.5692 232.665 23.2605C232.259 22.7459 231.682 22.293 230.788 21.9785C230.911 21.4783 230.543 21.3056 230.038 21.2231C229.969 21.217 229.892 21.2039 229.815 21.1908C229.662 21.056 229.508 20.9276 229.355 20.7928C229.354 20.4095 229.29 20.0526 228.988 19.8218C228.809 19.6848 228.54 19.5909 228.16 19.5577C228.175 19.1886 228.023 18.9453 227.759 18.7817C227.562 18.6559 227.3 18.5754 227.009 18.5181C226.915 18.4971 226.812 18.4817 226.709 18.4663C225.99 17.9499 225.262 17.4391 224.543 16.9227C224.539 16.8649 224.526 16.819 224.504 16.7723C224.437 16.6451 224.287 16.5682 224.062 16.5612C222.739 15.8898 221.398 15.2359 220.104 14.5351C211.052 9.66801 200.227 8.54846 190.145 5.90347C184.021 4.29462 177.499 3.85175 171.123 3.0257C162.651 1.92681 163.376 1.81549 154.872 1.17373C151.445 0.91222 148.006 0.694329 144.585 0.650594C142.797 0.628275 140.95 0.287828 139.264 0.485239C135.584 0.923377 131.889 1.23248 128.159 1.35325C126.913 1.39114 125.669 1.41001 124.418 1.40278C124.313 1.41274 124.199 1.42195 124.094 1.43191C123.989 1.44187 123.875 1.45108 123.77 1.46104C122.396 1.46226 121.029 1.49593 119.655 1.50982C118.28 1.52372 116.916 1.51935 115.552 1.4255C107.282 0.887256 99.3892 2.18957 91.4355 3.09694C87.6078 3.53493 83.8319 4.27127 80.0525 4.94982C75.9111 5.69251 71.5636 5.81675 67.4057 6.64742C61.2922 7.87547 55.1295 8.97146 48.857 9.8343C42.7954 10.6709 36.8226 11.8793 30.9243 13.2284C25.4868 14.4772 20.6109 16.4523 15.7801 18.508C12.9722 19.6995 10.0283 20.7577 7.9275 22.7009C5.33463 25.0992 3.77006 27.958 1.61221 30.5478C0.144979 32.3037 0.555152 33.8597 1.88855 35.6882C4.92791 39.8504 10.1779 41.6127 15.5366 43.4229C18.1864 44.319 21.0157 44.854 23.5688 45.9588C27.0846 47.48 30.5661 49.094 34.2347 50.3603C42.0869 53.0657 50.3074 55.0432 58.6216 56.5499C63.1635 57.3752 67.8952 57.8211 72.5669 58.1595C79.7429 58.6788 86.9064 59.7335 94.1151 59.4891C94.6195 59.8781 95.0621 59.8849 95.4243 59.4248C96.4644 59.0622 97.5692 59.5421 98.6604 59.3885C104.284 58.5903 110.03 59.0674 115.743 59.2223C118.942 59.3106 122.173 59.7337 125.351 59.6605C131.352 59.5148 137.34 59.2148 143.303 58.8103C151.503 58.2566 150.421 57.7874 158.375 56.286C158.591 56.5029 158.692 56.4351 158.755 56.2234C159.468 56.1197 160.189 56.0168 160.902 55.9131C161.079 56.0818 161.212 56.0488 161.323 55.8796C162.109 55.7376 162.874 55.5362 163.67 55.4718C168.684 55.0801 173.722 54.8182 178.711 54.3158C181.841 54.002 184.888 53.3552 187.974 52.8523C188.233 52.9771 188.454 53.0221 188.649 52.988C188.746 52.9709 188.836 52.9341 188.911 52.8767C188.948 52.8481 188.986 52.813 189.024 52.7717C189.062 52.7303 189.092 52.6882 189.123 52.6335C189.443 52.5529 189.771 52.4794 190.091 52.3988C190.167 52.4246 190.236 52.437 190.296 52.4422C190.477 52.4581 190.606 52.3736 190.673 52.207C190.946 52.1606 191.211 52.1199 191.484 52.0735C191.502 52.0751 191.511 52.0695 191.529 52.0646C191.64 52.0808 191.735 52.0891 191.83 52.091C192.109 52.0898 192.308 51.9923 192.351 51.7086C193.04 51.4815 193.738 51.2551 194.428 51.0216C194.563 51.0654 194.684 51.0696 194.791 51.0407C194.844 51.0262 194.89 51.0046 194.936 50.9767C194.982 50.9487 195.019 50.9137 195.058 50.866C195.087 50.8366 195.124 50.8143 195.159 50.8046C195.195 50.795 195.239 50.7924 195.29 50.8033C195.655 50.8991 195.95 50.9057 196.184 50.8176C196.3 50.7767 196.393 50.7082 196.479 50.6199C196.565 50.5316 196.627 50.422 196.674 50.2856C197.454 50.009 198.227 49.7189 199.01 49.4233C201.329 48.5467 203.642 47.6441 206.089 47.0022C213.23 45.1551 219.784 42.6817 225.25 38.8484C226.38 38.6471 227.099 38.1735 227.597 37.5528C227.899 37.1832 228.119 36.7617 228.315 36.3189C229.007 36.2518 229.401 36.018 229.647 35.7009C229.893 35.3775 229.997 34.9779 230.094 34.5712C230.101 34.4888 230.149 34.4355 230.248 34.4058C230.947 34.4542 231.124 34.0289 231.404 33.7085C233.47 31.3727 234.49 28.7792 233.751 25.9233L233.716 25.9266ZM4.98623 34.7584C4.72858 34.2313 4.48739 33.6161 4.84428 33.1172C7.57499 29.2554 9.86877 25.1255 14.9208 22.5335C19.1082 20.3832 23.7285 18.7435 28.3166 17.0754C34.7178 14.7547 41.7742 13.871 48.7059 12.7273C48.7223 12.8373 48.7387 12.9474 48.755 13.0574C47.1318 13.5286 45.5096 13.987 43.8789 14.4448C38.9952 15.8188 34.0954 17.1785 29.3335 18.7484C22.96 20.8543 17.8701 24.1712 14.2113 28.6033C13.4811 29.4911 12.6509 30.3318 11.8626 31.1891C8.63905 34.7267 10.4308 37.3681 13.7751 40.4392C13.9922 40.637 14.237 40.8181 14.379 41.0797C10.1857 39.8505 6.60268 38.1063 4.98623 34.7584ZM227.269 31.0282C224.78 34.7131 221.182 37.675 216.78 39.9917C213.717 41.608 210.079 42.7524 206.491 43.7287C201.558 45.0665 196.887 46.7848 192.171 48.4226C186.272 50.4805 180.052 51.6291 173.481 52.0315C164.517 52.5757 165.039 53.6731 156.265 54.9174C148.987 55.9478 141.472 56.1207 134.067 56.712C125.674 57.3829 117.247 56.7543 108.821 56.5216C104.079 56.3878 99.4072 56.835 94.7063 57.0242C90.8256 57.1765 86.9288 57.1166 83.0285 56.8009C77.1437 56.3244 71.2423 55.9358 65.3658 55.3642C61.1871 54.9539 57.0194 54.321 52.9617 53.3273C48.1891 52.1624 43.4371 50.961 38.6651 49.7898C37.9249 49.6101 37.2209 49.4143 36.6106 49.0416C36.3155 48.9391 36.0204 48.8366 35.6666 48.7099C35.7297 48.6835 35.7924 48.6634 35.8458 48.6489C36.264 48.5386 36.6103 48.6519 36.9658 48.7597C42.1534 49.4562 47.3033 50.4817 52.5531 50.7685C53.3056 50.8088 54.0506 50.8357 54.806 50.8443C55.5095 50.8483 56.734 51.1535 56.7635 50.5237C56.7967 49.7537 55.6312 49.3707 54.6242 49.3593C51.446 49.3303 48.3027 49.0042 45.1615 48.5569C38.2781 47.5778 31.4075 46.453 24.942 44.2841C20.5446 42.8071 16.7863 40.5877 14.553 37.2369C13.8319 36.1519 13.7731 35.1439 14.4193 34.0252C19.1629 25.8683 27.9027 21.076 38.8776 18.0377C48.8725 15.2713 58.771 12.3177 69.195 10.4C76.6418 9.03315 84.28 8.15566 91.7123 6.75556C104.464 4.35817 117.579 3.85762 130.777 3.60065C136.191 3.49949 141.51 2.60436 146.99 3.04544C159.57 4.06944 162.886 5.07715 175.425 6.76185C182.22 7.66924 189.068 8.55581 195.925 9.23879C201.318 9.78083 206.69 11.2345 211.766 13.103C216.522 14.8477 220.798 17.0102 224.561 19.8688C228.544 22.8936 229.674 27.4189 227.244 31.0196L227.269 31.0282Z"
                        fill={bgColor}
                     />
                  </svg>
                  <svg
                     className={styles.button__bg}
                     width="219"
                     height="57"
                     viewBox="0 0 219 57"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M70.8546 4.67415L37.225 12.1107L20.6518 16.3332L5.51123 24.5802L0.360873 33.495L3.26814 39.0446L5.24268 40.5779L20.1399 46.8289L34.0791 50.5634L51.5179 54.3566L79.5 55.8085L91.4955 56.0278L112.493 56.3803L136 55L147.546 53.4683L155.562 52.6027L175.101 50.4303L191.7 44.7081L207.806 38.4776L215.5 32.5L218.532 25.1557L215.124 19.5978L208.209 14.481L195.295 9.26348L162.884 3.71868L129.939 0.165213L100.418 1.16986L70.8546 4.67415Z"
                        fill={bgColor}
                     />
                  </svg>
               </>
            ) : (
               <>
                  <svg
                     className={styles.button__border}
                     width="153"
                     height="52"
                     viewBox="0 0 153 52"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M152.088 21.4254C152.018 20.9604 151.961 20.4696 151.837 20.0044C151.765 19.7135 151.664 19.4306 151.524 19.1707C151.288 18.7374 150.944 18.358 150.397 18.099C150.49 17.673 150.267 17.5297 149.955 17.4642C149.912 17.4597 149.864 17.4492 149.817 17.4388C149.726 17.3257 149.634 17.218 149.543 17.105C149.556 16.7794 149.528 16.4769 149.348 16.2837C149.241 16.1689 149.076 16.0916 148.841 16.0669C148.863 15.7532 148.776 15.548 148.617 15.4115C148.498 15.3064 148.337 15.2404 148.158 15.1944C148.1 15.1774 148.037 15.1653 147.973 15.1531C147.542 14.7211 147.105 14.2938 146.674 13.8618C146.674 13.8127 146.667 13.7739 146.655 13.7345C146.618 13.627 146.527 13.563 146.387 13.5592C145.585 13.0009 144.771 12.4578 143.988 11.8743C138.508 7.82284 131.794 6.97006 125.595 4.81506C121.83 3.50417 117.777 3.1871 113.828 2.54328C108.581 1.68674 103.249 1.80173 97.9661 1.33368C95.8373 1.14262 93.6992 0.988714 91.5672 0.982534C90.4524 0.979767 89.3119 0.707361 88.2534 0.890276C85.9428 1.29568 83.6275 1.59163 81.2965 1.72796C80.5179 1.77142 79.741 1.79872 78.961 1.8039C78.8951 1.81331 78.8238 1.82216 78.7579 1.83157C78.6919 1.84098 78.6206 1.84983 78.5547 1.85924C77.698 1.87271 76.8439 1.91368 75.9862 1.93792C75.1284 1.96216 74.2777 1.9708 73.4295 1.90345C68.2896 1.5212 63.3214 2.69865 58.3289 3.54124C55.9262 3.94785 53.5456 4.60738 51.1647 5.21785C48.5559 5.88607 45.8397 6.03094 43.2176 6.77403C39.3619 7.87229 35.4801 8.85886 31.5377 9.64841C27.7279 10.4137 23.9607 11.4941 20.2352 12.6932C16.8005 13.803 13.6912 15.5245 10.6073 17.314C8.81485 18.3513 6.9422 19.2766 5.56511 20.9459C3.86545 23.0062 2.79145 25.4482 1.3566 27.6671C0.381139 29.1716 0.58364 30.4894 1.3527 32.0301C3.10589 35.5374 6.32034 36.9865 9.60099 38.4753C11.2231 39.2124 12.9697 39.6411 14.5244 40.5562C16.6654 41.8163 18.7818 43.1555 21.0268 44.1977C25.8321 46.4241 30.8922 48.0291 36.0268 49.2334C38.8317 49.8932 41.768 50.229 44.6706 50.4742C49.1291 50.8502 53.5615 51.681 58.0665 51.4082C58.3679 51.7341 58.6438 51.7358 58.8854 51.3418C59.5467 51.0245 60.2194 51.4221 60.9053 51.2817C64.4407 50.5529 68.0085 50.9061 71.5671 50.9859C73.5596 51.0319 75.5601 51.362 77.5454 51.2711C81.2935 51.093 85.0392 50.784 88.7725 50.3865C93.9069 49.8421 99.0369 49.2373 104.05 47.8902C104.177 48.0725 104.243 48.014 104.289 47.8336C104.737 47.7391 105.191 47.6452 105.639 47.5507C105.743 47.6923 105.828 47.6631 105.902 47.5184C106.398 47.3907 106.882 47.2128 107.381 47.1508C110.522 46.7728 113.673 46.5048 116.803 46.0329C118.766 45.7381 120.689 45.1612 122.631 44.7062C122.788 44.8099 122.925 44.846 123.047 44.8153C123.108 44.7999 123.166 44.7679 123.214 44.7185C123.239 44.6938 123.264 44.6637 123.289 44.6283C123.314 44.5928 123.334 44.5568 123.355 44.5099C123.558 44.4386 123.765 44.3732 123.967 44.3019C124.014 44.3231 124.056 44.333 124.094 44.3369C124.206 44.3488 124.289 44.2758 124.337 44.1337C124.509 44.0919 124.675 44.0549 124.848 44.0131C124.858 44.0142 124.864 44.0094 124.875 44.0051C124.944 44.0178 125.003 44.024 125.063 44.0248C125.236 44.0213 125.364 43.9366 125.401 43.6953C125.838 43.4962 126.281 43.2976 126.72 43.0931C126.802 43.129 126.878 43.1315 126.946 43.1059C126.979 43.0932 127.008 43.0744 127.038 43.0503C127.068 43.0262 127.092 42.9961 127.118 42.9552C127.137 42.93 127.161 42.9107 127.184 42.9022C127.206 42.8936 127.233 42.8911 127.265 42.8998C127.489 42.9779 127.673 42.9809 127.822 42.9039C127.896 42.8681 127.957 42.8091 128.013 42.7333C128.07 42.6576 128.112 42.564 128.146 42.4477C128.642 42.2057 129.135 41.9523 129.633 41.6942C131.11 40.9288 132.583 40.1413 134.132 39.574C138.65 37.9407 142.823 35.7808 146.364 32.4759C147.075 32.2947 147.541 31.886 147.872 31.3544C148.074 31.0378 148.225 30.6778 148.362 30.3C148.796 30.2367 149.05 30.0346 149.214 29.7631C149.379 29.4862 149.458 29.1459 149.532 28.7996C149.539 28.7295 149.571 28.6839 149.634 28.6577C150.068 28.6925 150.193 28.3298 150.379 28.0551C151.748 26.0527 152.473 23.8409 152.11 21.4222L152.088 21.4254ZM3.31689 31.2124C3.17425 30.7671 3.04489 30.2469 3.28462 29.8199C5.12044 26.5156 6.69291 22.9874 9.93318 20.7404C12.619 18.8764 15.5573 17.442 18.4765 15.9839C22.5491 13.9551 26.9812 13.1407 31.3443 12.1067C31.3508 12.2 31.3572 12.2933 31.3636 12.3866C30.3349 12.8014 29.3073 13.2054 28.2743 13.6089C25.1808 14.82 22.0778 16.0192 19.0535 17.3955C15.0055 19.2416 11.7168 22.1046 9.28246 25.9017C8.79656 26.6623 8.24981 27.3838 7.72869 28.1189C5.59657 31.1524 6.62368 33.3795 8.60446 35.9573C8.73316 36.1234 8.87961 36.275 8.95924 36.4958C6.38563 35.4899 4.21041 34.041 3.31689 31.2124ZM147.892 25.8162C146.213 28.9682 143.866 31.5162 141.041 33.5235C139.075 34.9239 136.766 35.9287 134.494 36.7904C131.372 37.9711 128.399 39.4727 125.401 40.9063C121.65 42.7074 117.731 43.7391 113.619 44.1403C108.008 44.6837 102.508 45.827 96.9917 46.9632C92.4164 47.9041 87.7226 48.1189 83.0835 48.6882C77.8248 49.3339 72.59 48.8763 67.3415 48.755C64.3881 48.6843 61.4587 49.1064 58.5199 49.3096C56.0939 49.474 53.6652 49.4585 51.2431 49.2257C47.5885 48.8742 43.9206 48.5977 40.2745 48.1654C37.6819 47.8548 35.1038 47.3551 32.6068 46.5479C29.6696 45.6018 26.7466 44.6245 23.81 43.6731C23.3544 43.5271 22.922 43.3673 22.5541 43.0562C22.3735 42.9719 22.1929 42.8875 21.9766 42.7831C22.0169 42.7601 22.0566 42.7425 22.0904 42.7297C22.3551 42.6322 22.5672 42.7253 22.7853 42.8136C25.9974 43.3582 29.1747 44.1824 32.4396 44.3785C32.9077 44.4059 33.3715 44.422 33.8423 44.4224C34.2811 44.4195 35.0345 44.6676 35.0745 44.1325C35.1216 43.4783 34.4077 43.1636 33.7799 43.1629C31.7983 43.1671 29.8488 42.9186 27.9046 42.5672C23.6444 41.7981 19.3972 40.905 15.4384 39.1215C12.746 37.907 10.4777 36.0562 9.19957 33.2308C8.78693 32.3158 8.78483 31.4603 9.22631 30.5044C12.465 23.5342 18.0812 19.3851 25.0314 16.7055C31.361 14.2657 37.6368 11.6677 44.205 9.94477C48.8971 8.71651 53.6918 7.90216 58.3761 6.64583C66.4129 4.4944 74.6109 3.95059 82.8522 3.61288C86.2331 3.47796 89.582 2.66962 92.985 2.9946C100.797 3.75035 108.62 4.36006 116.384 5.67729C120.591 6.38639 124.832 7.07731 129.087 7.59526C132.432 8.00677 135.733 9.19271 138.835 10.7335C141.742 12.1722 144.336 13.97 146.585 16.3636C148.965 18.8964 149.515 22.7293 147.876 25.8092L147.892 25.8162Z"
                        fill={bgColor}
                     />
                  </svg>
                  <svg
                     className={styles.button__bg}
                     width="143"
                     height="49"
                     viewBox="0 0 143 49"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M37.5411 7L21.1438 12.5714L11.5596 17.1278L2.88991 22.1128L0 27.391L0.863014 31.4962L2.58904 34.4286L11.2192 40L20.7123 43.8571L30.5 46.5L44 48.5L57 48L69.5 48.5L81.5 47L91.5 46L101.5 44L115.5 41.5L126 36L134.5 31.5L140 24.5L142.5 17.5L131 7.5L118.5 4.5L106.5 2.28571L90 0.5L72.4931 1L51.7808 3.14286L37.5411 7Z"
                        fill={bgColor}
                     />
                  </svg>
               </>
            )}
         </div>
      );
   } else if (tagType === ButtonsTags.submit) {
      content = (
         <button
            type="submit"
            form={form}
            className={`${styles.button} ${btnColor} ${
               className ? className : ""
            }`}
            style={{
               padding: paddingCalculated,
               fontSize: fontSizeCalculated,
               cursor: "pointer",
            }}>
            <div
               onClick={() => {
                  if (callback) {
                     callback();
                  }
                  if (to) {
                     navigate(to);
                  }
               }}>
               {children}
            </div>
            {bgType === ButtonsBgVariants.narrow ? (
               <>
                  <svg
                     className={styles.button__border}
                     width="234"
                     height="60"
                     viewBox="0 0 234 60"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M233.716 25.9266C233.573 25.3776 233.451 24.7984 233.221 24.2481C233.086 23.9042 232.907 23.5692 232.665 23.2605C232.259 22.7459 231.682 22.293 230.788 21.9785C230.911 21.4783 230.543 21.3056 230.038 21.2231C229.969 21.217 229.892 21.2039 229.815 21.1908C229.662 21.056 229.508 20.9276 229.355 20.7928C229.354 20.4095 229.29 20.0526 228.988 19.8218C228.809 19.6848 228.54 19.5909 228.16 19.5577C228.175 19.1886 228.023 18.9453 227.759 18.7817C227.562 18.6559 227.3 18.5754 227.009 18.5181C226.915 18.4971 226.812 18.4817 226.709 18.4663C225.99 17.9499 225.262 17.4391 224.543 16.9227C224.539 16.8649 224.526 16.819 224.504 16.7723C224.437 16.6451 224.287 16.5682 224.062 16.5612C222.739 15.8898 221.398 15.2359 220.104 14.5351C211.052 9.66801 200.227 8.54846 190.145 5.90347C184.021 4.29462 177.499 3.85175 171.123 3.0257C162.651 1.92681 163.376 1.81549 154.872 1.17373C151.445 0.91222 148.006 0.694329 144.585 0.650594C142.797 0.628275 140.95 0.287828 139.264 0.485239C135.584 0.923377 131.889 1.23248 128.159 1.35325C126.913 1.39114 125.669 1.41001 124.418 1.40278C124.313 1.41274 124.199 1.42195 124.094 1.43191C123.989 1.44187 123.875 1.45108 123.77 1.46104C122.396 1.46226 121.029 1.49593 119.655 1.50982C118.28 1.52372 116.916 1.51935 115.552 1.4255C107.282 0.887256 99.3892 2.18957 91.4355 3.09694C87.6078 3.53493 83.8319 4.27127 80.0525 4.94982C75.9111 5.69251 71.5636 5.81675 67.4057 6.64742C61.2922 7.87547 55.1295 8.97146 48.857 9.8343C42.7954 10.6709 36.8226 11.8793 30.9243 13.2284C25.4868 14.4772 20.6109 16.4523 15.7801 18.508C12.9722 19.6995 10.0283 20.7577 7.9275 22.7009C5.33463 25.0992 3.77006 27.958 1.61221 30.5478C0.144979 32.3037 0.555152 33.8597 1.88855 35.6882C4.92791 39.8504 10.1779 41.6127 15.5366 43.4229C18.1864 44.319 21.0157 44.854 23.5688 45.9588C27.0846 47.48 30.5661 49.094 34.2347 50.3603C42.0869 53.0657 50.3074 55.0432 58.6216 56.5499C63.1635 57.3752 67.8952 57.8211 72.5669 58.1595C79.7429 58.6788 86.9064 59.7335 94.1151 59.4891C94.6195 59.8781 95.0621 59.8849 95.4243 59.4248C96.4644 59.0622 97.5692 59.5421 98.6604 59.3885C104.284 58.5903 110.03 59.0674 115.743 59.2223C118.942 59.3106 122.173 59.7337 125.351 59.6605C131.352 59.5148 137.34 59.2148 143.303 58.8103C151.503 58.2566 150.421 57.7874 158.375 56.286C158.591 56.5029 158.692 56.4351 158.755 56.2234C159.468 56.1197 160.189 56.0168 160.902 55.9131C161.079 56.0818 161.212 56.0488 161.323 55.8796C162.109 55.7376 162.874 55.5362 163.67 55.4718C168.684 55.0801 173.722 54.8182 178.711 54.3158C181.841 54.002 184.888 53.3552 187.974 52.8523C188.233 52.9771 188.454 53.0221 188.649 52.988C188.746 52.9709 188.836 52.9341 188.911 52.8767C188.948 52.8481 188.986 52.813 189.024 52.7717C189.062 52.7303 189.092 52.6882 189.123 52.6335C189.443 52.5529 189.771 52.4794 190.091 52.3988C190.167 52.4246 190.236 52.437 190.296 52.4422C190.477 52.4581 190.606 52.3736 190.673 52.207C190.946 52.1606 191.211 52.1199 191.484 52.0735C191.502 52.0751 191.511 52.0695 191.529 52.0646C191.64 52.0808 191.735 52.0891 191.83 52.091C192.109 52.0898 192.308 51.9923 192.351 51.7086C193.04 51.4815 193.738 51.2551 194.428 51.0216C194.563 51.0654 194.684 51.0696 194.791 51.0407C194.844 51.0262 194.89 51.0046 194.936 50.9767C194.982 50.9487 195.019 50.9137 195.058 50.866C195.087 50.8366 195.124 50.8143 195.159 50.8046C195.195 50.795 195.239 50.7924 195.29 50.8033C195.655 50.8991 195.95 50.9057 196.184 50.8176C196.3 50.7767 196.393 50.7082 196.479 50.6199C196.565 50.5316 196.627 50.422 196.674 50.2856C197.454 50.009 198.227 49.7189 199.01 49.4233C201.329 48.5467 203.642 47.6441 206.089 47.0022C213.23 45.1551 219.784 42.6817 225.25 38.8484C226.38 38.6471 227.099 38.1735 227.597 37.5528C227.899 37.1832 228.119 36.7617 228.315 36.3189C229.007 36.2518 229.401 36.018 229.647 35.7009C229.893 35.3775 229.997 34.9779 230.094 34.5712C230.101 34.4888 230.149 34.4355 230.248 34.4058C230.947 34.4542 231.124 34.0289 231.404 33.7085C233.47 31.3727 234.49 28.7792 233.751 25.9233L233.716 25.9266ZM4.98623 34.7584C4.72858 34.2313 4.48739 33.6161 4.84428 33.1172C7.57499 29.2554 9.86877 25.1255 14.9208 22.5335C19.1082 20.3832 23.7285 18.7435 28.3166 17.0754C34.7178 14.7547 41.7742 13.871 48.7059 12.7273C48.7223 12.8373 48.7387 12.9474 48.755 13.0574C47.1318 13.5286 45.5096 13.987 43.8789 14.4448C38.9952 15.8188 34.0954 17.1785 29.3335 18.7484C22.96 20.8543 17.8701 24.1712 14.2113 28.6033C13.4811 29.4911 12.6509 30.3318 11.8626 31.1891C8.63905 34.7267 10.4308 37.3681 13.7751 40.4392C13.9922 40.637 14.237 40.8181 14.379 41.0797C10.1857 39.8505 6.60268 38.1063 4.98623 34.7584ZM227.269 31.0282C224.78 34.7131 221.182 37.675 216.78 39.9917C213.717 41.608 210.079 42.7524 206.491 43.7287C201.558 45.0665 196.887 46.7848 192.171 48.4226C186.272 50.4805 180.052 51.6291 173.481 52.0315C164.517 52.5757 165.039 53.6731 156.265 54.9174C148.987 55.9478 141.472 56.1207 134.067 56.712C125.674 57.3829 117.247 56.7543 108.821 56.5216C104.079 56.3878 99.4072 56.835 94.7063 57.0242C90.8256 57.1765 86.9288 57.1166 83.0285 56.8009C77.1437 56.3244 71.2423 55.9358 65.3658 55.3642C61.1871 54.9539 57.0194 54.321 52.9617 53.3273C48.1891 52.1624 43.4371 50.961 38.6651 49.7898C37.9249 49.6101 37.2209 49.4143 36.6106 49.0416C36.3155 48.9391 36.0204 48.8366 35.6666 48.7099C35.7297 48.6835 35.7924 48.6634 35.8458 48.6489C36.264 48.5386 36.6103 48.6519 36.9658 48.7597C42.1534 49.4562 47.3033 50.4817 52.5531 50.7685C53.3056 50.8088 54.0506 50.8357 54.806 50.8443C55.5095 50.8483 56.734 51.1535 56.7635 50.5237C56.7967 49.7537 55.6312 49.3707 54.6242 49.3593C51.446 49.3303 48.3027 49.0042 45.1615 48.5569C38.2781 47.5778 31.4075 46.453 24.942 44.2841C20.5446 42.8071 16.7863 40.5877 14.553 37.2369C13.8319 36.1519 13.7731 35.1439 14.4193 34.0252C19.1629 25.8683 27.9027 21.076 38.8776 18.0377C48.8725 15.2713 58.771 12.3177 69.195 10.4C76.6418 9.03315 84.28 8.15566 91.7123 6.75556C104.464 4.35817 117.579 3.85762 130.777 3.60065C136.191 3.49949 141.51 2.60436 146.99 3.04544C159.57 4.06944 162.886 5.07715 175.425 6.76185C182.22 7.66924 189.068 8.55581 195.925 9.23879C201.318 9.78083 206.69 11.2345 211.766 13.103C216.522 14.8477 220.798 17.0102 224.561 19.8688C228.544 22.8936 229.674 27.4189 227.244 31.0196L227.269 31.0282Z"
                        fill={bgColor}
                     />
                  </svg>
                  <svg
                     className={styles.button__bg}
                     width="219"
                     height="57"
                     viewBox="0 0 219 57"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M70.8546 4.67415L37.225 12.1107L20.6518 16.3332L5.51123 24.5802L0.360873 33.495L3.26814 39.0446L5.24268 40.5779L20.1399 46.8289L34.0791 50.5634L51.5179 54.3566L79.5 55.8085L91.4955 56.0278L112.493 56.3803L136 55L147.546 53.4683L155.562 52.6027L175.101 50.4303L191.7 44.7081L207.806 38.4776L215.5 32.5L218.532 25.1557L215.124 19.5978L208.209 14.481L195.295 9.26348L162.884 3.71868L129.939 0.165213L100.418 1.16986L70.8546 4.67415Z"
                        fill={bgColor}
                     />
                  </svg>
               </>
            ) : (
               <>
                  <svg
                     className={styles.button__border}
                     width="153"
                     height="52"
                     viewBox="0 0 153 52"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M152.088 21.4254C152.018 20.9604 151.961 20.4696 151.837 20.0044C151.765 19.7135 151.664 19.4306 151.524 19.1707C151.288 18.7374 150.944 18.358 150.397 18.099C150.49 17.673 150.267 17.5297 149.955 17.4642C149.912 17.4597 149.864 17.4492 149.817 17.4388C149.726 17.3257 149.634 17.218 149.543 17.105C149.556 16.7794 149.528 16.4769 149.348 16.2837C149.241 16.1689 149.076 16.0916 148.841 16.0669C148.863 15.7532 148.776 15.548 148.617 15.4115C148.498 15.3064 148.337 15.2404 148.158 15.1944C148.1 15.1774 148.037 15.1653 147.973 15.1531C147.542 14.7211 147.105 14.2938 146.674 13.8618C146.674 13.8127 146.667 13.7739 146.655 13.7345C146.618 13.627 146.527 13.563 146.387 13.5592C145.585 13.0009 144.771 12.4578 143.988 11.8743C138.508 7.82284 131.794 6.97006 125.595 4.81506C121.83 3.50417 117.777 3.1871 113.828 2.54328C108.581 1.68674 103.249 1.80173 97.9661 1.33368C95.8373 1.14262 93.6992 0.988714 91.5672 0.982534C90.4524 0.979767 89.3119 0.707361 88.2534 0.890276C85.9428 1.29568 83.6275 1.59163 81.2965 1.72796C80.5179 1.77142 79.741 1.79872 78.961 1.8039C78.8951 1.81331 78.8238 1.82216 78.7579 1.83157C78.6919 1.84098 78.6206 1.84983 78.5547 1.85924C77.698 1.87271 76.8439 1.91368 75.9862 1.93792C75.1284 1.96216 74.2777 1.9708 73.4295 1.90345C68.2896 1.5212 63.3214 2.69865 58.3289 3.54124C55.9262 3.94785 53.5456 4.60738 51.1647 5.21785C48.5559 5.88607 45.8397 6.03094 43.2176 6.77403C39.3619 7.87229 35.4801 8.85886 31.5377 9.64841C27.7279 10.4137 23.9607 11.4941 20.2352 12.6932C16.8005 13.803 13.6912 15.5245 10.6073 17.314C8.81485 18.3513 6.9422 19.2766 5.56511 20.9459C3.86545 23.0062 2.79145 25.4482 1.3566 27.6671C0.381139 29.1716 0.58364 30.4894 1.3527 32.0301C3.10589 35.5374 6.32034 36.9865 9.60099 38.4753C11.2231 39.2124 12.9697 39.6411 14.5244 40.5562C16.6654 41.8163 18.7818 43.1555 21.0268 44.1977C25.8321 46.4241 30.8922 48.0291 36.0268 49.2334C38.8317 49.8932 41.768 50.229 44.6706 50.4742C49.1291 50.8502 53.5615 51.681 58.0665 51.4082C58.3679 51.7341 58.6438 51.7358 58.8854 51.3418C59.5467 51.0245 60.2194 51.4221 60.9053 51.2817C64.4407 50.5529 68.0085 50.9061 71.5671 50.9859C73.5596 51.0319 75.5601 51.362 77.5454 51.2711C81.2935 51.093 85.0392 50.784 88.7725 50.3865C93.9069 49.8421 99.0369 49.2373 104.05 47.8902C104.177 48.0725 104.243 48.014 104.289 47.8336C104.737 47.7391 105.191 47.6452 105.639 47.5507C105.743 47.6923 105.828 47.6631 105.902 47.5184C106.398 47.3907 106.882 47.2128 107.381 47.1508C110.522 46.7728 113.673 46.5048 116.803 46.0329C118.766 45.7381 120.689 45.1612 122.631 44.7062C122.788 44.8099 122.925 44.846 123.047 44.8153C123.108 44.7999 123.166 44.7679 123.214 44.7185C123.239 44.6938 123.264 44.6637 123.289 44.6283C123.314 44.5928 123.334 44.5568 123.355 44.5099C123.558 44.4386 123.765 44.3732 123.967 44.3019C124.014 44.3231 124.056 44.333 124.094 44.3369C124.206 44.3488 124.289 44.2758 124.337 44.1337C124.509 44.0919 124.675 44.0549 124.848 44.0131C124.858 44.0142 124.864 44.0094 124.875 44.0051C124.944 44.0178 125.003 44.024 125.063 44.0248C125.236 44.0213 125.364 43.9366 125.401 43.6953C125.838 43.4962 126.281 43.2976 126.72 43.0931C126.802 43.129 126.878 43.1315 126.946 43.1059C126.979 43.0932 127.008 43.0744 127.038 43.0503C127.068 43.0262 127.092 42.9961 127.118 42.9552C127.137 42.93 127.161 42.9107 127.184 42.9022C127.206 42.8936 127.233 42.8911 127.265 42.8998C127.489 42.9779 127.673 42.9809 127.822 42.9039C127.896 42.8681 127.957 42.8091 128.013 42.7333C128.07 42.6576 128.112 42.564 128.146 42.4477C128.642 42.2057 129.135 41.9523 129.633 41.6942C131.11 40.9288 132.583 40.1413 134.132 39.574C138.65 37.9407 142.823 35.7808 146.364 32.4759C147.075 32.2947 147.541 31.886 147.872 31.3544C148.074 31.0378 148.225 30.6778 148.362 30.3C148.796 30.2367 149.05 30.0346 149.214 29.7631C149.379 29.4862 149.458 29.1459 149.532 28.7996C149.539 28.7295 149.571 28.6839 149.634 28.6577C150.068 28.6925 150.193 28.3298 150.379 28.0551C151.748 26.0527 152.473 23.8409 152.11 21.4222L152.088 21.4254ZM3.31689 31.2124C3.17425 30.7671 3.04489 30.2469 3.28462 29.8199C5.12044 26.5156 6.69291 22.9874 9.93318 20.7404C12.619 18.8764 15.5573 17.442 18.4765 15.9839C22.5491 13.9551 26.9812 13.1407 31.3443 12.1067C31.3508 12.2 31.3572 12.2933 31.3636 12.3866C30.3349 12.8014 29.3073 13.2054 28.2743 13.6089C25.1808 14.82 22.0778 16.0192 19.0535 17.3955C15.0055 19.2416 11.7168 22.1046 9.28246 25.9017C8.79656 26.6623 8.24981 27.3838 7.72869 28.1189C5.59657 31.1524 6.62368 33.3795 8.60446 35.9573C8.73316 36.1234 8.87961 36.275 8.95924 36.4958C6.38563 35.4899 4.21041 34.041 3.31689 31.2124ZM147.892 25.8162C146.213 28.9682 143.866 31.5162 141.041 33.5235C139.075 34.9239 136.766 35.9287 134.494 36.7904C131.372 37.9711 128.399 39.4727 125.401 40.9063C121.65 42.7074 117.731 43.7391 113.619 44.1403C108.008 44.6837 102.508 45.827 96.9917 46.9632C92.4164 47.9041 87.7226 48.1189 83.0835 48.6882C77.8248 49.3339 72.59 48.8763 67.3415 48.755C64.3881 48.6843 61.4587 49.1064 58.5199 49.3096C56.0939 49.474 53.6652 49.4585 51.2431 49.2257C47.5885 48.8742 43.9206 48.5977 40.2745 48.1654C37.6819 47.8548 35.1038 47.3551 32.6068 46.5479C29.6696 45.6018 26.7466 44.6245 23.81 43.6731C23.3544 43.5271 22.922 43.3673 22.5541 43.0562C22.3735 42.9719 22.1929 42.8875 21.9766 42.7831C22.0169 42.7601 22.0566 42.7425 22.0904 42.7297C22.3551 42.6322 22.5672 42.7253 22.7853 42.8136C25.9974 43.3582 29.1747 44.1824 32.4396 44.3785C32.9077 44.4059 33.3715 44.422 33.8423 44.4224C34.2811 44.4195 35.0345 44.6676 35.0745 44.1325C35.1216 43.4783 34.4077 43.1636 33.7799 43.1629C31.7983 43.1671 29.8488 42.9186 27.9046 42.5672C23.6444 41.7981 19.3972 40.905 15.4384 39.1215C12.746 37.907 10.4777 36.0562 9.19957 33.2308C8.78693 32.3158 8.78483 31.4603 9.22631 30.5044C12.465 23.5342 18.0812 19.3851 25.0314 16.7055C31.361 14.2657 37.6368 11.6677 44.205 9.94477C48.8971 8.71651 53.6918 7.90216 58.3761 6.64583C66.4129 4.4944 74.6109 3.95059 82.8522 3.61288C86.2331 3.47796 89.582 2.66962 92.985 2.9946C100.797 3.75035 108.62 4.36006 116.384 5.67729C120.591 6.38639 124.832 7.07731 129.087 7.59526C132.432 8.00677 135.733 9.19271 138.835 10.7335C141.742 12.1722 144.336 13.97 146.585 16.3636C148.965 18.8964 149.515 22.7293 147.876 25.8092L147.892 25.8162Z"
                        fill={bgColor}
                     />
                  </svg>
                  <svg
                     className={styles.button__bg}
                     width="143"
                     height="49"
                     viewBox="0 0 143 49"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M37.5411 7L21.1438 12.5714L11.5596 17.1278L2.88991 22.1128L0 27.391L0.863014 31.4962L2.58904 34.4286L11.2192 40L20.7123 43.8571L30.5 46.5L44 48.5L57 48L69.5 48.5L81.5 47L91.5 46L101.5 44L115.5 41.5L126 36L134.5 31.5L140 24.5L142.5 17.5L131 7.5L118.5 4.5L106.5 2.28571L90 0.5L72.4931 1L51.7808 3.14286L37.5411 7Z"
                        fill={bgColor}
                     />
                  </svg>
               </>
            )}
         </button>
      );
   }
   return content;
};

export default Button;
