import React, { useState, useEffect } from "react";
import { Container } from "react-boostrap";
import Row from 'react-bootstrap/Row';
import FilmService from "../service/FilmService";
import StarshipService from "../../starships/service/StarshipService";
import StarshipList from "../../starships/components/StarshipsList";
import VehicleService from "../../vehicles/service/VehicleService";
import VehicleList from "../../Vehicles/components/VehicleList";
import CharacterService from "../../characters/service/CharacterService";
import CharacterList from "../../characters/components/CharacterList";
import { useParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData";

const filmService = new FilmService();
const vehicleService = new VehicleService();
const starshipService = new StarshipService();
const characterService = new PeopleService();

const Film = () => {
    const [film, setFilm] = useState(null);
    const params = useParams();

    const getFilm = async (id) => {
        const film = await filmService.getById(id);

        setFilm;
    };

    const vehicles = useGetData(
        VehicleService.getById.bind(VehicleService),
        film?.vehicles
    );

    const starship = useGetData(
        StarshipService.getById.bind(StarshipService),
        film?.starships
    );

    const character = useGetData(
        characterService.getById.bind(CharacterService),
        film?.characters
    );

    useEffect(() => {
        if (params.id) getFilm(params.id);
    }, [params]);

    return (
        film && (
            <Container>
                <h1 className='py-5 text-center'>Films</h1>
                <Row>
                    <Card.Body>
                        <Card.Header>{film.tittle}</Card.Header>
                        <Card.Text>
                            {film.opening_crawl}
                        </Card.Text>
                    </Card.Body>
                </Row>

                <CharacterList character={character} />
                <VehicleList vehicle={vehicles} />
                <StarshipList starship={starship} />
            </Container>
        )
    );

};

export default Film;