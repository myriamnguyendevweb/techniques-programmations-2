import React from 'react'
import SvgInstagram from '../images/icon-instagram.svg';
import SvgUp3 from '../images/icon-up.svg';

const CardInstagram = (props) => {
    return (
        <div className-="cardsInstagram">
            <div className="overflow">
                <img src={SvgInstagram} alt="svg instagram" />
                <p className="textTag">@nathanf</p>
            </div>
            <div className="cardsTextNumber3">
                <p className="textNum">11k</p>
                <p className="followers">FOLLOWERS</p>
                <img src={SvgUp3} alt="svg up" />
                <p className="textGreen3">1099 Today</p>
            </div>
        </div>
    )
}

export default CardInstagram;