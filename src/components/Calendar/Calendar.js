import { useState } from "react";
import RCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Hebcal from 'hebcal';


function Calendar(){

    const [value, onChange] = useState(new Date());
    // the rest of your code

    return(
        <div>
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