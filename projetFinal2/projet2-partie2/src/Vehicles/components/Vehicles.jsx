import React, { useState, useEffect } from 'react'
import { Container } from "react-bootstrap";
import VehicleService from "../service/VehicleService";
import VehicleList from "../components/VehicleList";

const vehicleService = new VehicleService();

const Vehicles = () => {
    const [data, setData] = useState([]);

    const getVehicles = async () => {
        const data = await vehicleService.getAllVehicles();

        setData(data.results);
    }

    useEffect(() => {
        getVehicles();
    }, []);

    return (
        <Container>
            <h1>Vehicles</h1>
            <VehicleList vehicle={data} />
        </Container>
    )
}

export default Vehicles;