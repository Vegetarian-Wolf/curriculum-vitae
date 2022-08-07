import React from 'react';
import styles from '../styles/Metal.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { BsFillTelephoneFill } from "react-icons/bs";
import { FaAddressBook } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

import { useTranslation } from "react-i18next";

const Metal = () => {
    const { t } = useTranslation(["home"]);
    return (
        <section id="metal" className={styles.home}>
            <Container fluid className={styles.footer__metal}>
                <Row className={styles.footer__metal__row}>
                    <Col className={styles.col__footer} sx={6} md={4}>
                        <h2 className="text-center text-uppercase"> {t("confide")} </h2>
                        <p> - {t("confide_1")} </p>
                        <p> - {t("confide_2")} </p>
                        <p> - {t("confide_3")} </p>
                    </Col>
                    <Col className={styles.col__footer} sx={6} md={4}>
                        <h2 className="text-center text-uppercase"> {t("link")} </h2>
                        <a href="https://www.facebook.com/profile.php?id=100084147065024"
                            target="_blank"
                            rel="noopener noreferrer">
                            <p> <FaFacebook />: Vegetarian-Wolf (Sói ăn chay) </p>
                        </a>
                        <a href="https://github.com/Vegetarian-Wolf/Vegetarian-Wolf"
                            target="_blank"
                            rel="noopener noreferrer">
                            <p> <AiFillGithub />: https://github.com/Vegetarian-Wolf </p>
                        </a>
                        <a href="https://github.com/nguyenthanhsang231195"
                            target="_blank"
                            rel="noopener noreferrer">
                            <p> <AiFillGithub />: https://github.com/nguyenthanhsang231195 </p>
                        </a>
                    </Col>
                    <Col className={styles.col__footer} sx={{ span: 4, offset: 4 }} md={4}>
                        <h2 className="text-center text-uppercase"> {t("contact")} </h2>
                        <p> <FaAddressBook />: 21 Thép Mới, P12, Q.Tân Bình, Tp.HCM </p>
                        <p> <BsFillTelephoneFill />: 0797080378 </p>
                        <p> <FaBirthdayCake />: 23/11/95 </p>
                        <p> <SiGmail />: nguyenthanhsang231195@gmail.com / sangnguyen19952311@gmail.com </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Metal;