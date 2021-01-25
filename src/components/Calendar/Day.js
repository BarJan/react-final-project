import Parse from 'parse';
import { useEffect, useState } from 'react';

function Day(props) {
    
    const {special, day, isHebrew, translator, onClick, anotherMonth} = props;
    const [colorClassName, setColorClassName] = useState("");
    const [moreTitle, setMoreTitle] = useState('');

    let showDay = isHebrew ? translator[day.getDate()] : day.getDate();
    useEffect(()=>{
        const isSpecial = special.find((spec) => (spec.getDate() === day.getDate() && spec.getMonth() === day.getMonth() &&
                                                                                spec.getFullYear() === day.getFullYear()));
        isSpecial ? setColorClassName(" "+isSpecial.getCategory()) : setColorClassName("");
        isSpecial ? setMoreTitle('\n' + isSpecial.getCategory()) : setMoreTitle(""); 
    });

    return (
        <div className={"day"+(anotherMonth? " pastMonth" : "")+colorClassName} onClick={() => anotherMonth? null : onClick(day)} title={day.greg().toDateString().substring(4)+" "+day.toString(isHebrew?"h":null)+moreTitle}>
            {showDay}
        </div>
    )
}

export default Day;