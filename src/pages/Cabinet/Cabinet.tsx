import background from "../../assets/images/cabinet/bg.png";

import { Outlet } from "react-router-dom";

import styles from "./Cabinet.module.scss";

const Cabinet = () => {
   return (
      <div className={styles.cabinet}>
         <div className="container">
            <Outlet />
         </div>
         <img src={background} className={styles.cabinet__background}></img>
      </div>
   );
};

export default Cabinet;

{
   /* <form
                     action="#"
                     className={styles.cabinet__form}
                     onSubmit={handleSubmit}>
                     <input
                        type="text"
                        className={`${styles.cabinet__formInput} input`}
                        placeholder="Имя Фамилия"
                        name="Имя фамилия"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                     />
                     <Select
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
                     </Select>
                     <input
                        type="text"
                        className={`${styles.cabinet__formInput} input`}
                        placeholder="Ссылка вк"
                        name="Ссылка вк"
                        value={link}
                        onChange={handleLinkChange}
                     />

                     <Button
                        className={styles.cabinet__formSubmit}
                        to="/"
                        bgColor="rgba(195, 245, 152, 1)"
                        bgType={ButtonsBgVariants.narrow}
                        tagType={ButtonsTags.submit}>
                        Редактировать
                     </Button>
                  </form> */
}
