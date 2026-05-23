import styles from "./Button.module.css";
// learn how to use styles to build button, no worry naming conflict

function Button() {

    const param_styles = {
        backgroundColor: "hsl(149, 81.70%, 44.90%)",
        color: "Black",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",    
    };

    return(
        //<button className={styles.button}>Click Me</button>
        <button style={param_styles}>Click Me</button>
    )

}


export default Button;