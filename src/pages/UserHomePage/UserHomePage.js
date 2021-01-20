import { Button, Container } from "react-bootstrap";
import './UserHomePage.css';
import { Redirect } from "react-router-dom";
import { useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import AddDate from "../../components/AddDate/AddDate";

function UserHomePage(props) {
    
    const {activeUser} = props;
    const [showAddNewDate, setShowAddNewDate] = useState(false);

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return(
        <div className="u-home-pg">
            
            <Container>
                <Button type="button" variant="outline-info" onClick={()=>setShowAddNewDate(true)}>+</Button>
                <Calendar />
            </Container>

            <AddDate show={showAddNewDate} setShow={setShowAddNewDate} initialDate={new Date()}/>
        </div>

    );
}

export default UserHomePage;