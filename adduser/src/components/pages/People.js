import { Fragment } from "react";
import { useQuery } from "react-query";
import { getPeople } from "../API/get-datas";
import classes from "./Planets.module.css";
function People() {
  const { data, isLoading ,status,isError,isFetching} = useQuery("people", getPeople,{retry:false, /*cacheTime:1000 kewden silme vaxti(default 5 minute)*/});
  if(isLoading){
      return 'Loading...'
  }
  if(isError){
      return 'isError'
  }
  return (
    <Fragment>
        {isLoading&&<p>is loading</p>}
        {isFetching&&<p>background is refetching</p>}
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
    </Fragment>
  );
}

export default People;
