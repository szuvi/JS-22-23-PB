import axios from 'axios';
import { CURRENCY_API_URL, BASE_CURRENCY } from '../config.js';

async function getExchangeRate(currency) {
  const response = await axios.get(
    `${CURRENCY_API_URL}/latest?base=${currency}&symbols=${BASE_CURRENCY}`
  );
  if (response.data.success === false) {
    throw new Error('Incorrect currency');
  }
  return response.data.rates[BASE_CURRENCY];
}

export { getExchangeRate };
export default getExchangeRate;
