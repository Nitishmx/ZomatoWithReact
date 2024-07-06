import React, { useContext } from 'react'
import NavThem from './NavThem'
import { UserContext } from './ContextApi'
import { Link } from 'react-router-dom'
function NavBar() {
  let x=useContext(UserContext)
  let{visi,Setvisi}=x
  function VisibleHidden(){
    Setvisi(!visi)
    Setlog(false)

  }
  let{log,Setlog}=x
  function LoginHidden(){
    Setlog(!log)
    Setvisi(false)
    console.log("hye");
    
  }
  return (
    <div className="relative">
    <img src='https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png' className="w-full h-[420px]"></img>
    <ul className=" w-full absolute top-0 text-white flex justify-between mt-4 text-[20px]">
      <div className="ml-[200px] cursor-pointer">
     <li>Get the App</li>
      </div>
      <div className="flex mr-[200px] gap-[40px] cursor-pointer">
        <li>Investor</li>
        <Link to="/resto"><p>Add restaurant</p></Link>
        
        <li onClick={LoginHidden}>Log in</li>
        <li className="cursor-pointer" onClick={VisibleHidden}>Sign up</li>
      </div>
    </ul>
     <div className="absolute top-0">
      <NavThem/>
     </div>
    
   </div>
  )
}

export default NavBar