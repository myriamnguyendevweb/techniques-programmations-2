import React from "react";
import FilmCard from "./FilmCard";

const FilmList = ({ film }) => {
    return film.map((film) => (
        <FilmCard
            episode_id={film.episode_id}
            release_date={film.release_date}
            url={film.url}
            title={film.title}
        />

    ));
};

export default FilmList;