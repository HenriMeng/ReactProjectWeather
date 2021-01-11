import React, { useState } from 'react';
import Select from 'react-select'

import { Container, Row, Form, Button } from 'react-bootstrap';
import ZippopotamFinal  from '../Zippopotam/ZippopotamFinal';
import CurrentWeatherFinal from '../CurrentWeather/CurrentWeatherFinal';


const PostalCode = () => {
    const token = "f47b91f4876513084407302cd65cff3e";
    const [degree, setDegree] = useState("result");
    
    const [postalCode, setPostalCode] = useState(0);
    const handlePostalCode = (event) => {
        const res = event.target.value;
        if(res) {
            setPostalCode(parseInt(res));
        }
        else {
            setPostalCode(0);
        }
    }
    
    const countries = [
        { value: 'FR', label: 'France' },
        { value: 'US', label: 'United States' },
        { value: 'SP', label: 'Spain' }
    ]
    const [country, setCountry] = useState("FR");
    const handleCountry = (event) => {
        const res = event.value;
        if(res) {
            setCountry(res);
        }
        else {
            setCountry("FR");
        }
    }
    
    const [cities, setCities] = useState();
    const [city, setCity] = useState();
    const handleCity = (event) => {
        const res = event.value;
        setCity(res);
    }
    
    const [resultWeather, setResultWeather] = useState();

    return (
        <Container id="myContainer"  fluid>
            <Row className="bg-light mb-5">
                <div className="col-12">
                <h3 className="text-center pt-5">- Final -</h3>
                </div>
                <div className="col-12">
                <div className="w-25 mb-5 mx-auto">
                    <ul class="list-group wh-75">
                        <li class="list-group-item">Insérez un code postal, et un pays</li>
                        <li class="list-group-item">Validez</li>
                        <li class="list-group-item">Zippopotam va vous proposer les différentes villes</li>
                        <li class="list-group-item">Envoyez</li>
                        <li class="list-group-item">OpenWeatherMap va vous retrouver la température actuelle du lieux indiqué</li>
                    </ul>
                </div>
                </div>
            </Row>

            <Row>
                <Form className="mx-auto shadow rounded p-5">
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Postal code</Form.Label>
                        <Form.Control onChange={handlePostalCode} type="text" placeholder="9999" />
                        <Form.Label>Country</Form.Label>
                        <Select onChange={handleCountry} options={countries} />
                        <Button variant="warning" className="mt-2 text-white" onClick={() => ZippopotamFinal(setCities, country, postalCode.toString())}>
                            Verify
                        </Button>
                    </Form.Group>
                    <hr />
                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Select onChange={handleCity} options={cities} />
                    </Form.Group>
                    <hr />
                    <Button variant="success" className="mt-2 w-100" onClick={() => CurrentWeatherFinal(setDegree, city, token, setResultWeather)}>
                        Submit
                    </Button>
                </Form>
            </Row>

            <Row>
                <h1 className="mx-auto p-5">{resultWeather}</h1>
            </Row>
        </Container>
    );
}

export default PostalCode;