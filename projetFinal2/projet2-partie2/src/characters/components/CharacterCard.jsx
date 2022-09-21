import React from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import CharacterService from "../service/CharacterService";

const characterService = new CharacterService();

const CharacterCard = ({ character }) => {
    return (
        <Col >
            <Link to={`/characters/${characterService.getCharacterIdFromUrl(character.url)}`}>
                <Card>
                    <BCard.Header >{character.name}</BCard.Header>
                    <BCard.Body>{character.birth_year}</BCard.Body>
                </Card>
            </Link>
        </Col>
    );
};

export default CharacterCard;