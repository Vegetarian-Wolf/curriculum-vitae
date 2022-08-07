import React from 'react';
import styles from '../styles/Profile.module.css';
import { BiLaugh } from "react-icons/bi";


import { useTranslation } from "react-i18next";

export const Profile = () => {
    const { t } = useTranslation(["profile"]);

    return (
        <div className={styles.body__profile}>
            <div className={styles.container__profile}>
                <div className={styles.front__side}>
                    <div className={styles.content}>
                        <h1 className={styles.content__h1}>
                            {t("about_myself")}
                        </h1>
                        <h2 className={styles.content__h2}>
                            {t("myself_1")} 
                        </h2>
                        <h2 className={styles.content__h2}>
                            {t("myself_2")} <BiLaugh />
                        </h2>
                    </div>
                </div>
                <div className={styles.back__side}>
                    <div className={styles.content}>
                        <h1 className={styles.content__h1}>
                            {t("about_love")}
                        </h1>
                        <h2 className={styles.content__h2}>
                            {t("love_1")}
                        </h2>
                        <h2 className={styles.content__h2}>
                            {t("love_2")}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
