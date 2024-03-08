import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../../../components/UI/Button/Button";
import {
   ButtonsBgColor,
   ButtonsBgVariants,
   ButtonsTags,
} from "../../../../Types/enums";

import styles from "./Reset.module.scss";
import classNames from "classnames";
import Loader from "../Loader/Loader";

const Reset = () => {
   const [loading, setLoading] = useState(false);

   const [phone, setPhone] = useState("");
   const [phoneError, setPhoneError] = useState(false);

   //// Определяем стили "error" если имееются ошибке в форме
   const phoneInputClasses = classNames({
      input: true,
      _error: phoneError,
   });

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setLoading(true);
   };
   return (
      <div className={styles.reset}>
         {loading ? (
            <Loader
               title="Пароль отправлен!"
               subtitle={
                  <p>
                     Дождитесь перенаправления на страницу авторизации или{" "}
                     <Link to={"/auth/login"}>нажмите здесь</Link>
                  </p>
               }
            />
         ) : (
            <>
               <h2 className={`${styles.reset__title} title`}>
                  Восстановление
               </h2>
               <p className={styles.reset__subtitle}>
                  Введите телефон и новый пароль придет вам в СМС
               </p>
               <div className={styles.content}>
                  <form
                     action="#"
                     id="reset-form"
                     className={`${styles.form} form`}
                     onSubmit={handleSubmit}>
                     <div className={styles.form__item}>
                        <label
                           className={styles.form__label}
                           htmlFor="reg-link-vk">
                           Ваш телефон
                        </label>
                        <input
                           type="tel"
                           className={`${styles.form__input} ${phoneInputClasses}`}
                           placeholder="+7 (000) 000-00-00"
                           name="link"
                           id="reg-link-vk"
                           value={phone}
                           onFocus={() => setPhoneError(false)}
                           onChange={(e) => setPhone(e.target.value)}
                        />
                        {phoneError ? (
                           <span className="error-message">Номер неверный</span>
                        ) : null}
                     </div>
                  </form>
                  <Button
                     form="reset-form"
                     bgColor={ButtonsBgColor.pink}
                     bgType={ButtonsBgVariants.narrow}
                     tagType={ButtonsTags.submit}
                     className={styles.button}>
                     ПОЛУЧИТЬ ПАРОЛЬ
                  </Button>
                  <div className={styles.toAuth}>
                     <Link to="/auth/login">Вернуться на авторизацию</Link>
                  </div>
               </div>
            </>
         )}
      </div>
   );
};

export default Reset;
