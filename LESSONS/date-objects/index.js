// Date object -> Objects that contain values that represent
//                dates and times. These date objects can be
//                changed and formatted

// Date() - returns your date and time
// const date = new Date();

// Date(year, month(0-11), day, hour, minute, second, ms) - custom v1
// const date = new Date(2024, 0, 1, 2, 3, 4, 5);

// const date = new Date("2024-01-02T12:00:00Z"); // custom v2

// time in which your computer thinks time starts
// const date = new Date(0);

// time since epic date
// const date = new Date(1700000000000);

const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

// const dayOfWeek = date.getDay();

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);

date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);

console.log(date);

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if (date2 > date1)
{
    console.log("Happy New Year! :D");
}