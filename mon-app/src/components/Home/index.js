import { Container, Row, Col, Card } from 'react-bootstrap';


const Home = () => {
  return(
    <Container fluid>
      <Row className="bg-light">
        <div className="col-12">
          <h1 className="text-center pt-5">React 03</h1>
        </div>
        <div className="col-12">
          <p className="w-25 mb-5 mx-auto">
            Vous devez réaliser un site en React permettant de naviguer et d’afficher les données de
            deux APIs (deux votre choix) mis en relation dans votre site.
          </p>
        </div>
      </Row>
      <Row className="m-5">
        <Col>
          <Card>
            <Card.Header className="text-center font-weight-bold">Zippopotam</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  L'API de Zippopotamus vous retourne, à partir d'un code potal, des informations sur la ville, les coordonnées GPS, le pays, l'état.
                </p>
                <footer className="blockquote-footer">
                  http://www.zippopotam.us/
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Header className="text-center font-weight-bold">OpenWeatherMap</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                OpenWeatherMap est un site collectant des données de plus de 40 000 stations météo dans le monde.         
                Vous pouvez récupérer les données (météo du jour/semaine, vents, pression atmosphérique, nuages, précipitations, etc...) 
                via le nom d'une ville ou ses coordonnées GPS.
                </p>
                <footer className="blockquote-footer">
                  https://openweathermap.org/current
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;