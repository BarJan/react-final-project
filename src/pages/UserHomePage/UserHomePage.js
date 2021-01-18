import { Button, Container, Jumbotron, Modal } from "react-bootstrap";
import './UserHomePage.css';
import Calendar from "../../components/Calendar/Calendar";
import { ReactJewishDatePicker, BasicJewishDay } from "react-jewish-datepicker";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { getJewishMonth, getWeekdays, getGregDate, BasicJewishDate, isValidDate } from 'jewish-dates-core';
import Weekday from "../../components/Calendar/Weekday.js";
import Day from "../../components/Calendar/Day";
import Navigation from "../../components/Calendar/Navigation";

function UserHomePage(props) {
    
    const {activeUser, onLogout} = props;
    const [basicJewishDay, setBasicJewishDay] = useState();
    const [showAddNewDate, setShowAddNewDate] = useState(false);

    const dateInit = isValidDate(new Date("Nov 28 2015")) ? new Date("Nov 28 2015") : getGregDate(new Date("Nov 28 2015"));
    const [date, setDate] = useState(dateInit);
    const jewishMonth = getJewishMonth(date);
    const [selectedDay, setSelectedDay] = useState(props.value && jewishMonth.selectedDay);
    const [isOpen, setOpen] = useState(false);

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    const setBasicJewishDate = (basicJewishDate) => {
        const gregDate = getGregDate(basicJewishDate);
        setDate(gregDate);
    };

    function handleClick(day){
        const fullDate = props.isHebrew ? day.jewishDateStrHebrew : day.jewishDateStr;

        setSelectedDay(day);
        props?.onClick(day); 
        setOpen(!isOpen)
    }

    function handleNavigationClick(month, year){
        const basicJewishDate = new Date(getGregDate(props.value)) ;
        setBasicJewishDate(basicJewishDate);
    }

    return(
        <div className="u-home-pg">
            
            <Container>
                <Button type="button" variant="outline-info" onClick={()=>setShowAddNewDate(true)}>+</Button>
                <Navigation month={jewishMonth.jewishMonthString} year={jewishMonth.jewishYear} isHebrew={true} onClick={handleNavigationClick} />
                <div className={`month`}>
                    {getWeekdays(true).map((weekday, index) => {
                        return <Weekday key={index} value={weekday} />
                    })}
                    {jewishMonth.days.map((day, index) => {
                        return <Day key={index} {...day} onClick={handleClick} selectedDay={selectedDay} isHebrew={true} />
                    })}
                </div>
            </Container>

            <Modal centered show={showAddNewDate} onHide={()=> setShowAddNewDate(false)}>
                    <Modal.Header>
                        <Modal.Title>הוסיפי תאריך חדש</Modal.Title>
                    </Modal.Header>
                
                    <Modal.Body>
                        <p>לחצי על התאריך לשינוי.</p>
                        <p>והוסיפי תיאור/פירוט לתאריך.</p>
                    </Modal.Body>
                    <ReactJewishDatePicker
                        value={new Date("Nov 28 2015")}
                        isHebrew
                        onClick={(day) => {
                            console.log(day);
                        }}
                        className="rjp"/>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=> setShowAddNewDate(false)}>Cancel</Button>
                        <Button variant="primary" onClick={()=> {setBasicJewishDay();setShowAddNewDate(false);}}>Delete</Button>
                    </Modal.Footer>
            </Modal>
        </div>

    );
}

export default UserHomePage;