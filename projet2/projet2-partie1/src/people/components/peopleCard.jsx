import React from 'react'
import Card from '../../components/Card';
import { Link } from "react-dom";

const peopleCard = ({ people }) => {
    return (
        <Col className="my-3">
            <Link to={`/people/${people.id}`}>
                <Card>
                </Card>
            </Link>
        </Col>
    )
}

export default peopleCard