import { Container, Jumbotron } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import AppNavbar from "../../components/NavBar/AppNavbar";
import './HomePage.css'


function HomePage(props) {
    
    const {activeUser} = props;
 
    if (activeUser) {
        return <Redirect to="/userhome"/>
    }

    return(
        <div className="h-pg">

        </div>

    );
}

export default HomePage;