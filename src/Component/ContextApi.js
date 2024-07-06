import React, { createContext,useState } from 'react'
function ContextApi(props) {
    // this is a sign-up usestate
    let[visi,Setvisi]=useState(false);
    let[log,Setlog]=useState(false)
  return (
     <UserContext.Provider value={{visi,Setvisi,log,Setlog}}>
       {props.children}
     </UserContext.Provider>
  )
}

export default ContextApi
export let UserContext=createContext()