const payments = [];

function savePayment(incomingPayment) {
  payments.push(incomingPayment);
  console.log(payments);
}

function getPayment(paymentId) {
  const payment = payments.find((payment) => payment.id === paymentId);
  if (!payment) {
    throw new Error('No such payment!');
  }
  return payment;
}

export { savePayment, getPayment };
