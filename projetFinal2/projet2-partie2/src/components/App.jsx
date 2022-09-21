import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import Films from "../films/components/Films";
import Film from "../films/components/Film";
import Characters from "../characters/components/Characters";
import Character from "../characters/components/character";
import Starships from "../starships/components/Starships";
import Starship from "../starships/components/Starship";
import Vehicles from "../vehicles/components/Vehicles";
import Vehicle from "../vehicles/components/Vehicle";

import AppContainer from '../auth/components/AppContainer';
import NotFound from "./NotFound";
import AuthLayout from "../auth/components/AuthLayout";
import User from "../auth/components/User";


const App = () => {
  return (

    <BrowserRouter>
      <AppContainer>
        <Container>
          <Routes>
            <Route path='login' element={<AuthLayout />} />
            <Route path='/' element={<Films />} />
            <Route path='/films' element={<Films />} />
            <Route path='/films/:id' element={<Film />} />
            <Route path='/characters' element={<Characters />} />
            <Route path='/Characters/:id' element={<Character />} />
            <Route path='/starships' element={<Starships />} />
            <Route path='/starships/:id' element={<Starship />} />
            <Route path='/Vehicles' element={<Vehicles />} />
            <Route path='/Vehicles/:id' element={<Vehicle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </AppContainer>
    </BrowserRouter>


  );
}

export default App;