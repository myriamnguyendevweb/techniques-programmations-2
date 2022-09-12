import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import People from '../people/components/people';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path='index' element={<NotFound />} />
          <Route path='people' element={<people />} />
        </Routes>
      </Container>
    </BrowserRouter>

  );
};

export default App;

