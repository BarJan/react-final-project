import Parse from 'parse';
import { useEffect, useState } from "react";
import 'react-calendar/dist/Calendar.css';
import Hebcal from 'hebcal';
import Day from "./Day";
import AddDate from "../AddDate/AddDate";
import { Container, Form } from "react-bootstrap";
import gematriya from 'gematriya';
import DateObj from '../../models/DateObj';


function Calendar(){

    const isHebrew = false;
    const [initDate, setInitDate] = useState(new Hebcal.HDate(new Date()));
    const [monthDays, setMonthDays] = useState([]);
    const [showAddNewDate, setShowAddNewDate] = useState(false);
    const [addDateInit, setAddDateInit] = useState(new Date());
    const [specialDates, setSpecialDates] = useState([]);

    const date = Parse.Object.extend('date');
    const query = new Parse.Query(date);
    const month = initDate.greg().getMonth();
    const year = initDate.greg().getFullYear();
    query.equalTo("userId", Parse.User.current());
    query.equalTo("month", month);
    query.equalTo("year", year);
    
    useEffect(()=>{
        query.find().then((results) => {

            const spDates = results.map((day) => new DateObj(day));
            setSpecialDates(spDates);
            

            }, (error) => {
                console.error(error);
                setDays();

            });
    },[initDate]);

    useEffect(()=>{
        setDays();

    },[specialDates]);


    const gematria = {
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
        20: "כ",
        30: "ל",
        40: "מ",
        50: "נ",
        60: "ס",
        70: "ע",
        80: "פ",
        90: "צ",
        700: "ש",
        800: "ת"
    }

    const translator = {
        0: "",
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

    function setDays(){
        let firstOfMonth =  new Hebcal.HDate(1, initDate.getMonth(), initDate.getFullYear());
        let daysInMonth = firstOfMonth.daysInMonth();
        let firstOfMonthOffset = firstOfMonth.getDay();
        let lastOfMonthOffset = 6-Hebcal.HDate(daysInMonth, firstOfMonth.getMonth()).getDay();
        let month = [];
        let daysAtMonth = [];
        let tempDay = firstOfMonth;
        for(let i=1; i<=firstOfMonthOffset+1; i++){
            tempDay = tempDay.prev();
        }
        for(let i=1; i <= daysInMonth + firstOfMonthOffset + lastOfMonthOffset; i++){
            tempDay = tempDay.next();
            month.push(tempDay);
        }
        daysAtMonth = month.map((day, index) => <Day key={index} special={specialDates} day={day} isHebrew={true} translator={translator} onClick={setAddDate} anotherMonth={index<firstOfMonthOffset? true : index>(daysInMonth+firstOfMonthOffset-1)? true : false}/>);
        setMonthDays(daysAtMonth);
    }

    function setAddDate(day) {
        setAddDateInit(day);
        setShowAddNewDate(true);
    }

    function convertToHebrew (yearNum){
        let quotient = yearNum / 1000;     //This will give me 5
        let remainder = yearNum % 1000;    //This will give me the rest
        let quotient1 = remainder/ 100;     //This will give me 7 or 8 (because i assume that user won't get so far than 100 years back\for-wards)
        let remainder1 = remainder % 100;    //This will give me the rest
        let quotient2 = remainder1 / 10;     //This will give me the 10's
        let remainder2 = remainder1 % 10;    //This will give me the rest
        let quotient3 = remainder2;     //This will give me the 1's

        let str= "ת";
        str += gematria[Math.floor(quotient1)*100];
        quotient3===0 ? str += "'" : str +="";
        str += gematria[Math.floor(quotient2)*10];
        quotient3===0 ? str+="" : str += "'" + gematria[Math.floor(quotient3)];
        return(str);
        
    }

    return(
        <Container>
            <div>    
                <Form.Label>לשינוי חודש ושנה בחרי מהרשימה</Form.Label>
                <Form.Control as="select" value={initDate.getMonth()} custom onChange={(e)=> setInitDate( new Hebcal.HDate(initDate.getDate(),parseInt(e.target.value),(initDate.getFullYear())))}>
                        <option value={7}>תשרי</option>
                        <option value={8}>חשוון</option>
                        <option value={9}>כסליו</option>
                        <option value={10}>טבת</option>
                        <option value={11}>שבט</option>
                        <option value={12}>אדר</option>
                        {Hebcal(initDate.getFullYear()).isLeapYear()? <option value={13}>אדר ב</option> : null }
                        <option value={1}>ניסן</option>
                        <option value={2}>אייר</option>
                        <option value={3}>סיוון</option>
                        <option value={4}>תמוז</option>
                        <option value={5}>אב</option>
                        <option value={6}>אלול</option>
                    </Form.Control>
                    <Form.Control as="select" value={'0'} custom onChange={(e)=> setInitDate( new Hebcal.HDate(initDate.getDate(),initDate.getMonth(),(initDate.getFullYear()+parseInt(e.target.value))))}>
                        <option value={'-2'}>{convertToHebrew(initDate.getYearObject().prev().prev().year)}</option>
                        <option value={'-1'}>{convertToHebrew(initDate.getYearObject().prev().year)}</option>
                        <option value={'0'}>{convertToHebrew(initDate.getFullYear())}</option>
                        <option value={'1'}>{convertToHebrew(initDate.getYearObject().next().year)}</option>
                        <option value={'2'}>{convertToHebrew(initDate.getYearObject().next().next().year)}</option>
                    </Form.Control>
            </div>
            <div className={`month`}>
                
                {monthDays} 
            {showAddNewDate ? <AddDate show={showAddNewDate} setShow={setShowAddNewDate} initialDate={addDateInit.greg()} hebDate={addDateInit}/> : null}
            </div>
        </Container>
    );
}

export default Calendar;