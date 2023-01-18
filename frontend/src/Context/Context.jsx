import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'


export const Globalcontext=createContext()

const Globalcontextprovider = ({children}) => {
    const [userdetails,setuserdetails]=useState({})
    const [token,settoken]=useState("sdfdasffdgdbfgggsfdafs")

    const value={userdetails,setuserdetails,token,settoken}

  return (
    <Globalcontext.Provider value={value}>
        {children}
    </Globalcontext.Provider>
  )
}

export default Globalcontextprovider