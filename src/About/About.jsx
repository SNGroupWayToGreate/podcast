import React from 'react'
import './About.scss'
import image from '../images/about/image.jpg'


export const About = () => {
    return (
        <div className='about__content'>
            <div className="about__image ibg">
                <img src={image} alt=""/>
            </div>
            <div className="about__body body">
                <header className="body__header">
                    <div className="body__title">
                        Meet Your Host
                    </div>
                </header>
                <main className="body__main">
                    <div className="body__text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa amet leo risus, scelerisque.
                            Vivamus faucibus faucibus tristique ut pellentesque quis. Laoreet tellus et feugiat sit. Ornare
                            a tortor nisl elit ipsum. Purus vel lorem rutrum id cras.
                        </p>
                        <br/>
                        <p>
                            Purus vel lorem rutrum id cras.Sagittis tellus amet diam, elementum. Netus arcu eu proin ut diam
                            amet. Egestas et nisi, quis ut in nibh nunc. Nulla sed tortor lacus nullam vitae. Tortor sit sit
                            iaculis tortor tincidunt aliquam vestibulum viverra. Amet id dui id proin elementum id vitae
                            ornare. Tortor sit sit iaculis tortor tincidunt aliquam vestibulum viverra. Amet id dui id proin
                            elementum id vitae ornare.
                        </p>
                    </div>                    
                </main>
                <footer className="body__footer">
                    <div className="body__button">
                        Learn more
                    </div>
                </footer>
            </div>
        </div>
    )

}