import './App.css';
import React from "react"
import Final from "../Final"
import Zippopotam from "../Zippopotam"
import CurrentWeather from "../CurrentWeather"
import Home from "../Home"
import Route from "../Route"
import Header from "../Header"
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Container fluid>
      <Header />
      <Route path="/postal-code">
        <Final />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/zippopotam">
        <Zippopotam />
      </Route>
      <Route path="/current-weather">
        <CurrentWeather />
      </Route>
    </Container>
  );
}

export default App;
