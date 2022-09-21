import React from "react";
import { Container } from "react-bootstrap";

import FilmList from "../../films/components/FilmList";
import FilmService from "../../films/service/FilmService";
import StarshipList from "../../starships/components/StarshipList";
import StarshipService from "../../starships/service/starshipService";
import VehicleList from "../../vehicles/components/VehicleList";
import VehicleService from "../../vehicles/service/VehicleService";
import CharacterService from "../service/CharacterService";

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useGetData from '../../hooks/useGetData';

const starshipService = new StarshipService();
const characterService = new CharacterService();
const filmService = new FilmService();
const vehicleService = new VehicleService();


const Character = () => {
    const [character, setCharacter] = useState(null);
    const params = useParams();

    const getCharacter = async (id) => {
        const character = await characterservice.getCharacterById(id);

        setCharacter;
    };

    const films = useGetData(
        filmService.getById.bind(FilmService),
        character?.films
    );

    const vehicles = useGetData(
        vehicleService.getVehicleById.bind(vehicleService),
        character?.vehicles
    );

    const starships = useGetData(
        starshipService.getStarshipById.bind(starshipService),
        character?.starships
    );

    useEffect(() => {
        if (params.id) getCharacter(params.id);
    }, [params]);

    return (
        character && (
            <Container className="pt-5">
                <h1 className="text-center">{character.name}</h1>
                <h2 className="text-center pb-5">
                    {character.birth_year}
                </h2>

                <Container fluid className="py-5">
                    <h2>Films</h2>
                    <FilmList films={films} />
                </Container>
                <Container fluid className="py-5">
                    <h2>Starships</h2>
                    <StarshipList Starships={Starships} />
                </Container>
                <Container fluid className="py-5">
                    <h2>Vehicles</h2>
                    <VehicleList vehicles={vehicles} />
                </Container>
            </Container>

        )
    );
};

export default Character;