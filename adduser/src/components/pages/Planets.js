import { getPlanets } from "../API/get-datas";
import { useQuery } from "react-query";
import classes from "./Planets.module.css";

function Planets() {

  const { data, status } = useQuery("planets", getPlanets);

  return (
    <ul className={classes.main_list}>
      {status === "success" &&
        data.map((item) => {
          return (
            <ul className={classes.list} key={item.name}>
              <li>Name of Planet :{item.name}</li>
              <li>Gravitasiya : {item.gravity}</li>
              <li>Orpital period : {item.orbital_period}</li>
            </ul>
          );
        })}
    </ul>
  );
}

export default Planets;
