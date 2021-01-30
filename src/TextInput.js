import {useState} from 'react'

function TextInput(props){
    const [text, setText] = useState('') //'' is initial value

    function sendMessage() {
        if(text !== '') {
            props.send(text)
            setText("")
        }
    }

    function keyPressed(e) { //e is an Event object
        if(e.key === "Enter") {
            sendMessage()
        }
    }

    return <footer className="text-input">
        <input 
            placeholder = "Write your message..."
            value = {text} //curly braces = variable
            onChange = {e=> setText(e.target.value)}
            onKeyPress = {keyPressed}
        />
        <button onClick={sendMessage} disabled = {!text}>^</button>
    </footer>
}


export default TextInput