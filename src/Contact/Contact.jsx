import React from 'react'
import './Contact.scss'


export const Contact = () => {
    return (
        <div className="contact__content">
            <div className="contact__body">
                <div className="contact__leftcolumn">
                    <div className="contact__logoblock">
                        <div className="contact__logo ">
                          D
                        </div>
                        <div className="contact__name">
                            DSGNPOD
                        </div>
                    </div>
                    <div className="contact__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vestibulum et quis eu, magna varius.
                    </div>
                </div>
                <div className="contact__rightcolumn">
                    <li className="contact__list list">
                        <ul className="list__item">
                            Sitemap
                        </ul>
                        <ul className="list__item">
                            <a href="" className="list__link">Home</a>
                        </ul>
                        <ul className="list__item">
                            <a href="" className="list__link">Episodes</a>
                        </ul>
                        <ul className="list__item">
                            <a href="" className="list__link">About</a>
                        </ul>
                        <ul className="list__item">
                            <a href="" className="list__link">Shop</a>
                        </ul>
                    </li>
                    <li className="contact__list list">
                        <ul className="list__item">
                        Company
                        </ul>
                        <ul className="list__item">
                            <a href="" className="list__link">We are hiring</a>
                        </ul>
                        <ul className="list__item">
                            <a href="" className="list__link">Cast Team</a>
                        </ul>
                        <ul className="list__item">
                            <a href="" className="list__link">Studio</a>
                        </ul>
                    </li>
                    <li className="contact__list list">
                        <ul className="list__item">
                            Contact
                        </ul>
                        <ul className="list__item">
                           dsgnpod@gmail.com
                        </ul>
                        <ul className="list__item">
                                28 Cambridge Avenue<br/>
                                San Fransisco 3426
                        </ul>
                        <ul className="list__item">
                           (758) 937 - 2694
                        </ul>
                    </li>
                </div>
            </div>
            <footer className="contact__footer footer">
                <li className="footer__list">
                    <ul className="footer__item">
                        <a href="#" className="footer__link">
                            Facebook
                        </a>
                    </ul>
                    <ul className="footer__item circle"></ul>
                    <ul className="footer__item">
                        <a href="#" className="footer__link">
                            Twitter
                        </a>
                    </ul>
                    <ul className="footer__item circle"></ul>
                    <ul className="footer__item">
                        <a href="#" className="footer__link">
                            Instagram
                        </a>
                    </ul>
                </li>
            </footer>
        </div>
    )

}