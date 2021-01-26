import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { ReactJewishDatePicker } from "react-jewish-datepicker";
import Parse from 'parse';
import Hebcal from "hebcal";

function AddDate(props) {
    const {show ,setShow, initialDate, hebDate} = props;
    const [dateDetails, setDateDetails] = useState("");
    const [dateToAdd, setDateToAdd] = useState(initialDate);
    const [dateCategory, setDateCategory] = useState('other');




    function addDate() {
        let choosedDate = dateToAdd;
        let hebChoosedDate = new Hebcal.HDate(dateToAdd);
        choosedDate.setHours(2,0,0,1000);
        const date = Parse.Object.extend('date');
        const myNewObject = new date();
        myNewObject.set('pickeDate', choosedDate);
        myNewObject.set('userId', Parse.User.current());
        myNewObject.set('dateCategory', dateCategory);
        myNewObject.set('details', dateDetails);
        myNewObject.set('day', hebChoosedDate.getDate());
        myNewObject.set('month', hebChoosedDate.getMonth());
        myNewObject.set('year', hebChoosedDate.getFullYear());

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

        if(dateCategory === 'v'){
            let additionDate = dateToAdd;
            let hebAdditionDate = new Hebcal.HDate(dateToAdd);
            hebAdditionDate.setDate(hebAdditionDate.getDate()+29);
            additionDate = hebAdditionDate.greg();
            additionDate.setHours(2,0,0,1000);
            const date = Parse.Object.extend('date');
            const myNewObject = new date();

            myNewObject.set('pickeDate', additionDate);
            myNewObject.set('userId', Parse.User.current());
            myNewObject.set('dateCategory', 'p');
            myNewObject.set('details', dateDetails);
            myNewObject.set('day', hebAdditionDate.getDate());
            myNewObject.set('month', hebAdditionDate.getMonth());
            myNewObject.set('year', hebAdditionDate.getFullYear());
    
            myNewObject.save().then(
                (result) => {
                    if (typeof document !== 'undefined')
                        console.log('date created', result);
                    },
                    (error) => {
                        if (typeof document !== 'undefined') alert(`אוי לא, משהו קרה :( נסי להזין תאריך חדש ליומן)`);
                            console.error('Error while creating date: ', error);
                    }
            );
        }

        if(dateCategory === 'h'){
            let additionDate = dateToAdd;
            let hebAdditionDate = new Hebcal.HDate(dateToAdd);
            hebAdditionDate.setDate(hebAdditionDate.getDate()+6);
            additionDate = hebAdditionDate.greg();
            additionDate.setHours(2,0,0,1000);
            const date = Parse.Object.extend('date');
            const myNewObject = new date();
   
            myNewObject.set('pickeDate', additionDate);
            myNewObject.set('userId', Parse.User.current());
            myNewObject.set('dateCategory', 'm');
            myNewObject.set('details', dateDetails);
            myNewObject.set('day', hebAdditionDate.getDate());
            myNewObject.set('month', hebAdditionDate.getMonth());
            myNewObject.set('year', hebAdditionDate.getFullYear());
    
            myNewObject.save().then(
                (result) => {
                    if (typeof document !== 'undefined')
                        console.log('date created', result);
                    },
                    (error) => {
                        if (typeof document !== 'undefined') alert(`אוי לא, משהו קרה :( נסי להזין תאריך חדש ליומן)`);
                            console.error('Error while creating date: ', error);
                    }
            );
        }

        setShow(false);
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
                <Form.Control as="select" value={dateCategory} custom onChange={(e)=> setDateCategory(e.target.value)}>
                        <option value='other'>אחר</option>
                        <option value='bthDay'>יום הולדת</option>
                        <option value='v'>וסת</option>
                        <option value='m'>מקוה</option>
                        <option value='h'>הפסק</option>
                    </Form.Control>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>תיאור/פירוט התאריך:</Form.Label>
                        <Form.Control as="textarea" rows={3} cols={100} value={dateDetails} onChange={(e) => setDateDetails(e.target.value)}/>
                    </Form.Group>
                </Modal.Dialog>

                <Modal.Footer>
                    <Button variant="secondary" onClick={()=> setShow(false)}>ביטול</Button>
                    <Button variant="primary" onClick={()=> addDate()}>הוסף ליומן</Button>
                </Modal.Footer>
        </Modal>
    );
}

export default AddDate;