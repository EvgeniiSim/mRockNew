import { ChangeEvent, FormEvent, useState } from "react";

import { ButtonsBgColor, TitleVariants } from "../../../../Types/enums";
import { ButtonsTags } from "../../../../Types/enums";

import Button from "../../../../components/UI/Button/Button";
import Title from "../../../../components/UI/Title/Title";

import fileIcon from "../../../../assets/icons/fileInput/file.svg";

import styles from "./CabinetChange.module.scss";
import Select from "../../../../components/UI/Select/Select";
import classNames from "classnames";

const CabinetChange = () => {
   const [name, setName] = useState("");

   const [link, setLink] = useState("");
   const [linkError, setLinkError] = useState(false);

   const [file, setFile] = useState<string | null>(null);

   const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

   ///// Определяем стили "error" если имееются ошибке в форме
   const linkInputClasses = classNames({
      input: true,
      _error: linkError,
   });

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

   const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.files && e.currentTarget.files.length > 0) {
         const files = e.currentTarget.files;
         setFile(files[0].name);
      }
   };

   return (
      <div className={styles.cabinet__inner}>
         <Title className={styles.cabinet__title} variant={TitleVariants.h1}>
            Редактирование
         </Title>
         <form
            action="#"
            id="changeForm"
            className={`${styles.cabinet__form} form`}
            onSubmit={handleSubmit}>
            <div className={styles.cabinet__formItem}>
               <label htmlFor="name" className={styles.cabinet__formLabel}>
                  Ваше имя
               </label>
               <input
                  type="text"
                  className={`${styles.cabinet__formInput} input`}
                  placeholder="Ваше имя"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
            </div>
            <div className={styles.cabinet__formItem}>
               <label className={styles.cabinet__formLabel}>
                  Какой у вас инструмент
               </label>
               <Select isOpen={isSelectOpen} setIsSelectOpen={setIsSelectOpen}>
                  Выберите
               </Select>
            </div>
            <div className={styles.cabinet__formItem}>
               <label className={styles.cabinet__formLabel} htmlFor="link-vk">
                  Ссылка на Вконтакте
               </label>
               <input
                  type="text"
                  className={`${styles.cabinet__formInput} ${linkInputClasses}`}
                  placeholder="Ссылка на Вконтакте"
                  name="link"
                  id="link-vk"
                  value={link}
                  onFocus={() => setLinkError(false)}
                  onChange={handleLinkChange}
               />
               {linkError ? (
                  <span className="error-message">Сслыка неверная</span>
               ) : null}
            </div>
            <div className={styles.cabinet__formItem}>
               <label htmlFor="file" className={styles.cabinet__formLabel}>
                  Фотография
               </label>
               <label htmlFor="file" className={styles.cabinet__fileLabel}>
                  <span>{file ? file : "Файл"}</span>
                  <img src={fileIcon} alt="Загрузить файл" />
               </label>
               <input
                  type="file"
                  style={{
                     position: "absolute",
                     left: "0",
                     top: "0",
                     width: "0px",
                     height: "0px",
                     border: "none",
                     padding: "0",
                     minHeight: "0",
                     opacity: "0",
                     visibility: "hidden",
                  }}
                  placeholder="Файл"
                  name="file"
                  id="file"
                  onChange={handleFile}
               />
            </div>
         </form>
         <Button
            className={styles.cabinet__formSubmit}
            to="/"
            bgColor={ButtonsBgColor.green}
            form="changeForm"
            tagType={ButtonsTags.submit}>
            Обновить
         </Button>
      </div>
   );
};

export default CabinetChange;

{
   /* <Select
               className={`select ${styles.cabinet__formSelect}`}
               labelId="select-role-lk"
               value={selectValue}
               label="Роль"
               displayEmpty
               onChange={handleSelect}
               renderValue={(selected) => {
                  if (selected.length === 0) {
                     return (
                        <span
                           style={{
                              opacity: "0.5",
                           }}>
                           Выбирите роль
                        </span>
                     );
                  } else {
                     return selected;
                  }
               }}>
               <MenuItem disabled selected value="Выбирите роль">
                  Выбирите роль
               </MenuItem>
               {roles.map((role) => (
                  <MenuItem key={role} value={role}>
                     {role}
                  </MenuItem>
               ))}
            </Select> */
}
