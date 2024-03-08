import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../../../components/UI/Button/Button";
import {
   ButtonsBgColor,
   ButtonsBgVariants,
   ButtonsTags,
} from "../../../../Types/enums";

import showPwdIcon from "../../../../assets/icons/showPwd.svg";

import styles from "./Login.module.scss";

const Login = () => {
   const [phone, setPhone] = useState("");
   const [phoneError, setPhoneError] = useState(false);

   const [pwd, setPwd] = useState("");
   const [pwdError, setPwdError] = useState(false);
   const [showPwd, setShowPwd] = useState(false);

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setPwdError(true);
      setPhoneError(true);
   };
   return (
      <div className={styles.login}>
         <h2 className={`${styles.login__title} title`}>Авторизация</h2>
         <div className={styles.content}>
            <form
               action="#"
               id="auth-form"
               className={`${styles.form} form`}
               onSubmit={handleSubmit}>
               <div className={styles.form__item}>
                  <label htmlFor="auth-phone" className={styles.form__label}>
                     Телефон
                  </label>
                  <input
                     type="tel"
                     className={`${styles.form__input} input`}
                     placeholder="+7 (000) 000-00-00"
                     name="phone"
                     id="auth-phone"
                     value={phone}
                     onFocus={() => setPhoneError(false)}
                     onChange={(e) => setPhone(e.target.value)}
                  />
                  {phoneError ? (
                     <span className="error-message">Номер неверный</span>
                  ) : null}
               </div>
               <div className={styles.form__item}>
                  <label
                     className={`${styles.form__label} ${styles._pwd}`}
                     htmlFor="auth-link-vk">
                     Пароль (пришел вам в СМС при регистрации)
                  </label>
                  <div
                     className={`${styles.form__inputPwdWrap} ${styles._pwd}`}>
                     <input
                        type={showPwd ? "text" : "password"}
                        name="pwd"
                        id="auth-pwd"
                        value={pwd}
                        onFocus={() => setPwdError(false)}
                        onChange={(e) => setPwd(e.target.value)}
                     />
                     <img
                        src={showPwdIcon}
                        onClick={() => setShowPwd(!showPwd)}
                        alt="Показать пароль"
                     />
                  </div>

                  {pwdError ? (
                     <span className="error-message">Пароль неверный</span>
                  ) : null}
                  <Link to="/auth/reset" className={styles.forgotPwd}>
                     Забыли пароль?
                  </Link>
               </div>
            </form>
            <Button
               form="auth-form"
               bgColor={ButtonsBgColor.pink}
               bgType={ButtonsBgVariants.narrow}
               className={styles.button}
               tagType={ButtonsTags.submit}>
               Войти
            </Button>
            <div className={styles.getAccount}>
               <span>У вас еще нет аккаунта?</span>
               <Link to="/auth/reg">Зарегистрироваться</Link>
            </div>
         </div>
      </div>
   );
};

export default Login;
