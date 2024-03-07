import { ReactNode } from "react";
import { TitleVariants } from "../../../Types/enums";

interface TitleProps {
   children: ReactNode;
   variant: TitleVariants.h1 | TitleVariants.h2 | TitleVariants.h3;
   className: string | undefined;
}

const Title = ({ children, variant, className }: TitleProps) => {
   let content;

   if (variant === TitleVariants.h1) {
      content = (
         <h1 className={`title ${className ? className : ""}`}>{children}</h1>
      );
   } else if (variant === TitleVariants.h2) {
      content = (
         <h2 className={`title ${className ? className : ""}`}>{children}</h2>
      );
   } else if (variant === TitleVariants.h3) {
      content = (
         <h3 className={`title ${className ? className : ""}`}>{children}</h3>
      );
   }

   return content;
};

export default Title;
