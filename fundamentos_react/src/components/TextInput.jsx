import styles from './TextInput.module.css'

export default function TextInput({placeholder="O que está acontecendo",maxLength, ...props}){
    const contador = useState(0);
    const valor = contador[0];
    

    return(
        <div>
            <textarea className={styles.input}placeholder={placeholder} maxLength={maxLength} {...props}/>
            <p>-
            </p>
        </div>
    );
}