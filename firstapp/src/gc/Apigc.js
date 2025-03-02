import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './assets/gcdata.css';
import gptlogo from './assets/send.svg';
import usericon from './assets/usericon.png';
import gptimglogo from './assets/logo.svg';
import LoadingIndicator from './LoadingIndicator'; // Import your loading indicator component
import { addNewLine } from '../components/utils/utils';

const Apigc = () => {
  const [question, setQuestion] = useState('');
  const [chats, setChats] = useState([]);
  const chatsEndRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false); // State for processing indicator

  const handleInputChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async () => {
    if (question.trim() === '') return;

    setIsLoading(true); // Show processing indicator before sending request


    const userChat = { type: 'user', message: question };
    setChats((prevChats) => [...prevChats, userChat]);

    try {
      const response = await axios.post('http://127.0.0.1:8000/askgc', { question });
      const botChat = { type: 'bot', message: response.data.response };
      setChats((prevChats) => [...prevChats, botChat]);
      setQuestion('');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // Hide processing indicator after response or error
    }
  };

  const scrollToBottom = () => {
    chatsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  return (
    <div className="main" id = "gcmain">
      <div className="chats" id = "salman">
        {chats.map((chat, index) => (
          <div key={index} className={`chat ${chat.type}`} >
            <img src={chat.type === 'user' ? usericon : gptimglogo} alt="" />
            <h4 className='txt'>{addNewLine(chat.message)}</h4>
          </div>
        ))}
        <div ref={chatsEndRef} />
      </div>
      <div className='chatfooter' id = "umair">
        <div className="inp" id = "abubakar">
          <input type="text" placeholder="Ask About GC University" value={question} onChange={handleInputChange} disabled={isLoading}/>
          <button className='send' onClick={handleSubmit} disabled={isLoading}>
            <img src={gptlogo} alt="" />
          </button>
          <LoadingIndicator visible={isLoading} /> {/* Display loading indicator */}
        </div>
      </div>
    </div>
  );
};

export default Apigc;
