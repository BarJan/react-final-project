import { Button, Modal } from "react-bootstrap";
import { ReactJewishDatePicker } from "react-jewish-datepicker";


function AddDate(props) {
    const {show ,setShow, initialDate} = props;

    return(
        <Modal centered show={show} onHide={()=> setShow(false)}>
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
                        console.log(day);
                    }}
                    className="rjp"/>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=> setShow(false)}>Cancel</Button>
                    <Button variant="primary" onClick={()=> {setShow(false);}}>Delete</Button>
                </Modal.Footer>
        </Modal>
    );
}

export default AddDate;