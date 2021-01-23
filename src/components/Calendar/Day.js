import * as React from 'react';
import Parse from 'parse';

function Day(props) {
    
    const {day, isHebrew, translator, onClick, anotherMonth} = props;

    let showDay = isHebrew ? translator[day.getDate()] : day.getDate();

    function colorClassName() {
        const date = Parse.Object.extend('date');
        const query = new Parse.Query(date);
        query.equalTo("pickeDate", new Date("2021-01-06T08:21:00.000Z"));
        query.equalTo("userId", Parse.User.current());
        query.find().then((results) => {
        // You can use the "get" method to get the value of an attribute
        // Ex: response.get("<ATTRIBUTE_NAME>")
            console.log(results);
            let dateCategory = results[0].get("dateCategory");
            console.log(dateCategory);
            if (dateCategory==="other"){
                return dateCategory;
            }
           
        }, (error) => {
            return "";
            // if (typeof document !== 'undefined')
            //     console.error('Error while fetching date', error);
          });
    }

    return (
        <div className={"day"+(anotherMonth? " pastMonth" : "")+" "+colorClassName()} onClick={() => anotherMonth? null : onClick(day)} title={day.greg().toDateString().substring(4)+" "+day.toString(isHebrew?"h":null)}>
            {showDay}
        </div>
    )
}

export default Day;