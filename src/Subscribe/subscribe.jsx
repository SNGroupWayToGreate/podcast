import React from "react";
import './Subscribe.scss'
import maskGroup from '../images/Mask_Group.png'

export const Subscribe = () => {
    return (
        <div className="subscribe__content">
            <div className="subscribe__body">
                <div className="subscribe__text">
                    <div className="subscribe__title">Keep In Touch and Stay Inspiring Everyday</div>
                    <div className="subscribe__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At senectus vitae hendrerit massa in.</div>
                </div>
                <div className="subscribe__form">
                    <input className="subscribe__input" placeholder='Enter Your Email'/>
                    <div className="subscribe__button">
                        Subscribe
                    </div>
                </div>
            </div>
            <div className="subscribe__banner banner">
                <div className="banner__carpet">
                </div>
                <div className="banner__maskgroup _ibg">
                    <img src={maskGroup} alt=""/>
                </div>
            </div>
        </div>
    )
}