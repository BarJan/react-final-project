import { Container, Jumbotron } from "react-bootstrap";
import './UserHomePage.css';
import Calendar from "../../components/Calendar/Calendar";
import AppNavbar from "../../components/NavBar/AppNavbar";
import { Redirect } from "react-router-dom";

function UserHomePage(props) {
    
    const {activeUser, onLogout} = props;

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return(
        <div className="u-home-pg">
            <Container>
                <p>homepage</p>
                <Calendar />
            </Container>
        </div>

    );
}

export default UserHomePage;