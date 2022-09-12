import { useState } from "react";

const starshipService = new StarshipService();

const People = () => {
    const [data, setData] = useState([]);

    const starships = useGetData(
        starshipService.getById.bind(starshipService),
        data?.starships
    );

    return (
        <div></div>
    )
};

export default People;