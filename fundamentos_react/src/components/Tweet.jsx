import styles from './Tweet.module.css';

export default function Tweet(props){
    return(
        <div className={styles.tweetContainer}>
            <img className={styles.avatar} src={'https://github.com/CAFE2l.png'} alt="CAFE"/>
            <div className={styles.user}>
                <span className={styles.userName}>CAFÉ</span>
                <span className={styles.userUserName}>@CAFE2l</span>
                <span className={styles.date}>Há 1 Hora</span>
            </div>
            <div className={styles.tweetText}>
                {props.children}
            </div>
        </div>
    )
}