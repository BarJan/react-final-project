import { useEffect, useState } from "react";
import 'react-calendar/dist/Calendar.css';
import Hebcal from 'hebcal';
import Day from "./Day";
import AddDate from "../AddDate/AddDate";
import { Form } from "react-bootstrap";
import gematriya from 'gematriya';


function Calendar(){

    const isHebrew = false;
    const [initDate, setInitDate] = useState(Hebcal.HDate(new Date("Jan 6 1992")));
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

    // function getJewishYears (year){
    //     const years = [];
    //     for (let i = 100; i > 0; i--) {
    //         const element = year - i;
    //         years.push(element);
    //     }
    //     years.push(year);
    //     for (let i = 1; i <= 100; i++) {
    //         const element = year + i;
    //         years.push(element);
    
    //     }
    //     return years;
    
    // }

    // function convertToHebrew (num){
    //     let a = num%10;
    //     let b = num%100;
    //     let c = num%1000;
    //     let str = "ת";
    //     if(c===7)
    //         str+="ש";
    //     else if(c===8)
    //         str+="ת";
    //     if(b===)
    //     return gematriya(num, { geresh: addGeresh, punctuate: addPunctuate });
    // }

    return(
        <div className={`month`}>
            <Form.Label>Custom select</Form.Label>
                <Form.Control as="select" value={""} custom >
                    <option value="prev">תשרי</option>
                    <option value="next">חשוון</option>
                    <option value="prev">כסליו</option>
                    <option value="next">טבת</option>
                    <option value="prev">שבט</option>
                    <option value="next">אדר</option>
                    {Hebcal(initDate.getFullYear()).isLeapYear()? <option value="next">אדר ב</option> : null }
                    <option value="prev">ניסן</option>
                    <option value="next">אייר</option>
                    <option value="prev">סיוון</option>
                    <option value="next">תמוז</option>
                    <option value="next">אב</option>
                    <option value="next">אלול</option>
                </Form.Control>
                <Form.Control as="select" value={"now"} custom onChange={(e)=> setInitDate(new Hebcal.HDate(1,1,5779))}>
                    <option value="prev1">{initDate.getYearObject().prev().year}</option>
                    <option value="prev2">{initDate.getYearObject().prev().prev().year}</option>
                    <option value="now">{initDate.getFullYear()}</option>
                    <option value="next1">{initDate.getYearObject().next().year}</option>
                    <option value="next2">{initDate.getYearObject().next().next().year}</option>
                </Form.Control>
            {monthDays} 
           <AddDate show={showAddNewDate} setShow={setShowAddNewDate} initialDate={addDateInit}/>
        </div>
    );
}

export default Calendar;