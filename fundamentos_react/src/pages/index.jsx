import TextInput from "../components/TextInput";
import { useState } from "react";
import Tweet from "../components/Tweet";
export default function Index(){
    const [text, setText] = useState('');
    const [tweetList, setTweetList] = useState([]);
    const maxLength = 125;

    function onTextChange(event){
        const text = event.target.value;
        if(text.length <= maxLength){
            setText(text);
        }
    }

    function sendTweet(){
        if(text.trim()) {
            setTweetList([text, ...tweetList]);
            setText('');
        }
    }
  
    return (
        <div>
            <div>
                <h1>TreinaTweet</h1>
                <img src={'https://github.com/CAFE2l.png'} alt=""/>
                <TextInput 
                    placeholder={"O que está acontecendo?"}
                    maxLength={maxLength}
                    value={text}
                    onChange={onTextChange}
                />
                <p>{text.length}/{maxLength}</p>
                <button onClick={sendTweet}>Tweetar</button>
            </div>
            <ul> 
            {tweetList.map((tweet, index) => {
                 return (
                <li key={index}>
                    <Tweet>{tweet}</Tweet>
                </li>
            )
        })}
            </ul>
        </div>
    );
}