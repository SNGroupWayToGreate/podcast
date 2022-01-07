import React, {useState} from "react";
import './Topics.scss'
import topic1 from '../images/topics/topic1.jpg'
import topic2 from '../images/topics/topic2.jpg'
import topic3 from '../images/topics/topic3.jpg'

export const Topics = () => {
    const [topics,setTopics]=useState([
            {image:topic1,service:'PERSONAL BRANDING',quantity:'45'},
            {image:topic2,service:'DESIGN ECOSYSTEM',quantity:'45'},
            {image:topic3,service:'WORK FROM ANYWHERE',quantity:'45'},
        ])
    const topicsElements=topics.map(topic=>{
        return(
            <div className="topics__item _item">
                <div className="topics__image">
                    <img src={topic.image} alt="oops"/>
                </div>
                <div className="topics__body">
                    {topic.service}
                </div>
                <div className="topics__footer">
                    <div className="topics__count">
                        {topic.quantity} episodes
                    </div>
                </div>
            </div>
        )
    })
    return(
        <div className='topics__content'>
            <div className="topics__header">
                <div className="topics__title">
                    Topics
                </div>
                <div className="topics__viewall">
                    <a href="#" className="topics__link">
                        View all
                    </a>
                </div>
            </div>
            <div className="topics__items">
                {topicsElements}
            </div>
        </div>
    )

}