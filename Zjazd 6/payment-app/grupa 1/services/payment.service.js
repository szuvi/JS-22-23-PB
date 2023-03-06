import { v4 as generateID } from 'uuid';
import { PAYMENT_STATUS } from '../consts/payment.consts.js';
import { calculateSettledAmount } from './amount-calculation.service.js';

async function createPayment(paymentDTO) {
  const settled_amount = await calculateSettledAmount(
    paymentDTO.request_amount,
    paymentDTO.currency
  );
  const newPayment = {
    ...paymentDTO,
    id: generateID(),
    settled_amount,
    creationDate: new Date(),
    status: PAYMENT_STATUS.PENDING,
  };
  return newPayment;
}

export { createPayment };
