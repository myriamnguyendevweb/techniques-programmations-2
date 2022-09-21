import React from "react";
import StarshipCard from "./StarshipCard";

const StarshipList = ({ data }) => {
    return starship.map((starship) => (

        <StarshipCard
            url={starship.url}
            name={starship.name}
            model={starship.model}
            manufacturer={starship.manufacturer}
        />
    ));
};

export default StarshipList;