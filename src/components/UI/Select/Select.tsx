import { Dispatch, SetStateAction, useState } from "react";
import arrow from "../../../assets/icons/select/arrow.svg";

import styles from "./Select.module.scss";
import classNames from "classnames/bind.js";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

interface SelectProps {
   children: string;
   isOpen: boolean;
   setIsSelectOpen: Dispatch<SetStateAction<boolean>>;
}

const data = ["Вокалист", "Клавишные", "Барабаны", "Гитарист"];

const Select = ({ children, isOpen, setIsSelectOpen }: SelectProps) => {
   const [selectedValue, setSelectedValue] = useState<string | null>(null);
   const selectRef = useOutsideClick(() => setIsSelectOpen(false));

   ///// Определяем и классы интерактива
   let cx = classNames.bind(styles);
   const arrowClasses = cx({
      select__arrow: true,
      select__arrow_active: isOpen,
   });

   const selectClasses = cx({
      select: true,
      select_active: isOpen,
   });

   return (
      <div className={styles.selectWrap}>
         <div className={selectClasses} ref={selectRef}>
            <div
               className={styles.select__header}
               onClick={() => setIsSelectOpen((prev) => !prev)}>
               <span>{selectedValue ? selectedValue : children}</span>
               <img
                  src={arrow}
                  alt="Выберите инструмент"
                  className={arrowClasses}
               />
            </div>
            <div
               className={`${styles.listWrap} ${
                  isOpen ? styles.listWrap_active : null
               }`}>
               <ul className={styles.list}>
                  {data.map((item) => (
                     <li
                        key={item}
                        className={styles.list__item}
                        onClick={() => {
                           if (
                              item.toLocaleLowerCase() !==
                              selectedValue?.toLocaleLowerCase()
                           ) {
                              setSelectedValue(item);
                           }
                        }}>
                        {item}
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Select;
