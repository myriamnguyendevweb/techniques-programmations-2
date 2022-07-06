import React from 'react'
import SvgYoutube from '../images/icon-youtube.svg';
import SvgDown from '../images/icon-down.svg';

const CardYoutube = (props) => {
    return (
        <div className-="cardsYotube">
            <div className="overflow">
                <img src={SvgYoutube} alt="svg youtube" />
                <p className="textTag">Nathan F.</p>
            </div>
            <div className="cardsTextNumber4">
                <p className="textNum">8239</p>
                <p className="followers2">SUBSCRIBERS</p>
                <img src={SvgDown} alt="svg down" />
                <p className="textRed">144 Today</p>
            </div>
        </div>
    )
}

export default CardYoutube;