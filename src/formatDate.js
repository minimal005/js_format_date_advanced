'use strict';

/*
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  const dateArr = date.split(fromFormat[3]);
  const receivedDate = {};
  const changedDate = [];

  for (let i = 0; i < fromFormat.length - 1; i++) {
    switch (fromFormat[i]) {
      case 'YYYY':
        receivedDate['YY'] = dateArr[i].slice(2);
        receivedDate['YYYY'] = dateArr[i];
        break;
      case 'YY':
        receivedDate['YYYY'] = (dateArr[i] < 30 ? 20 : 19) + dateArr[i];
        receivedDate['YY'] = dateArr[i];
        break;
      default:
        receivedDate[fromFormat[i]] = dateArr[i];
        break;
    }
  }

  for (const elem of toFormat.slice(0, -1)) {
    changedDate.push(receivedDate[elem]);
  }

  return changedDate.join(toFormat[3]);
}

module.exports = formatDate;
