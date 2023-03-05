import React from 'react';
import styles from "../components/Logos.module.css";
import apple from "../images/apple.png";
import samsung from "../images/samsung.png";

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who support Us</h3>
            <div>
                <img src={samsung} alt="logo"/>
                <img src={apple} alt="logo"/>

            </div>
            
        </div>
    );
};

export default Logos;