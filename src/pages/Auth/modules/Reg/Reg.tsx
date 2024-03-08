import { FormEvent, useState } from "react";
import Select from "../../../../components/UI/Select/Select";

import Button from "../../../../components/UI/Button/Button";
import {
   ButtonsBgColor,
   ButtonsBgVariants,
   ButtonsTags,
} from "../../../../Types/enums";

import styles from "./Reg.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Loader from "../Loader/Loader";

const Reg = () => {
   const [loading, setLoading] = useState(false);

   const [phone, setPhone] = useState("");
   const [phoneError, setPhoneError] = useState(false);

   const [name, setName] = useState("");

   const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
   const [selectError, setIsSelectError] = useState<boolean>(false);

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
      <div className={styles.reg}>
         {loading ? (
            <Loader
               title="регистрация прошла успешно"
               subtitle={
                  <p>
                     Дождитесь перенаправления на страницу авторизации или{" "}
                     <Link to={"/auth/login"}>нажмите здесь</Link>
                  </p>
               }
            />
         ) : (
            <>
               <h2 className={`${styles.reg__title} title`}>Регистрация</h2>
               <div className={styles.content}>
                  <form
                     action="#"
                     id="reg-form"
                     className={`${styles.form} form`}
                     onSubmit={handleSubmit}>
                     <div className={styles.form__item}>
                        <label
                           htmlFor="reg-name"
                           className={styles.form__label}>
                           Ваше имя
                        </label>
                        <input
                           type="text"
                           className={`${styles.form__input} input`}
                           placeholder="Ваше имя"
                           name="name"
                           id="reg-name"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                        />
                     </div>
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
                     <div className={styles.form__item}>
                        <label className={styles.form__label}>
                           В какой роли вы готовы выступить?
                        </label>
                        <Select
                           isError={selectError}
                           isOpen={isSelectOpen}
                           setIsSelectError={setIsSelectError}
                           setIsSelectOpen={setIsSelectOpen}>
                           Выберете из списка
                        </Select>
                     </div>
                  </form>
                  <p className={styles.warning}>
                     Регистрируясь, вы принимаете условия{" "}
                     <a href="#">публичной оферты</a> и даете согласие на
                     обработку <a href="#">персональных данных</a>
                  </p>
                  <Button
                     form="reg-form"
                     bgColor={ButtonsBgColor.pink}
                     bgType={ButtonsBgVariants.narrow}
                     tagType={ButtonsTags.submit}
                     className={styles.button}>
                     ЗАРЕГИСТРИРОВАТЬСЯ
                  </Button>
                  <div className={styles.haveAccount}>
                     <span>Уже есть аккаунт?</span>
                     <Link to="/auth/login">Авторизоваться</Link>
                  </div>
               </div>
            </>
         )}
      </div>
   );
};

export default Reg;
