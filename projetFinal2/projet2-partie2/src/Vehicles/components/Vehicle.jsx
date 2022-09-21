import React from "react";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';


import FilmService from "../../films/service/FilmService";
import FilmList from "../../films/components/FilmList";
import CharacterList from "../../characters/components/CharacterList";
import CharacterService from "../../characters/components/CharacterService";
import VehicleService from "../service/VehicleService";
import VehicleService from "../../Vehicles/components/VehicleService";

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const filmService = new FilmService();
const characterService = new CharacterService();
const vehicleService = new VehicleService();



const Vehicle = () => {
    const [vehicle, setVehicle] = useState(null);
    const params = useParams();

    const getVehicule = async (id) => {
        const vehicle = await vehicleService.getById(id);

        setVehicle;
    };

    const Films = useGetData(
        filmService.getFilmById.bind(filmService),
        vehicle?.films
    );

    const characters = useGetData(
        characterService.getCharacterById.bind(characterService),
        vehicle?.pilots
    );

    useEffect(() => {
        if (params.id) getVehicle(params.id);
    }, [params]);


    return (
        vehicle && (
            <Container>
                <h1 className='py-5 text-center'>Vehicles</h1>
                <Row>
                    <Card.Body>
                        <Card.Header>Name: {vehicle.name}</Card.Header>
                        <ListGroup>
                            <ListGroupItem>Cargo capacity: {vehicle.cago_capacity} </ListGroupItem>
                            <ListGroup.Item>Consumanbles: {vehicle.consumalbes}</ListGroup.Item>
                            <ListGroup.Item>Crew: {vehicle.crew}</ListGroup.Item>
                            <ListGroup.Item>Max Atmosphering speed: {vehicle.max_atmosphering_speed}</ListGroup.Item>
                            <ListGroup.Item>Passengers: {vehicle.passengers}</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Row>


                <FilmList films={films} />
                <CharacterList characters={characters} />



            </Container>



        )
    );

};

export default Vehicle;