import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './riphahdesign.css';
import gptlogo from './assets/send.svg';
import usericon from './assets/usericon.png';
import gptimglogo from './assets/logo.svg';
import LoadingIndicator from './LoadingIndicator'; // Import your loading indicator component
import { addNewLine } from '../components/utils/utils';

const AskQuestionriphah = () => {
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
      const response = await axios.post('http://127.0.0.1:8000/askriphah', { question });
      const botChat = { type: 'riphahone', message: response.data.response };
      setChats((prevChats) => [...prevChats, userChat, botChat]);
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
    <div className="main" id = "riphahzohaib">
      <div className="chats">
        {chats.map((chat, index) => (
          <div key={index} className={`chat ${chat.type}`}>
            <img src={chat.type === 'user' ? usericon : gptimglogo} alt="" />
            <h3 className='txt'>{addNewLine(chat.message)}</h3>
          </div>
        ))}
        <div ref={chatsEndRef} />
      </div>
      <div className='chatfooter' id = "riphahhuzaifa">
        <div className="inp" id ="riphahsaad">
          <input type="text" placeholder="Ask About Riphah" value={question} onChange={handleInputChange} disabled={isLoading}/>
          <button className='send' onClick={handleSubmit} disabled={isLoading}>
            <img src={gptlogo} alt="" />
          </button>
          <LoadingIndicator visible={isLoading} /> {/* Display loading indicator */}
        </div>
      </div>
    </div>
  );
};

export default AskQuestionriphah;
