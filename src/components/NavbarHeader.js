import React, { useEffect } from 'react';
import styles from '../styles/NavbarHeader.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

import { useTranslation } from "react-i18next";
import i18next from "i18next";

const NavbarHeader = () => {

    const { i18n, t } = useTranslation(["navbar"]);

    useEffect(() => {
        if (localStorage.getItem("i18nextLng")?.length > 1) {
            i18next.changeLanguage("en");
        }
    }, []);

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <Navbar bg="light" variant="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="http://Vegetarian-Wolf.github.io/curriculum-vitae">
                    <img src="./images/green-wolf-logo.png" alt="" style={{ maxWidth: '70px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="justify-content-end flex-grow-1 my-lg-0"
                        style={{ maxHeight: '15%' }}
                        navbarScroll
                    >
                        <Nav.Link className={styles.navlink} href="#water" disabled> {t("hello")} </Nav.Link>
                        <Nav.Link className={styles.navlink} href="#wood" disabled> {t("about")} </Nav.Link>
                        <Nav.Link className={styles.navlink} href="#fire" disabled> {t("skills")} </Nav.Link>
                        <Nav.Link className={styles.navlink} href="#earth" disabled> {t("company")} </Nav.Link>
                        <Nav.Link className={styles.navlink} href="#metal" disabled> {t("contact")} </Nav.Link>
                        <div className="vr" />
                        <Nav.Link 
                            className={styles.navlink}
                            value={localStorage.getItem("i18nextLng")}
                            onChange={handleLanguageChange}>
                            <Form.Select aria-label="Default select" className={styles.select__box}>
                                <option disabled> Language </option>
                                <option value="en"> English </option>
                                <option value="vi"> Việt Nam </option>
                            </Form.Select>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarHeader;