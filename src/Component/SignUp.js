import React, { useContext, useState } from 'react'
import { UserContext } from './ContextApi'
import axios from 'axios';
function SignUp() {
    const state=useContext(UserContext)
    let {visi,Setvisi}=state
    // console.log(visi,Setvisi);
    function VisibleHidden(){
        console.log("ok");
        Setvisi(!visi)
        
    }
   //  usestate help se input field data store
   let[input,Setinput]=useState({
      firstName:"",
      email:"",
      password:""
   })
   // function write
   function fun1(event){
      let{name,value}=event.target
      // console.log("name and value",name,value);
      Setinput({...input,[name]:value})

   }
   // create button function write
   async function CreateAccount(){
      // console.log("this button",input);
      let response= await axios.post("http://localhost:8000/signupdata",input)
      console.log(response.data);
      if (response.data) {
         alert(response.data)
         
      }
      else if(response.data){
         alert(response.data)
      }
   }
  return (
    <div className={visi?"visible":"invisible"}>
    <div className="flex items-center justify-center mt-[2px] absolute left-[750px] top-4 z-40">
         <div className="bg-white w-[480px] absolute top-[60px] rounded bord border border-black ">
           <div className="flex justify-between mr-4 ml-4 text-[30px]">
              <h1 className="opacity-80">Sign up</h1>
              <div className="cursor-pointer" onClick={VisibleHidden}>&times;</div>
           </div>
            {/* input field start  */}
            <div className="flex flex-col mr-6 ml-6 mt-10">
               <input type='text' placeholder='Full Name'name='firstName' className="bord border border-black p-3 text-2xl rounded text-red-600 outline-none" onChange={fun1} value={input.firstName}></input>
               <input type='text' placeholder='Email' name='email'  className="bord border border-black p-3 mt-6 text-2xl rounded outline-none" onChange={fun1} value={input.email}></input>
               <input type='text' placeholder='Password'name='password'  className="bord border border-black p-3 mt-6 text-2xl rounded outline-none" onChange={fun1} value={input.password}></input>

            </div>
            {/* check box start */}
            <div className="ml-7 mr-7 flex gap-4 mt-8">
                <input type='checkbox'></input>
                <p className="text-[14px]">I agree to Zomato's <span className="text-red-600">Terms of Service, Privacy Policy and</span> <br></br><span className="text-red-600">Content Policies</span></p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[80%] m-auto ml-12 mt-4 text-2xl" onClick={CreateAccount}>Create account</button>
            <div className="flex mt-8 justify-between ml-4 mr-4">
               <div className="bord border border-black w-[48%]"></div>
               <div className="bord border border-black  w-[46%]"></div>
            </div>
           
            <div className="absolute left-[14.5rem] top-[29.6rem]">OR</div>
            <div className="mb-10 mt-6 ml-4">Already have an account? <spn className="text-red-600">Log in</spn></div>
            
         </div>
    </div>

   </div>
  )
}

export default SignUp