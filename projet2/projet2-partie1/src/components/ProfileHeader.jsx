import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const ProfileHeader = ({ alt, backTo, backToName, name }) => {
    return (
        <>
            <Nav className="mb-5">
                <Nav.Item>
                    <Nav.Link as={Link} to={backTo}>
                        {backToName}
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <h1>{name}</h1>
        </>
    );
};

export default ProfileHeader;