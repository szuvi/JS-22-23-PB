import { v4 as generateId } from 'uuid';
import calculateSettledAmount from './calculate-amount.service.js';
import { PAYMENT_STATUS } from '../consts/payment.consts.js';

async function createPayment(paymentDTO) {
  const settled_amount = await calculateSettledAmount(
    paymentDTO.request_amount,
    paymentDTO.currency
  );
  const payment = {
    ...paymentDTO,
    id: generateId(),
    settled_amount,
    creation_date: new Date(),
    status: PAYMENT_STATUS.PENDING,
  };
  return payment;
}

function completePayment(payment) {
  payment.status = PAYMENT_STATUS.SUCCESS;
  payment.payment_date = new Date();
}

export { createPayment, completePayment };
