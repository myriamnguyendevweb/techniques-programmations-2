import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "../../components/ProfileHeader";
import routes from "../../router/routes";
import PeopleService from "../service/PeoplService";

import { capitalize } from "../../utils";

const PeopleService = new PeopleService();

const IndividualPokemon = () => {
    const [pokemon, setCharacter] = useState(null);
    const params = useParams();

    const getCharactersById = async () => {
        if (params.id) {
            setCharacters(await PeopleService.getCharactersById(params.id));
        }
    };

    useEffect(() => {
        getCharactersById();
    }, [params]);

    return (
        characters && (
            <>
                <ProfileHeader
                    profileImage={characters.sprites.other["official-artwork"].front_default}
                    alt={capitalize(characters.name)}
                    backTo={routes.home}
                    backToName="Home"
                    name={capitalize(characters.name)}
                />
            </>
        )
    );
};

export default characters;