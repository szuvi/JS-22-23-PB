import { getCurrencyExchangeRate } from './currency.service.js';
import { PAYMENT_FEE } from '../config.js';

async function calculateSettledAmount(requestAmount, currency) {
  const exchangeRate = await getCurrencyExchangeRate(currency);
  console.log(requestAmount);
  // settled_amount = requested_amount * currency_rate + fee
  const requestAmountInPLN = requestAmount * exchangeRate;
  return requestAmountInPLN * PAYMENT_FEE + requestAmountInPLN;
}

export { calculateSettledAmount };
export default calculateSettledAmount;
