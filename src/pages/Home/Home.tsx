import { Link } from "react-router-dom";

const Home = () => {
   return (
      <Link
         style={{
            display: "block",
            fontSize: "30px",
            color: "#000",
            marginTop: "200px",
            textAlign: "center",
         }}
         to={"cabinet"}>
         Ссылка в личный кабинет
      </Link>
   );
};

export default Home;
