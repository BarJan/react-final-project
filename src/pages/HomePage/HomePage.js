import { Container, Jumbotron } from "react-bootstrap";
import AppNavbar from "../../components/NavBar/AppNavbar";
import './HomePage.css'


function HomePage() {
    

    return(
        <div className="h-pg">
            <Jumbotron>
                <Container>
                    <h1>Pure</h1>
                </Container>
            </Jumbotron>
            <Container>
                <AppNavbar />
            </Container>
        </div>

    );
}

export default HomePage;