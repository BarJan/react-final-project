import { Container } from "react-bootstrap";
import Calendar from "../../components/Calendar/Calendar";
import AppNavbar from "../../components/NavBar/AppNavbar";

function UserHomePage() {
    

    return(
        <Container>
            <AppNavbar />
            <p>homepage</p>
            <Calendar />
        </Container>

    );
}

export default UserHomePage;