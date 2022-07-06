import React from 'react'
import SvgTwitter from '../images/icon-twitter.svg';
import SvgUp2 from '../images/icon-up.svg'

const CardsTwitter = (props) => {
    return (
        <div className-="cardsTwitter">
            <div className="overflow">
                <img src={SvgTwitter} alt="svg twitter" />
                <p className="textTag">@nathanf</p>
            </div>
            <div className="cardsTextNumber2">
                <p className="textNum">1044</p>
                <p className="followers">FOLLOWERS</p>
                <img src={SvgUp2} alt="svg up" />
                <p className="textGreen2">99 Today</p>
            </div>
        </div>
    )
}

export default CardsTwitter;