import React, { Component } from 'react'
import CardsFacebook from './CardsFacebook';
import CardsTwitter from './CardsTwitter';
import CardInstagram from './CardInstagram';
import CardYoutube from './CardYoutube';


class Cards extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <CardsFacebook />
                </div>
                <div className="col-md-3">
                    <CardsTwitter />
                </div>
                <div className="col-md-3">
                    <CardInstagram />
                </div>
                <div className="col-md-3">
                    <CardYoutube />
                </div>

            </div>
        )
    }
}

export default Cards