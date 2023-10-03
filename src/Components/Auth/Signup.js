import React, { useEffect, useState } from 'react'
import "./Css/Signup.css"
import Nav from '../Navabr/Nav'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../config'
import {createUserWithEmailAndPassword} from '@firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {

    const [user, setuser] = useState("")
    const [password, setpassword] = useState("")
    const [name, setname] = useState("")
    const navigate  = useNavigate()


    useEffect(() => {

        const myuid = localStorage.getItem('uid');
        if(!myuid){
          console.log("login failed")
          
          navigate("/signup")
          
          
        }
        else{
          navigate("/")
          console.log(myuid)
          
        }
      }, [])

    const signup = (e) => {
        e.preventDefault()
        console.log(user, name, password)
        
        createUserWithEmailAndPassword(auth, user, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                alert("User signed up successfully")
                navigate("/")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }


    return (
        <>
            <Nav login={true} signup={true} />

            <div class="wrapper">
                <div class="logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrBtXpPLxLdMoIBy5loVZRKzO67nKSSBdv5UCbNjoxdkURk9GNZdOY90VYs3JR4YMDfwE&usqp=CAU" alt="" />
                </div>
                <div class="text-center mt-4 name">
                    Signup
                </div>
                <form class="p-3 mt-3">
                    <div class="form-field d-flex align-items-center">
                        <span class="far fa-user"></span>
                        <input type="text" name="name" id="userName" onChange={(e) => {
                            setname(e.target.value)
                        }} placeholder="Name" />
                    </div>
                    <div class="form-field d-flex align-items-center">
                        <span class="far fa-user"></span>
                        <input type="text" name="userName" onChange={(e) => {
                            setuser(e.target.value)
                        }} id="userName" placeholder="Email" />
                    </div>
                    <div class="form-field d-flex align-items-center">
                        <span class="fas fa-key"></span>
                        <input type="password" name="password" onChange={(e) => {
                            setpassword(e.target.value)
                        }} id="pwd" placeholder="Password" />
                    </div>
                    <button class="btn mt-3" onClick={(e) => {
                        signup(e);
                    }}>SignUp</button>
                </form>
                <div class="text-center fs-6">
                    <a href="#">Forget password?</a> or <Link to="/login">Login</Link>
                </div>
            </div>
        </>
    )
}

export default Signup