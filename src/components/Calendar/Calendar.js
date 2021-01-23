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

    const translator = {
        1: "א", 
        2: "ב",
        3: "ג",
        4: "ד",
        5: "ה",
        6: "ו",
        7: "ז",
        8: "ח",
        9: "ט",
        10: "י",
        11: "יא",
        12: "יב",
        13: "יג",
        14: "יד",
        15: "טו",
        16: "טז",
        17: "יז",
        18: "יח",
        19: "יט",
        20: "כ",
        21: "כא",
        22: "כב",
        23: "כג",
        24: "כד",
        25: "כה",
        26: "כו",
        27: "כז",
        28: "כח",
        29: "כט",
        30: "ל"
      }   

    useEffect(()=>{
        setDays();
    },[initDate]);

    function setDays(){
        let firstOfMonth =  new Hebcal.HDate(1, initDate.getMonth());
        let daysInMonth = firstOfMonth.daysInMonth();
        let firstOfMonthOffset = firstOfMonth.getDay();
        let lastOfMonthOffset = 6-Hebcal.HDate(daysInMonth, firstOfMonth.getMonth()).getDay();
        let daysInPastMonth = Hebcal.HDate(1, firstOfMonth.getMonth()-1).daysInMonth()
        let month = [];
        let daysAtMonth = [];
        for(let i=1; i <= daysInMonth + firstOfMonthOffset + lastOfMonthOffset; i++){
            if(i<=firstOfMonthOffset)
                month.push(new Hebcal.HDate(daysInPastMonth+i-firstOfMonthOffset, firstOfMonth.getMonth()-1));
            else
                month.push(new Hebcal.HDate(i-firstOfMonthOffset, firstOfMonth.getMonth()));
        }
        daysAtMonth = month.map((day, index) => <Day key={index} day={day} isHebrew={true} translator={translator} onClick={setAddDate} anotherMonth={index<firstOfMonthOffset? true : index>(daysInMonth+firstOfMonthOffset-1)? true : false}/>);
        setMonthDays(daysAtMonth);
    }

    function setAddDate(day) {
        setAddDateInit(day.greg());
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