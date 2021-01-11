import React, { useState } from 'react';
import { Container, Row, Form, Button, Col, Card } from 'react-bootstrap';


// appel API OpenWeatherMap
const getOpenWeatherMapInfo = (city, token, setResult) => {
    console.log(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}&units=metric`)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}&units=metric`)
        .then(res => res.json())
            .then(data => {
                console.log(data);
                setResult(JSON.stringify(data));
            })
        .catch((error) => {
            console.log(error);
        }
    )
}


//
const CurrentWeather = () => {

    const token = "f47b91f4876513084407302cd65cff3e";
    const [result, setResult] = useState("Waiting ...");

    const [city, setCity] = useState();
    const handleCity = (event) => {
        const res = event.target.value;
        setCity(res);
    }

    return (
        <Container id="myContainer"  fluid>
            <Row className="bg-light mb-5">
                <div className="col-12">
                <h3 className="text-center p-5">- OpenWeatherMap -</h3>
                </div>
            </Row>

            <Row>
                <Col>
                    <Form className="mx-auto shadow rounded p-5">
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Country</Form.Label>
                            <Form.Control onChange={handleCity} type="text" placeholder="ex: Paris, Marseille etc... and SUBMIT" />
                            <Button variant="success" className="mt-2 text-white float-right" onClick={() => getOpenWeatherMapInfo(city, token, setResult)}>
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
                <Col>
                    <Card>
                        <Card.Header className="text-center font-weight-bold">Result</Card.Header>
                        <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>{result}</p>
                        </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CurrentWeather;