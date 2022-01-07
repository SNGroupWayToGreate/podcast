import React, {useState} from "react";
import './Episodes.scss'
import episod1 from '../images/episodes/episod1.jpg'
import episod2 from '../images/episodes/episod2.jpg'
import episod3 from '../images/episodes/episod3.jpg'
import episod4 from '../images/episodes/episod4.jpg'
import episod5 from '../images/episodes/episod5.jpg'
import episod6 from '../images/episodes/episod6.jpg'
import playicon from '../images/playicon.svg'
import timeicon from '../images/access_time.svg'

export const Episodes = () => {

    const [episodes, setEpisodes] = useState([
        {image: episod1,text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque risus, tortor, ', description: 'Everyday is Chance to Learn New Things', time: '80'},
        {image: episod2,text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque risus, tortor, ', description: 'Build Personal Branding on Design Ecosystem', time: '60'},
        {image: episod3,text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque risus, tortor, ', description: '20 Ways To Keep Motivating While Work From Home', time: '70'},
        {image: episod4,text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque risus, tortor, ', description: 'Build Personal Branding on Design Ecosystem', time: '80'},
        {image: episod5,text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque risus, tortor, ', description: 'Build Personal Branding on Design Ecosystem', time: '50'},
        {image: episod6,text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque risus, tortor, ', description: 'Build Personal Branding on Design Ecosystem', time: '40'}
    ])
    const EpisodesElements = episodes.map(episod => {
        return (

                <div className="episodes__item item">
                    <div className="item__imag">
                        <img src={episod.image} alt="oops"/>
                    </div>
                    <div className="item__body">
                        <div className="item__title">
                            <div className="item__name">MIKE LEWIS</div>
                            <div className="item__circle"></div>
                            <div className="item__branding">PERSONAL BRANDING</div>
                        </div>
                        <div className="item__description">{episod.description}</div>
                        <div className="item__text">{episod.text}</div>
                    </div>
                    <div className="item__footer">
                        <div className="item__play">
                            <div className="item__button">
                                <img src={playicon} alt=""/>
                            </div>
                            <div className="item__play-text">Play This Episode</div>
                        </div>
                        <div className="item__time time">
                            <div className="time__icon _ibg">
                                <img src={timeicon} alt=""/>
                            </div>
                            <div className="time__text">
                                {episod.time} min
                            </div>
                        </div>
                    </div>
                </div>
        )
    })
    return (
        <div className='episodes__content'>
            <div className='episodes__header'>
                <div className="episodes__title">
                    Latest Episodes
                </div>
                <div className="episodes__viewall">
                    <a href="#" className="episodes__link">
                        View all
                    </a>
                </div>
            </div>
            <div className="episodes__items">
                {EpisodesElements}
            </div>
        </div>

    )

}