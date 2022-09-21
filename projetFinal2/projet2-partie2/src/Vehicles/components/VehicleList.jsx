import React from "react";
import VehicleCard from "./VehicleCard";

const VehicleList = ({ vehicle }) => {
    return vehicle.map((vehicle) => (

        <VehicleCard
            url={vehicle.url}
            name={vehicle.name}
            model={vehicle.model}
            manufacturer={vehicle.manufacturer}
        />

    ));
}

export default VehicleList;