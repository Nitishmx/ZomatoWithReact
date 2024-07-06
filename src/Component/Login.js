import React, { useCallback, useContext, useState } from "react";
import { UserContext } from "./ContextApi";
import axios from "axios";
function Login() {
  let logi = useContext(UserContext);
  let { log, Setlog } = logi;
  // console.log(login,Setlogin)
  function VisibleHidden() {
    Setlog(!log);
    console.log(log);
  }
  // usestate help se login form data collect
  let [data,Setdata]=useState({
    email:"",
    password:""
  })
  // input field data store using function
  function inputFieldDataChange(event){
    let{name,value}=event.target
    Setdata({...data,[name]:value})
  }
  // login button create 
  async function LoginButton(){
    console.log("login all data store",data);
    let response=await axios.post("http://localhost:8000/login",data)
    console.log("login data................",response.data);
    // console.log("respo.............data",response.data);
    if (response.data) { 
      alert(response.data)
      
     }
     else if(response.data="invalid password"){

       alert(response.data)
     }
    
    

  }
  return (
    <div className={log ? "visible" : "invisible"}>
      <div className="flex items-center justify-center mt-[2px] absolute left-[800px] top-4 z-40">
        <div className="bg-white w-[480px] absolute top-[60px] rounded bord border border-black ">
          <div className="flex justify-between mr-4 ml-4 text-[30px]">
            <h1 className="opacity-80">Login</h1>
            <div className="cursor-pointer" onClick={VisibleHidden}>
              &times;
            </div>
          </div>
          <div className="flex flex-col mr-6 ml-6 mt-10">
            <input
              type="text"
              placeholder="Enter email"
              name="email"
              value={data.email}
              onChange={inputFieldDataChange}
              className="bord border border-black p-2 text-2xl rounded text-red-600 outline-none overflow-y-hidden"
            ></input>
               <input
              type="password"
              placeholder="Enter the password"
              name="password"
              value={data.password}
              onChange={inputFieldDataChange}
              className="bord border border-black p-2 text-2xl rounded text-red-600 outline-none overflow-y-hidden mt-4"
            ></input>
          </div>{" "}
          <button onClick={LoginButton} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-[80%] m-auto ml-12 mt-10 text-2xl">
            {/* Send One Time Password */}
            Login 
          </button>
          <div className="flex mt-8 justify-between ml-4 mr-4">
            {" "}
            <div className="bord border border-black w-[48%]"></div>{" "}
            <div className="bord border border-black  w-[46%]"></div>{" "}
          </div>{" "}
          <div className="absolute left-[14.5rem] top-[19.8rem]">OR</div>{" "}
          <button className=" bg-slate-600 text-white font-bold py-2 px-4 rounded w-[80%] m-auto ml-12 mt-10 text-2xl">
            Continue with Email
          </button>
          <div className="bord border border-gray-400 mt-16 w-[80%] m-auto"></div>
          <p className="ml-8 mt-6 mb-6">
            New to Zomato?<span className="text-red-400">Create account</span>
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default Login;
