import { Container } from "react-bootstrap";
import AppNavbar from "../../components/NavBar/AppNavbar";

function DatesPage(props){

    const {activeUser} = props;

    

    return(
        <Container>
            <AppNavbar />
        </Container>
    );
}

export default DatesPage;