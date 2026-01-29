import { useState } from 'react';
import styles from './TextInput.module.css'

export default function TextInput({placeholder="O que está acontecendo",maxLength, ...props}){
    const [text,setText] = useState('');

    function onTextChange(event){
        const text = event.target.value;
        if(text.length <= maxLength){
            setText(text);
        }
    }
    console.log(inputElement.current.defaultValue);
    return(
        <div>
            <textarea 
   
            className={styles.textInput} 
            placeholder={placeholder} 
            value={text} 
            onChange={onTextChange}
            {...props}/>
           <p>{text.length}/{maxLength}</p>
           <button onClick={() => {console.log(inputElement.current.value)}}>Teste</button>
        </div>
    );
}
