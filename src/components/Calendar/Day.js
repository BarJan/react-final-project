import Parse from 'parse';
import { useEffect, useState } from 'react';

function Day(props) {
    
    const {special, day, isHebrew, translator, onClick, anotherMonth} = props;
    const [colorClassName, setColorClassName] = useState("");
    const [moreTitle, setMoreTitle] = useState('');

    let showDay = isHebrew ? translator[day.getDate()] : day.getDate();

    //determine which className set to the div and span of this Day component according to type of event
    useEffect(()=>{
        const isSpecial = special.find((spec) => (spec.getDate() === day.getDate() && spec.getMonth() === day.getMonth() &&
                                                                                spec.getFullYear() === day.getFullYear()));
        isSpecial ? setColorClassName(" "+isSpecial.getCategory()) : setColorClassName("");
        isSpecial ? setMoreTitle('\n' + isSpecial.getCategory()) : setMoreTitle("");
        if(isSpecial){
            console.log(isSpecial);
        }
    });

    return (
        <div className={"day"+(anotherMonth? " pastMonth" : "")+colorClassName} onClick={() => anotherMonth? null : onClick(day)} title={day.greg().toDateString().substring(4)+" "+day.toString(isHebrew?"h":null)+moreTitle}>
            <span class="dayDate">{showDay}</span><span class="dayDate">{day.greg().getDate()}</span>
        </div>
    )
}

export default Day;