import React, { useState } from 'react';
import Select from 'react-select'
import { Container, Row, Form, Button, Col, Card } from 'react-bootstrap';


// appel API Zippopotam
const getZippopotamInfo = (setResult, country, postalCode) => {
    fetch(`http://api.zippopotam.us/${country}/${postalCode}`)
        .then(res => res.json())
            .then(data => {
                console.log(`http://api.zippopotam.us/${country}/${postalCode}`);
                console.log(data);    
                setResult(JSON.stringify(data));
            })
        .catch((error) => {
            console.log(error);
        }
    )
}

// 
const Zippopotam = () => {
    
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
    
    const [result, setResult] = useState("Waiting ...");

    return (
        <Container id="myContainer"  fluid>
            <Row className="bg-light mb-5">
                <div className="col-12">
                <h3 className="text-center p-5">- Zippopotam -</h3>
                </div>
            </Row>

            <Row>
                <Col>
                    <Form className="mx-auto shadow rounded p-5">
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Postal code</Form.Label>
                            <Form.Control onChange={handlePostalCode} type="text" placeholder="9999" />
                            <Form.Label>Country</Form.Label>
                            <Select onChange={handleCountry} options={countries} />
                            <Button variant="success" className="mt-2 text-white float-right" onClick={() => getZippopotamInfo(setResult, country, postalCode.toString())}>
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

export default Zippopotam;