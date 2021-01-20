import * as React from 'react';


function Day(props) {
    
    const {day, onClick, past} = props;
    let showDay = day ? day : "";
    return (
        <div className={"day"+(past? " pastMonth" : "")} title={day} onClick={() => past? null : onClick(day)}>
            {showDay}
        </div>
    )
}

export default Day;