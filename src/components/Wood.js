import React from 'react';
import styles from '../styles/Wood.module.css';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import CarouselProfile from './CarouselProfile';

const Wood = () => {
    const { t } = useTranslation(["home"]);
    return (
        <section id="wood" className={styles.home}>
            <Container className={styles.profile__box}>
                <Row>
                    <Col md={4}>
                        <h1 className={styles.profile__text__h1}> {t("h1_title")} </h1>
                        <p> {t("p_intro")} </p>
                        <p className={styles.last__text}> {t("p_relationship")} </p>
                        <Link to="profile" className="text-success">
                            <Button
                                className={styles.button__next__profile}
                                variant="outline-success"
                                size="lg"> {t("button_profile")}
                            </Button>
                        </Link>
                    </Col>

                    <Col md={{ span: 7, offset: 1 }} className={styles.carousel}>
                        <CarouselProfile />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Wood;