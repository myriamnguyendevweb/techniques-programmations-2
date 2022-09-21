import React from "react";
import StarshipService from "../service/StarshipService";
import useGetData from "../../hooks/useGetData";
import CharacterService from "../../characters/service/CharacterService";
import CharacterList from "../../characters/components/CharacterList";
import FilmService from "../../films/service/FilmService";
import FilmList from "../../films/components/FilmList";

import { Container } from "react-bootstrap";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const starshipService = new StarshipService();
const characterService = new CharacterService();
const filmService = new FilmService();

const Starship = () => {
    const [starship, setStarship] = useState(null);
    const params = useParams();

    const getStarship = async (id) => {
        const starship = await starshipService.getStarshipById(id);

        setStarship;
    };

    const characters = useGetData(
        characterService.getById.bind(CharacterService),
        starship?.pilots
    );

    const films = useGetData(
        filmService.getById.bind(FilmService),
        starship?.films
    );

    useEffect(() => {
        if (params.id) getStarship(params.id);
    }, [params]);

    return (
        starship && (
            <Container className="pt-5">
                <h1 className="text-center">{starship.name}</h1>
                <h2 className="text-center pb-5">
                    {data.model} - {data.starship_class}
                </h2>

                <Container fluid className="py-5">
                    <h2>Films</h2>
                    <FilmList films={films} />
                </Container>
                <Container fluid className="py-5">
                    <h2>Characters</h2>
                    <CharacterList character={character} />
                </Container>
            </Container>

        )
    )
}

export default Starship;