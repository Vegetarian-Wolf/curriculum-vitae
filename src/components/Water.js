import React from 'react';
import styles from '../styles/Water.module.css';
import { useTranslation } from "react-i18next";
const Water = () => {
    const { t } = useTranslation(["home"]);
    return (
        <section id="water" className={styles.home}>
            <div className={styles.scrolling}>
                <h2 className={styles.text__scrolling}> {t("dev")} </h2>
            </div>
            <marquee direction="down"
                width="50%"
                height="100%"
                behavior="alternate"> {t("vegetarian-wolf")}
            </marquee>
        </section>
    )
}

export default Water;