import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ character }) => {
    return characters.map((characters) => (
        <CharacterCard
            url={character.url}
            name={character.name}
            birth_year={character.birth_year}
        />

    ));

};

export default CharacterList;