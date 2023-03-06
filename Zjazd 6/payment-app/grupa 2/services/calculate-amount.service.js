import getExchangeRate from './currency.service.js';
import { FEE_RATE } from '../config.js';

async function calculateSettledAmount(requestAmount, currency) {
  const currencyRate = await getExchangeRate(currency);
  const amountInBaseCurrency = requestAmount * currencyRate;
  const fee = amountInBaseCurrency * FEE_RATE;
  return amountInBaseCurrency + fee;
}

export { calculateSettledAmount };
export default calculateSettledAmount;
