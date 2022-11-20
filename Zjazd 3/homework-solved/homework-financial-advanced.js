const financialData = require('./financial.json');

console.log('Financial data: ', JSON.stringify(getFiancialObject(), null, 3));

function getFiancialObject() {
  const financialObject = {
    moneySpentIn2014: getMoneySpentIn(2014),
    spendingsPerCompany: getSpendingsPer('company'),
    spendingsPerType: getSpendingsPer('Type'),
    spendingsPerMonth: getSpendingsPer('date', convertToMonth),
    spendingsPerWeekday: getSpendingsPer('date', convertToWeekday),
  };
  // TODO (create functions for calculations below)
  return financialObject;
}

// TODO (util functions)
function getMoneySpentIn(year) {
  return financialData.reduce((sum, currentPayment) => {
    if (isInYear(year, currentPayment.detailsOfPayent.date)) {
      const currentCost = +currentPayment.cost;
      sum += currentCost;
    }
    return +sum.toFixed(2);
  }, 0);
}

function isInYear(year, polishDateString) {
  return polishDateString.includes(year.toString());
}

function getSpendingsPer(field, modifyKey) {
  return financialData.reduce((accumulatorObj, currentPayment) => {
    const key = getKeyFromValue(field, currentPayment, modifyKey);
    const currentCost = +currentPayment.cost;
    addCostToObject(currentCost, accumulatorObj, key);
    return accumulatorObj;
  }, {});
}

function getKeyFromValue(field, paymentObject, modifyKey) {
  const valueOfField = getValueFromField(field, paymentObject);
  let key = valueOfField;
  if (modifyKey) {
    key = modifyKey(valueOfField);
  }
  return key;
}

function getValueFromField(field, paymentObject) {
  return paymentObject[field] || paymentObject.detailsOfPayent[field];
}

function addCostToObject(cost, object, key) {
  if (object[key] === undefined) {
    object[key] = 0;
  }
  object[key] += cost;
}

function convertToMonth(polishDateString) {
  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const monthIndex = +polishDateString.split('-')[1];
  return MONTHS[monthIndex];
}

function convertToWeekday(polishDateString) {
  const WEEK_DAYS = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  const dateSplit = polishDateString.split('-');
  const year = +dateSplit[2];
  const monthIndex = +dateSplit[1] - 1;
  const day = +dateSplit[0];
  const dateObject = new Date(year, monthIndex, day);
  return WEEK_DAYS[dateObject.getDay()];
}
