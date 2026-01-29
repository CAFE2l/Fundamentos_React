import styles from './Tweet.module.css';

export default function Tweet({tweet}){
    return(
        <div className={styles.tweetContainer}>
            <img className={styles.avatar} src={tweet.user.picture} alt="CAFE"/>
            <div className={styles.user}>
                <span className={styles.userName}>{tweet.user.name}</span>
                <span className={styles.userUserName}>@{tweet.user.username}</span>
                <span className={styles.date}>Há 1 Hora</span>
            </div>
            <div className={styles.tweetText}>
                {tweet.text}
            </div>
        </div>
    )
}