import './App.scss';
import logo1 from '../src/images/find_images/social1.png'
import logo2 from '../src/images/find_images/social2.png'
import logo3 from '../src/images/find_images/social3.png'
import mask from '../src/images/Mask_Group.png'
import topleft from '../src/images/home_images/topleft.png'
import topright from '../src/images/home_images/topright.png'
import buttomleft from '../src/images/home_images/buttomleft.png'
import buttomright from '../src/images/home_images/buttomright.png'
import {Episodes} from "./Episodes/Episodes";
import {Topics} from "./Topics/Topics";
import {About} from "./About/About";
import {Subscribe} from "./Subscribe/subscribe";
import {Contact} from "./Contact/Contact";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {TimelineLite} from "gsap";


function App() {
    const header=useRef()
    let tl = new TimelineLite();
    useEffect(()=>{
        gsap.from('.menu__item',{duration:1,opacity:0,ease:'bounch',y:10})
        tl
            .from('.home__title ',2,{opacity:0,stagger:0.4,ease:'linear',y:30,x:10},'-=1')
            .from('.home__buttons',2,{opacity:0,stagger:0.4,ease:'linear',y:30,x:10},'-=1')
            .from('.home__topleft',2,{scale:0,opacity:0,stagger:0.4,ease:'linear'},'-=2')
            .from('.home__topright',2,{scale:0,opacity:0,stagger:0.4,ease:'linear'},'-=2')
            .from('.home__buttomright',2,{scale:0,opacity:0,stagger:0.4,ease:'linear'},'-=2')
            .from('.home__buttomleft',2,{scale:0,opacity:0,stagger:0.4,ease:'linear'},'-=2')
    })
    return (
        <div className='wrapper'>
            <heder className="header"  >
                <div className="header__container _container" ref={header}>
                    <div className="header__logoblock logoblock">
                        <div className="logoblock__logo">
                            <span>D</span>
                        </div>
                        <div className="logoblock__name">DSGNPOD</div>
                    </div>
                    <div className="header__menu mneu">
                        <li className="menu__list">
                            <ul className="menu__item">
                                <a href="#" className="menu__link">Home</a>
                            </ul>
                            <ul className="menu__item">
                                <a href="#" className="menu__link">Episodes</a>
                            </ul>
                            <ul className="menu__item">
                                <a href="#" className="menu__link">About</a>
                            </ul>
                            <ul className="menu__item">
                                <a href="#" className="menu__link">Shop</a>
                            </ul>
                            <ul className="menu__item">
                                <a href="#" className="menu__link">Contact</a>
                            </ul>
                        </li>
                    </div>
                    <div className="header__button">
                  <span className="btn">
                      <span>Sign up</span>
                  </span>
                    </div>
                </div>
            </heder>
            <main className="main">
                <section className="home">
                    <div className="home__container _container">
                        <div className="home__body body " >
                            <div className="home__pretitle"ref={header}>
                                <div className="home__name">MIKE LEWIS</div>
                                <div className="home__circle"></div>
                                <div className="home__branding">PERSONAL BRANDING</div>
                            </div>
                            <div className="home__title" ref={header}>
                                Everyday is Chance to Learn New Things
                            </div>
                            <div className="home__subtitle" ref={header}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra laoreet in est tortor
                                quam pretium tellus pretium sit.
                            </div>
                            <div className="home__buttons">
                                <div className="home__startbtn">
                                    Start Listening
                                </div>
                                <div className="home__seebtn">
                                    See all Episodes
                                </div>
                            </div>
                            <div className="home_find find">
                                <div className="find__title">
                                    ALSO FIND US ON :
                                </div>
                                <ul className="find__list">
                                    <li className="find__item">
                                        <img src={logo1} alt="oops"/>
                                    </li>
                                    <li className="find__item">
                                        <img src={logo2} alt="oops"/>
                                    </li>
                                    <
                                        li className="find__item">
                                        <img src={logo3} alt="oops"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="home__images">
                            <div className="home__leftcolumn">
                                <div className="home__topleft _ibg">
                                    <img src={topleft} alt=""/>
                                </div>
                                <div className="home__buttomleft _ibg">
                                    <img src={buttomleft} alt=""/>
                                </div>
                            </div>
                            <div className="home__rightcolumn">
                                <div className="home__topright _ibg">
                                    <img src={topright} alt=""/>
                                </div>

                                <div className="home__buttomright _ibg">
                                    <img src={buttomright} alt=""/>
                                </div>
                            </div>


                        </div>
                        <div className="home_banner _ibg"></div>
                        <div className="home_mask _ibg">
                            <img  className='_ibg' src={mask} alt=""/>
                        </div>
                    </div>
                </section>
                <section className="episodes">
                    <div className="episodes__container _container">
                        <Episodes/>
                    </div>
                </section>
                <section className="about">
                    <div className="about__container _container">
                        <About/>
                    </div>
                </section>
                <section className="topics">
                    <div className="topics__container _container">
                        <Topics/>
                    </div>
                </section>
                <section className="subscribe">
                    <div className="subscribe__container _container">
                        <Subscribe/>
                    </div>
                </section>
                <section className="contact">
                    <div className="contact__container _container">
                        <Contact/>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <div className="footer__container _container">
                    <div className="footer__text">
                        © 2019 The Collective Podcast
                    </div>
                    <div className="footer__text">
                        Terms conditions and Privacy Policy
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
