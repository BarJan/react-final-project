import Hebcal from 'hebcal';

class DateObj{
    #date;
    #category;
    constructor(parseDate){
        this.#date = new Hebcal.HDate(parseDate.get("pickeDate"));
        this.#category = parseDate.get("dateCategory");
    }

    getDate(){
        return this.#date.getDate();
    }

    getGreg(){
        return this.#date.greg();
    }

    getCategory(){
        return this.#category;
    }

    getMonth(){
        return this.#date.getMonth();
    }

    getFullYear(){
        return this.#date.getFullYear();
    }

    getHDate(){
        return this.#date;
    }
}

export default DateObj;