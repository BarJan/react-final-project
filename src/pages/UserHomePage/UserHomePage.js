import { Button, Container, Jumbotron, Modal } from "react-bootstrap";
import './UserHomePage.css';
import Calendar from "../../components/Calendar/Calendar";
import { ReactJewishDatePicker, BasicJewishDay } from "react-jewish-datepicker";
  import { Redirect } from "react-router-dom";
import { useState } from "react";

function UserHomePage(props) {
    
    const {activeUser, onLogout} = props;
    const [basicJewishDay, setBasicJewishDay] = useState();
    const [showAddNewDate, setShowAddNewDate] = useState(false);

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return(
        <div className="u-home-pg">
            <Container>
                <Button type="button" variant="outline-info" onClick={()=>setShowAddNewDate(true)}>+</Button>
            </Container>

            {showAddNewDate ?
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>הוסיפי תאריך חדש</Modal.Title>
                    </Modal.Header>
                
                    <Modal.Body>
                        <p>לחצי על התאריך לשינוי.</p>
                        <p>והוסיפי תיאור/פירוט לתאריך.</p>
                    </Modal.Body>
                    <ReactJewishDatePicker
                        value={new Date()}
                        isHebrew
                        onClick={(day) => {
                            console.log(day);
                        }}
                        />
                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=> setShowAddNewDate(false)}>Cancel</Button>
                        <Button variant="primary" onClick={()=> {setBasicJewishDay();setShowAddNewDate(false);}}>Delete</Button>
                    </Modal.Footer>
                </Modal.Dialog>
                : null}
        </div>

    );
}

export default UserHomePage;