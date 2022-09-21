import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import StarshipService from "../service/StarshipService";
import StarshipList from "./StarshipList";

const starshipService = new StarshipService();

const Starship = () => {
    const [data, setData] = useState([]);

    const getStarships = async () => {
        const data = await StarshipService.getAllsStaships();

        setData(data.results);
    };

    useEffect(() => {
        getStarships();
    }, []);

    return (
        <Container>
            <h1>Starships</h1>
            <StarshipList starships={data} />
        </Container>
    );
};

export default Starships;