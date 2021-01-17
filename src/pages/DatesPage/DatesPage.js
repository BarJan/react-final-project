import { Container, Jumbotron, Table } from "react-bootstrap";
import AppNavbar from "../../components/NavBar/AppNavbar";
import Parse from 'parse';
import './DatesPage.css';
import DateObj from "../../models/DateObj";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";

function DatesPage(props){

    const {activeUser} = props;

    const date = Parse.Object.extend('date');
    const query = new Parse.Query(date);
    
    let userDates =[];
    let dates = [];

    useEffect(() => {
        readDates();
    },[]);

    function readDates() {
        query.equalTo("userId", Parse.User.current());
        query.find().then((results) => {
            // You can use the "get" method to get the value of an attribute
            // Ex: response.get("<ATTRIBUTE_NAME>")
            dates = results.map(result => new DateObj(result));
            userDates = dates.map(date => <tr><td>{date.getDate()}</td><td>{date.getMonth()}</td><td>{date.getFullYear()}</td></tr>);
            console.log(results);
        }, (error) => {
            console.error('Error while fetching date', error);
        });
    }


    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return(
        <div className="dates-pg">
            <Container>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>יום</th>
                        <th>חודש</th>
                        <th>שנה</th>
                    </tr>
                </thead>
                <tbody>
                    {userDates}
                </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default DatesPage;