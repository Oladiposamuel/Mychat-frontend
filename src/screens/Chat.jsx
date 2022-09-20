import React, { useState, useNavigate } from 'react';
import axios from 'axios';
import { io } from "socket.io-client";
import { useEffect } from 'react';
import { useRef } from 'react';

const socket = io('http://localhost:8080', {} );

const Chat = () => {

  const [receivedMsg, setReceivedMsg] = useState();

  const [displayMsg, setDisplayMsg] = useState([]);

  const [msgSender, setMsgSender] = useState(false);

  const[data, setData] = useState({ 
        message: '',
        user: '',
        socketId: '',
  })

  const messageRef = useRef();

  const fieldText = useRef();

  const handleChange = (e) => {

    setData({...data, [e.target.name]: e.target.value});
    console.log(data);
  
  }

  const sendMessage = (e) => {

    e.preventDefault();
        
    socket.emit('sendMessage', data);

    console.log(receivedMsg);

    setReceivedMsg(undefined);

    fieldText.current.value = '';
  }


  socket.on('message', (data) => {

    const serverSocketId = data.socketId;
    console.log('socketId from backend ' + serverSocketId);

    localStorage.setItem('socketId', socket.id);

    console.log(socket.id);

    const msg = data.message;

    const user = data.user;

    setReceivedMsg({msg, user, serverSocketId});

    setMsgSender(serverSocketId);

  })

  console.log(msgSender);
  console.log(receivedMsg);

  const socketId = localStorage.getItem('socketId');

  useEffect(() => {

    if(receivedMsg !== undefined){
      if(receivedMsg.serverSocketId === socketId) {
        setMsgSender(true);
      } else {
        setMsgSender(false);
      }
    }
  }, [receivedMsg]);


  useEffect(() => {

    if (receivedMsg === undefined | null) {
      return;
    } else {
      setDisplayMsg(x => [...x, receivedMsg]);
      
    }

    console.log(displayMsg);
    
  }, [receivedMsg]);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView(
        {
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest'
        })
    }
  })

  // if (i + 1 === row.length) {
  //   // Last one.
  // }


  return (
    <div className='chat'>

      <div className={`chat-messages`}>
        <ul>
          {displayMsg.map((lastMsg, i, displayMsg) => {
            if( i + 1 === displayMsg.length ) {
              return <div key={Math.random()} className={ ` ${msgSender ? `chat-messages__coverdiv`: `chat-messages__coverdiv-others`}`} ref={messageRef} >
                <div className={ `chat-messages__div`}>
                  <span className= { `${msgSender ? `chat-messages__div__username` : `chat-messages__div__username-others` }` }>{lastMsg.user}</span>
                  <li className='chat-messages__div__message'>{lastMsg.msg}</li>
                </div>
              </div>
            } else {
              return <div key={Math.random()} className= { ` ${displayMsg[i].serverSocketId === socketId ? `chat-messages__coverdiv`: `chat-messages__coverdiv-others`}` } >
                <div className='chat-messages__div'>
                  <span className= { `${ displayMsg[i].serverSocketId === socketId ? `chat-messages__div__username` : `chat-messages__div__username-others` }` }>{lastMsg.user}</span>
                  <li className='chat-messages__div__message'>{lastMsg.msg}</li>
                </div>
              </div>
            }
          })}
        
        </ul>
      </div>
       
      <form className='chat-form' onSubmit={sendMessage}>
          <input className='chat-form__input' type = "text" name="message" onChange={handleChange} ref = {fieldText} />
          <input className='chat-form__button' type="submit" value="Send" />
      </form>

    </div>
  )
}

export default Chat