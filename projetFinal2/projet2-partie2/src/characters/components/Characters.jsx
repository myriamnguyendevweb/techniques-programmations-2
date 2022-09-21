import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import CharacterService from '../service/CharacterService';
import CharacterList from './CharacterList';

const characterService = new CharacterService();

const Characters = () => {
    const [data, setData] = useState([]);

    const getCharacters = async () => {
        const data = await characterService.getAllCharacters();

        setData(data.results);
    };

    useEffect(() => {
        getFilms();
    }, []);

    return (
        <Container>
            <h1>Characters</h1>
            <CharacterList character={data} />
        </Container>
    );
};

export default characters;