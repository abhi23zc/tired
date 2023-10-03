import React, { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'
import "./Css/Signup.css"



function Login() {

  const [user, setuser] = useState("")
  const [password, setpassword] = useState("")
  const [name, setname] = useState("")

  const navigate  = useNavigate()

  const signin = (e) => {
    e.preventDefault();
    let roomdata = {"roomid":password, "username":user }
    localStorage.setItem('roomdata',
  JSON.stringify(roomdata));
  

    if(!user || !password) {
      alert("! Fill Details First")
    }

    else{
      setTimeout(() => {
        
        navigate("/chat")
      }, 2000);

    }
               
  }

  return (
    <>

      <div class="wrapper">
        <div class="logo mb-5">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrBtXpPLxLdMoIBy5loVZRKzO67nKSSBdv5UCbNjoxdkURk9GNZdOY90VYs3JR4YMDfwE&usqp=CAU" alt="" />
        </div>
    
        <form class="p-3 mt- ">

          <div class="form-field d-flex align-items-center mt-4">
            <span class="far fa-user"></span>
            <input type="text" name="userName" id="userName" placeholder="Nickname" onChange={(e) => {
                            setuser(e.target.value)}} />
          </div>
          <div class="form-field d-flex align-items-center">
            <span class="fas fa-key"></span>
            <input type="text" name="password" id="pwd" placeholder="ROOM ID" onChange={(e) => {
                            setpassword(e.target.value)}} />
          </div>
          <button class="btn mt-3" onClick={(e)=>{
            signin(e);
          }}>Join Room</button>
        </form>
   
      </div>
    </>
  )
}

export {Login}