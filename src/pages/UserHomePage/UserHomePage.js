import { Container, Jumbotron } from "react-bootstrap";
import './UserHomePage.css';
import Calendar from "../../components/Calendar/Calendar";
import AppNavbar from "../../components/NavBar/AppNavbar";

function UserHomePage() {
    

    return(
        <div className="u-home-pg">
            <Jumbotron>
                <Container>
                    <h1>Pure</h1>
                </Container>
            </Jumbotron>
            <Container>
                <AppNavbar />
                <p>homepage</p>
                <Calendar />
            </Container>
        </div>

    );
}

export default UserHomePage;