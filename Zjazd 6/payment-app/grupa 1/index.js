import { createPayment } from './services/payment.service.js';
import { savePayment } from './services/repository.service.js';

async function processIncomingPayment(paymentDTO) {
  // create Payment
  const newPayment = await createPayment(paymentDTO);
  // save to repository
  savePayment(newPayment);

  // return payment
  return newPayment;
}

function processPaymentCompletion() {}

function getSummary() {}

processIncomingPayment({
  client_id: '123',
  request_amount: 100,
  currency: 'USD',
}).then((payment) => console.log(payment));
