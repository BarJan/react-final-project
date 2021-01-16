import { Container, Jumbotron } from "react-bootstrap";
import AppNavbar from "../../components/NavBar/AppNavbar";
import Parse from 'parse';
import './DatesPage.css';

function DatesPage(props){

    const {activeUser} = props;

    const date = Parse.Object.extend('date');
    const query = new Parse.Query(date);
    
    function readDates() {
        query.equalTo("userId", Parse.User.current());
        query.find().then((results) => {
            // You can use the "get" method to get the value of an attribute
            // Ex: response.get("<ATTRIBUTE_NAME>")
            if (typeof document !== 'undefined') document.write(`date found: ${JSON.stringify(results)}`);
            console.log('date found', results[0].get("pickeDate"));
        }, (error) => {
            if (typeof document !== 'undefined') document.write(`Error while fetching date: ${JSON.stringify(error)}`);
            console.error('Error while fetching date', error);
        });
    }

    return(
        <div className="dates-pg">
            <Jumbotron>
                <Container>
                    <h1>Pure</h1>
                </Container>
            </Jumbotron>
            <Container>
                <AppNavbar />
                {readDates()}
            </Container>
        </div>
    );
}

export default DatesPage;