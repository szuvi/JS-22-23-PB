import * as PaymentService from './services/payment.service.js';
import * as RepositoryService from './services/repository.service.js';

async function processIncomingPayment(paymentDTO) {
  const newPayment = await PaymentService.createPayment(paymentDTO);
  RepositoryService.savePayment(newPayment);
  return newPayment;
}

function processPaymentSuccess(paymentSuccessDTO) {
  const payment = RepositoryService.getPayment(
    paymentSuccessDTO.transaction_id
  );
  PaymentService.completePayment(payment);
  // save to repository
  // return edited transaction

  return payment;
}

function getSummary() {}

processIncomingPayment({
  client_id: '123',
  request_amount: 100,
  currency: 'USD',
}).then((newPayment) => {
  console.log(newPayment);
  console.log(RepositoryService.getPayment(newPayment.id));
  processPaymentSuccess({ transaction_id: newPayment.id });
  console.log(RepositoryService.getPayment(newPayment.id));
});
