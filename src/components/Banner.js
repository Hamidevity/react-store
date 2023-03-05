import React from 'react';

import styles from "./Banner.module.css"
import banner from "../images/02.jpg"
const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="banner" />
            <div className={styles.textContainer}>
                <h1>BotoTab</h1>
                <p>
                    we are learning <span>React</span><span className={styles.span1}>.JS</span>
                </p>
            </div>
            
        </div>
    );
};

export default Banner;