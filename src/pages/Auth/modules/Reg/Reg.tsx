import { ChangeEvent, FormEvent, useState } from "react";
import Select from "../../../../components/UI/Select/Select";

import Button from "../../../../components/UI/Button/Button";
import { ButtonsBgColor, ButtonsBgVariants } from "../../../../Types/enums";

import styles from "./Reg.module.scss";
import { Link } from "react-router-dom";

const Reg = () => {
   const [name, setName] = useState("");
   const [link, setLink] = useState("");
   const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

   const handleLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;
      if (value !== "") {
         if (!value.startsWith("https://")) {
            value = "https://" + value;
         }
         setLink(value);
      }
   };

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
   };
   return (
      <div className={styles.reg}>
         <h2 className={`${styles.reg__title} title`}>Регистрация</h2>
         <form
            action="#"
            id="reg-form"
            className={`${styles.form} form`}
            onSubmit={handleSubmit}>
            <div className={styles.form__item}>
               <label htmlFor="reg-name" className={styles.form__label}>
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
               <label className={styles.form__label} htmlFor="reg-link-vk">
                  Ссылка на Вконтакте
               </label>
               <input
                  type="text"
                  className={`${styles.form__input} input`}
                  placeholder="Ссылка на Вконтакте"
                  name="link"
                  id="reg-link-vk"
                  value={link}
                  onChange={handleLinkChange}
               />
            </div>
            <div className={styles.form__item}>
               <label className={styles.form__label}>
                  В какой роли вы готовы выступить?
               </label>
               <Select isOpen={isSelectOpen} setIsSelectOpen={setIsSelectOpen}>
                  Выберете из списка
               </Select>
            </div>
         </form>
         <p className={styles.warning}>
            Регистрируясь, вы принимаете условия{" "}
            <a href="#">публичной оферты</a> и даете согласие на обработку{" "}
            <a href="#">персональных данных</a>
         </p>
         <Button
            to="/"
            bgColor={ButtonsBgColor.pink}
            bgType={ButtonsBgVariants.narrow}
            className={styles.button}>
            ЗАРЕГИСТРИРОВАТЬСЯ
         </Button>
         <div className={styles.haveAccount}>
            <span>Уже есть аккаунт?</span>
            <Link to="/auth">Авторизоваться</Link>
         </div>
      </div>
   );
};

export default Reg;
