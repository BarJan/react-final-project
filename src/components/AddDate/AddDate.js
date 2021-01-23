import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { ReactJewishDatePicker } from "react-jewish-datepicker";
import Parse from 'parse';

function AddDate(props) {
    const {show ,setShow, initialDate} = props;
    const [dateDetails, setDateDetails] = useState("");
    const [dateToAdd, setDateToAdd] = useState(new Date());


    const date = Parse.Object.extend('date');
    const myNewObject = new date();

    function addDate() {
        myNewObject.set('pickeDate', dateToAdd);
        myNewObject.set('userId', Parse.User.current());
        myNewObject.set('dateCategory', 'A string');
        myNewObject.set('details', dateDetails);

        myNewObject.save().then(
            (result) => {
                if (typeof document !== 'undefined') alert(`נוצר תאריך חדש!`);
                    console.log('date created', result);
                },
                (error) => {
                    if (typeof document !== 'undefined') alert(`אוי לא, משהו קרה :( נסי להזין תאריך חדש ליומן)`);
                        console.error('Error while creating date: ', error);
                }
        );    
    }

    return(
        <Modal size="lg" centered show={show} onHide={()=> setShow(false)}>
                <Modal.Header>
                    <Modal.Title>הוסיפי תאריך חדש</Modal.Title>
                </Modal.Header>
            
                <Modal.Body>
                    <p>לחצי על התאריך לשינוי.</p>
                    <p>והוסיפי תיאור/פירוט לתאריך.</p>
                </Modal.Body>

                <ReactJewishDatePicker
                    value={initialDate}
                    isHebrew
                    onClick={(day) => {
                        setDateToAdd(day.date);
                    }}
                    className="rjp"/>
                
                <Modal.Dialog>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>תיאור/פירוט התאריך:</Form.Label>
                        <Form.Control as="textarea" rows={3} cols={100} value={dateDetails} onChange={(e) => setDateDetails(e.target.value)}/>
                    </Form.Group>
                </Modal.Dialog>

                <Modal.Footer>
                    <Button variant="secondary" onClick={()=> setShow(false)}>ביטול</Button>
                    <Button variant="primary" onClick={()=> {addDate(); setShow(false);}}>הוסף ליומן</Button>
                </Modal.Footer>
        </Modal>
    );
}

export default AddDate;