import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from './components/Container';
import Heading from './components/Heading';
import CardsFacebook from './components/CardsFacebook';
import CardsTwitter from './components/CardsTwitter';
import CardInstagram from './components/CardInstagram';
import CardYoutube from './components/CardYoutube';

function App() {
  <div className="App">
    <Container>
      <Heading />
      <CardsFacebook
      />
      <CardsTwitter />
      <CardInstagram />
      <CardYoutube />
    </Container>
  </div>
}

export default App;
