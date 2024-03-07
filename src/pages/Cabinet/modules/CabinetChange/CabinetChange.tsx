import { ChangeEvent, FormEvent, useState } from "react";

import { ButtonsbgColor, TitleVariants } from "../../../../Types/enums";
import { ButtonsTags } from "../../../../Types/enums";
import { roles } from "../../../../utils/roles";

import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Button from "../../../../components/UI/Button/Button";
import Title from "../../../../components/UI/Title/Title";

import SelectArrow from "../../../../assets/icons/decor/selectArrow";

import styles from "./CabinetChange.module.scss";

const CabinetChange = () => {
   const [selectValue, setSelectvalue] = useState("");
   const [name, setName] = useState("");
   const [link, setLink] = useState("");

   const handleSelect = (e: SelectChangeEvent) => {
      setSelectvalue(e.target.value);
   };

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
               <label htmlFor="name">Ваше имя</label>
               <input
                  type="text"
                  className={`${styles.cabinet__formInput} input`}
                  placeholder="Ваше имя"
                  name="Имя фамилия"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
            </div>
            <div className={styles.cabinet__formItem}>
               <label htmlFor="link-vk">Ссылка на Вконтакте</label>
               <input
                  type="text"
                  className={`${styles.cabinet__formInput} input`}
                  placeholder="Ссылка на Вконтакте"
                  name="link"
                  id="link-vk"
                  value={link}
                  onChange={handleLinkChange}
               />
            </div>
         </form>
         <Button
            className={styles.cabinet__formSubmit}
            to="/"
            bgColor={ButtonsbgColor.green}
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
