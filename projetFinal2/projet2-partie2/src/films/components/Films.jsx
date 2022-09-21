import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import FilmService from "../service/FilmService";
import FilmList from "./FilmList";

const filmService = new FilmService();

const Films = () => {
    const [data, setData] = useState([]);

    const getFilms = async () => {
        const data = await filmService.getAllFilms();

        setData(data.results);
    };

    useEffect(() => {
        getFilms();
    }, []);

    return (
        <Container>
            <h1>Films</h1>
            <FilmList films={data} />
        </Container>
    );
};

export default Films;