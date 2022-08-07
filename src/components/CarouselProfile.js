import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../styles/Carousel.module.css';

import { useTranslation } from "react-i18next";

const CarouselProfile = () => {

    const { t } = useTranslation(["carousel"]);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className={styles.images__carousel}
                    src="./images/carousel-1-5-4.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <p> {t("text_car_1")} </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className={styles.images__carousel}
                    src="./images/carousel-2-5-4.png"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <p> {t("text_car_2")} </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className={styles.images__carousel}
                    src="./images/carousel-3-5-4.png"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <p> {t("text_car_3")} </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className={styles.images__carousel}
                    src="./images/carousel-4-5-4.png"
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <p> {t("text_car_4")} </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselProfile