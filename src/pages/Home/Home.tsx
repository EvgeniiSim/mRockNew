import { Link } from "react-router-dom";

const Home = () => {
   return (
      <>
         <Link
            style={{
               display: "block",
               fontSize: "30px",
               color: "#000",
               marginTop: "100px",
               textAlign: "center",
            }}
            to={"cabinet"}>
            Ссылка в личный кабинет
         </Link>
         <Link
            style={{
               display: "block",
               fontSize: "30px",
               color: "#000",
               marginTop: "100px",
               textAlign: "center",
            }}
            to={"auth/reg"}>
            Ссылка на регестрацию
         </Link>
      </>
   );
};

export default Home;
