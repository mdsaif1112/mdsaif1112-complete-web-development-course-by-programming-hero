function findLeapYear(years) {
    const leapYears = [];
    const notLeapYears = [];
    for (let i = 0; i < years.length; i++) {
        const year = years[i];
        if((0 == year % 4) && ((0 != year % 100) || (0 == year % 400))){
            leapYears.push(year)
        } else {
            notLeapYears.push(year)
        }
    }
    return `${leapYears} are Leap years 
    ${notLeapYears} are not leap years`;
}

const years = [2100, 2200, 2400, 2023,2024,2025,2028,2030, 2032, 2031]


const leapYearsIGet = findLeapYear(years);
console.log(leapYearsIGet);