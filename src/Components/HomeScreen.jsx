import React, { useEffect, useState, useRef } from 'react'
import { getDatabase, ref, set , push, onValue, get, child} from "firebase/database";
import { app, db, database } from '../config';
import { type } from '@testing-library/user-event/dist/type';
import { query, collection, orderBy, serverTimestamp,onSnapshot, addDoc } from 'firebase/firestore';

function HomeScreen() {

  let textarea = document.getElementById("textarea")

  const [nickname, setnickname] = useState("Anonymous");
  const [roomid, setroomid] = useState("Anonymous");

  let div = document.getElementById('message-container')

  function scrollToBottom() {
    div.scrollTo({
      top: div.scrollHeight,
      behavior: 'smooth'
});

  }

  const [input, setInput] = useState('');

    let msg_data = [];
    const scroll = useRef();
    const [messages, setMessages] = useState('');

    const send_data = async (username, text, roomid) => {
  
      await addDoc(collection(db, roomid), {
          text: text,
          username: nickname,
          timestamp: serverTimestamp()
      })
    }

      // const read_data = () =>{
      //   msg_data = [];
      //   const cartRef = ref(database, 'zrf');
      //   onValue(cartRef, (snapshot) => {
      //     const data = snapshot.val();
      //     if( !!data ) {
      //       for(const key in data){
      //           mymsg.push(data[key]);
      //       }
      //     } else {
      //       console.log('Data not found');
      //     }  
      //   });

      //   setmymsg(mymsg);


      // }

      const EnterPress = (e) => {
        if (e.keyCode == 13 && e.shiftKey == false) {
          e.preventDefault();
          console.log("yeah baby")
          setInput(e.target.value)
        

          send_data(nickname, e.target.value, roomid);
          textarea.value = "";
          scrollToBottom()
        }}

        useEffect(() => {
          let div = document.getElementById('message-container')
          let roomdata = JSON.parse(localStorage.getItem("roomdata"))
          setroomid(roomdata.roomid);
          setnickname(roomdata.username);


          
          

          console.log(roomdata)


            const q = query(collection(db, roomdata.roomid), orderBy('timestamp'));
          
          
          const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
              messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);

            div.scrollTo({ top: div.scrollHeight, behavior: 'smooth'})
          });
          return () => unsubscribe();

        }, []);
        
        

  return (

    <div className="container">

        <div id='message-container'>
            <div className="box">

            <span>E-Chat</span>

            </div>


            <div className="msgbox">
                {

                  <>
                  
                  {console.log(messages)}
                  {
                    messages && messages.map((elem) =>{
                      return(
                          <p key={elem.timestamp}>{elem.text} </p>
                        
                        )
                    }) 
                  }
                  </>

                }
               
            </div>
        
        </div>
        <div className='msginput'>
            
            <textarea id="textarea" placeholder='Type.....' onKeyDown={EnterPress}></textarea>
            

        </div>
    
    </div>

  )
}

export default HomeScreen