import styles from "./Button.module.css";
// learn how to use styles to build button, no worry naming conflict

function Button() {

    return(
        <button className={styles.button}>Click Me</button>
    )

}


export default Button;