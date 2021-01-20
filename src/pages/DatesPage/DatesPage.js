import { Container, Table } from "react-bootstrap";
import Parse from 'parse';
import './DatesPage.css';
import DateObj from "../../models/DateObj";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

function DatesPage(props){

    const {activeUser} = props;
    const [userDates,setUserDates] =useState([]);

    const date = Parse.Object.extend('date');
    const query = new Parse.Query(date);
    let dates = [];

    useEffect(() => {
        readDates();
    },[]);

    
    if (!activeUser) {
        return <Redirect to="/"/>
    }

    function readDates() {
        query.equalTo("userId", Parse.User.current());
        query.find().then((results) => {
            // You can use the "get" method to get the value of an attribute
            // Ex: response.get("<ATTRIBUTE_NAME>")
            dates = results.map(result => new DateObj(result));
            setUserDates(dates.map((date,index) => <tr><td>{index+1}</td><td>{date.getDate()}</td><td>{date.getMonth()}</td><td>{date.getFullYear()}</td></tr>));
            console.log(results);
        }, (error) => {
            console.error('Error while fetching date', error);
        });
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