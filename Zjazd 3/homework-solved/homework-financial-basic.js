const financialData = require('./financial.json');

console.log('Financial data: ', JSON.stringify(getFiancialObject(), null, 3));

function getFiancialObject() {
  const financialObject = {
    moneySpentIn2014: getMoneySpentIn2014(),
    spendingsPerCompany: getSpendingsPerCompany(),
    spendingsPerType: getSpendingsPerType(),
    spendingsPerMonth: getSpendingsPerMonth(),
    spendingsPerWeekday: getSpendingsPerWeekday(),
  };
  // TODO (create functions for calculations below)
  return financialObject;
}

// TODO (util functions)
function getMoneySpentIn2014() {
  return financialData.reduce((sum, currentPayment) => {
    if (currentPayment.detailsOfPayent.date.includes('2014')) {
      const currentCost = +currentPayment.cost;
      sum += currentCost;
    }
    return +sum.toFixed(2);
  }, 0);
}

function getSpendingsPerCompany() {
  return financialData.reduce((spendingsPerCompany, currentPayment) => {
    const currentCompany = currentPayment.detailsOfPayent.company;
    const currentCost = +currentPayment.cost;
    if (spendingsPerCompany[currentCompany] === undefined) {
      spendingsPerCompany[currentCompany] = 0;
    }
    spendingsPerCompany[currentCompany] += currentCost;
    return spendingsPerCompany;
  }, {});
}

function getSpendingsPerType() {
  return financialData.reduce((spendingsPerType, currentPayment) => {
    const currentType = currentPayment.detailsOfPayent.Type;
    const currentCost = +currentPayment.cost;
    if (spendingsPerType[currentType] === undefined) {
      spendingsPerType[currentType] = 0;
    }
    spendingsPerType[currentType] += currentCost;
    return spendingsPerType;
  }, {});
}

function getSpendingsPerMonth() {
  return financialData.reduce((spendingsPerMonth, currentPayment) => {
    const currentMonth = currentPayment.detailsOfPayent.date.split('-')[1];
    const currentCost = +currentPayment.cost;
    if (spendingsPerMonth[currentMonth] === undefined) {
      spendingsPerMonth[currentMonth] = 0;
    }
    spendingsPerMonth[currentMonth] += currentCost;
    return spendingsPerMonth;
  }, {});
}

function getSpendingsPerWeekday() {
  return financialData.reduce((spendingsPerMonth, currentPayment) => {
    const dateSplit = currentPayment.detailsOfPayent.date.split('-');
    const dateObject = new Date(
      +dateSplit[2],
      +dateSplit[1] - 1,
      +dateSplit[0]
    );
    const dayOfWeek = dateObject.getDay();
    const currentCost = +currentPayment.cost;
    if (spendingsPerMonth[dayOfWeek] === undefined) {
      spendingsPerMonth[dayOfWeek] = 0;
    }
    spendingsPerMonth[dayOfWeek] += currentCost;
    return spendingsPerMonth;
  }, {});
}
