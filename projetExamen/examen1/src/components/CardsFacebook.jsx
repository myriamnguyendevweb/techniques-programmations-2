import React from 'react'
import SvgFacebook from '../images/icon-facebook.svg';
import SvgUp from '../images/icon-up.svg';

const CardsFacebook = (props) => {
    return (
        <div className-="cardsFacebook">
            <div className="overflow">
                <img src={SvgFacebook} alt="svg facebook" />
                <p className="textTag">@nathanf</p>
            </div>
            <div className="cards-body textNumber">
                <p className="textNum">1987</p>
                <p className="textFollowers">FOLLOWERS</p>
                <img src={SvgUp} alt="svg up" />
                <p className="textGreen">12 Today</p>
            </div>
        </div>
    )
}


export default CardsFacebook;