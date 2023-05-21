import { getDateDifferenceInH } from './date.service.js';

const dateStart = new Date(2022, 0, 24);
const dateToday = new Date();
const dateDifference = getDateDifferenceInH(dateStart, dateToday);
console.log(dateDifference);
