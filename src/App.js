import './App.css';
import TextInput from "./TextInput";
import {useState} from 'react'

function App() {
  const [messages, setMessages] = useState([{text:"hello"}])

  return (
    <div className="app">
      <header className = "header">
        <div className = "logo"></div>
        CHATTER
      </header>
      
      <div className = "message">
        {messages[0].text}
      </div>

      <TextInput 
        send = {
          t=> setMessages([{text:t}])
        }
      />
    </div>
  );
}

export default App;
