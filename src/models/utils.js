
export const gematria = {
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

export const translator = {
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

export function convertToHebrew (yearNum){
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