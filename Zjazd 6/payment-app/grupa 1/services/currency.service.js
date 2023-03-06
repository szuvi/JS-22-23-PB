import axios from 'axios';
import { CURRENCY_API_URL } from '../config.js';

async function getCurrencyExchangeRate(inputCurrency) {
  let url = `${CURRENCY_API_URL}/latest?base=${inputCurrency}&symbols=PLN`;
  const response = await axios.get(url);
  if (response.data.success === false) {
    throw new Error(response.data.error.type);
  }
  return response.data.rates.PLN;
}

export { getCurrencyExchangeRate };
export default getCurrencyExchangeRate;
