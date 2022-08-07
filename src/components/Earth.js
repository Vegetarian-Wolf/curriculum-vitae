import React from 'react';
import styles from '../styles/Earth.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dataearth from '../data/dataEarth';

import { useTranslation } from "react-i18next";


const Earth = () => {
    const { t } = useTranslation(["home"]);
    return (
        <section id="earth" className={styles.home}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.mask__custom}>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-borderless text-white mb-0">
                                        <thead>
                                            <tr className={styles.title__table}>
                                                <th scope="col"> {t("company")}: </th>
                                                <th scope="col"> {t("address")}: </th>
                                                <th scope="col"> {t("time")}: </th>
                                                <th scope="col"> {t("type")}: </th>
                                                <th scope="col"> {t("work")}: </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataearth.map((item) => (
                                                <tr key={item.STT}>
                                                    <th scope="row"> * {item.company}  </th>
                                                    <td> {item.address} </td>
                                                    <td> {item.time} </td>
                                                    <td> {item.type} </td>
                                                    {item.work && item.work.map((product, index) => (
                                                        <td key={index}>
                                                            <p> * Nhiệm vụ: {product.mission} </p>
                                                            <p> * Mô tả: {product.detail} </p>
                                                            <p> * Kinh nghiệm: {product.learn} </p>
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Earth;