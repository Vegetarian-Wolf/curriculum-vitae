import React from 'react';
import styles from '../styles/Fire.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import datafire from '../data/dataFire';

import { useTranslation } from "react-i18next";

const Fire = () => {
    const { t } = useTranslation(["home"]);
    return (
        <section id="fire" className={styles.home}>
            <Container>
                <Row>
                    {datafire.map((item, index) => (
                        <Col xs={6} md={4}>
                            <ListGroup variant="flush" as="ul" key={index}>
                                <ListGroup.Item className={styles.title__fire} as="li" active>
                                    <h1> {item.kills} </h1>
                                </ListGroup.Item>

                                <ListGroup.Item className={styles.span__fire} as="li">
                                    <h2 style={{fontWeight: "bold"}}> {t("basic")}: </h2>
                                    {item.basic.map((product, index) => (
                                        <span key={index}> - {product} </span>
                                    ))}
                                </ListGroup.Item>

                                <ListGroup.Item className={styles.span__fire} as="li">
                                    <h2 style={{fontWeight: "bold"}}> {t("framework")}: </h2>
                                    {item.framework.map((product, index) => (
                                        <span key={index}> - {product} </span>
                                    ))}
                                </ListGroup.Item>

                                <ListGroup.Item className={styles.span__fire} as="li">
                                    <h2 style={{fontWeight: "bold"}}> {t("other")}: </h2>
                                    {item.other.map((product, index) => (
                                        <span key={index}> - {product} </span>
                                    ))} </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Fire;