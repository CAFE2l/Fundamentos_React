import { useState } from 'react';

export function useIndex(){
     const [text, setText] = useState('');
        const [tweetList, setTweetList] = useState([]);
        const maxLength = 125;
    
        const tweet = {
            date: new Date(),
            text: text,
            user:{
                name: 'CAFÉ',
                username: 'CAFE2l',
                picture: 'https://github.com/CAFE2l.png'
            }
        }
    
        function onTextChange(event){
            const text = event.target.value;
            if(text.length <= maxLength){
                setText(text);
            }
        }
    
        function sendTweet(){
            if(text.trim()) {
                setTweetList([tweet, ...tweetList]);
                setText('');
            }
        }

        return {
            text,
            onTextChange,
            maxLength,
            sendTweet,
            tweetList
        }
}