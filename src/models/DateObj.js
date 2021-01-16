import Hebcal from 'hebcal';

class DateObj{
    constructor(parseDate){
        this.date = new Hebcal.HDate(parseDate.get("pickeDate"));
    }
}

export default DateObj;