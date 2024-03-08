import { ReactNode } from "react";

import loaderIcon from "../../../../assets/images/Loader anim.png";

import styles from "./Loader.module.scss";

interface LoaderProps {
   title: string;
   subtitle: ReactNode;
}

const Loader = ({ title, subtitle }: LoaderProps) => {
   return (
      <div className={styles.loader}>
         <img src={loaderIcon} alt="Загрузка" className={styles.loader__img} />
         <h2 className={`${styles.loader__title} title`}>{title}</h2>
         <p className={styles.loader__subtitle}>{subtitle}</p>
      </div>
   );
};

export default Loader;
