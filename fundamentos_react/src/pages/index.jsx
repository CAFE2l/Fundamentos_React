import TextInput from "../components/TextInput";
import { useState } from "react";
import Tweet from "../components/Tweet";
import styles from "./Index.module.css";
import { useIndex } from "../hooks/useIndex.page.js";
export default function Index(){
   const{
    text,
    onTextChange,
    maxLength,
    sendTweet,
    tweetList   
} = useIndex();
  
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
                <button onClick={sendTweet}
                className={styles.postButton}>
                    Tweetar
                </button>
            </div>
            <ul className={styles.tweetList}> 
            {tweetList.map((tweet, index) => {
                 return (
                <li key={index} className={styles.tweetItem}>
                    <Tweet tweet={tweet} />
                </li>
            )
        })}
            </ul>
        </div>
    );
}