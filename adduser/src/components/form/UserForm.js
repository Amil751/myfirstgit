import classes from "./UserForm.module.css";
import {  useMutation, useQueryClient } from "react-query";
import { senddata } from "../API/get-datas";
import { useRef, useState, useEffect } from "react";

function UserForm() {
  const [user, setUser] = useState('');
  const nameRef = useRef();
  const ageRef = useRef();
  const queryClient=useQueryClient();
  const { isLoading, mutate } = useMutation(senddata,{
    onSuccess:()=>{
      queryClient.invalidateQueries(senddata)
    }
  });
  
  const submitHandler = (e) => {
    e.preventDefault();

    setUser({ name: nameRef.current.value, age: ageRef.current.value });
   
     mutate(user);
    
  };
  
  console.log(user);
  return (
    <form className={classes.formwrapper} onSubmit={submitHandler}>
      <div className={classes.form}>
        <div className={classes.inputs}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" ref={nameRef} required/>
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" ref={ageRef} required/>
          </div>
        </div>
        <div className={classes.button}>
          <button type="submit"> Add user</button>
        </div>
      </div>
    </form>
  );
}

export default UserForm;
