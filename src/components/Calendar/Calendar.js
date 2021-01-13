import { useState } from "react";
import RCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Hebcal from 'hebcal';


function Calendar(){

    const [value, onChange] = useState(new Date());
    // the rest of your code

    let d = new Date();

    let year = new Hebcal.HDate(new Date(2014, 0, 1));
    let date = new Date();
    //let heDate = new Hebcal.HDate(new Date(date.getFullYear,date.getMonth, date.getDate));

    return(
        <div>
            {year.getDate()}
            {year.greg().getMonth()}
            <RCalendar
            onChange={onChange}
            value={value}
            calendarType={"Hebrew"}
            locale ={"he-He"}
            />
        </div>
    );
}

export default Calendar;