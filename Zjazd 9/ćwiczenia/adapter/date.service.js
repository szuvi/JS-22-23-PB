import { differenceInHours } from 'date-fns';

export function getDateDifferenceInH(dateStart, dateEnd) {
  return differenceInHours(dateStart, dateEnd);
}

// import dayjs from 'dayjs';

// export function getDateDifferenceInH(dateStart, dateEnd) {
//   const date1 = dayjs(dateStart);
//   const date2 = dayjs(dateEnd);
//   return date1.diff(date2, 'hour');
// }
