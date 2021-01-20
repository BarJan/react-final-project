import { useEffect, useState } from "react";
import 'react-calendar/dist/Calendar.css';
import Hebcal from 'hebcal';
import Day from "./Day";
import AddDate from "../AddDate/AddDate";


function Calendar(){

    const [initDate, setInitDate] = useState(Hebcal.HDate(new Date()));
    const [monthDays, setMonthDays] = useState([]);
    const [showAddNewDate, setShowAddNewDate] = useState(false);
    const [addDateInit, setAddDateInit] = useState(new Date());

    useEffect(()=>{
        setDays();
    },[initDate]);

    function setDays(){
        let firstOfMonthOffset = new Hebcal.HDate(1, initDate.getMonth()).getDay();
        let daysInMonth = initDate.daysInMonth();
        let daysInPastMonth = new Hebcal.HDate(1, initDate.getMonth()-1).daysInMonth()
        let month = [];
        let daysAtMonth = [];
        for(let i=1; i <= daysInMonth + firstOfMonthOffset; i++){
            if(i<=firstOfMonthOffset)
                month.push(daysInPastMonth+i-firstOfMonthOffset);
            else
                month.push(i-firstOfMonthOffset);
        }
        daysAtMonth = month.map((day, index) => <Day key={index} day={day} isHebrew={true} onClick={setAddDate} past={index<firstOfMonthOffset? true : false}/>);
        setMonthDays(daysAtMonth);
    }

    function setAddDate(day) {
        setAddDateInit(new Hebcal.HDate(day, initDate.getMonth(),initDate.getFullYear()).greg());
        setShowAddNewDate(true);
    }

    return(
        <div className={`month`}>
            {monthDays} 
           <AddDate show={showAddNewDate} setShow={setShowAddNewDate} initialDate={addDateInit}/>
        </div>
    );
}

export default Calendar;