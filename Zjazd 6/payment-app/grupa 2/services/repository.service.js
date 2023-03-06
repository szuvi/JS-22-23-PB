const payments = [];

function savePayment(inputPayment) {
  payments.push(inputPayment);
}

function getPayment(paymentId) {
  const payment = payments.find(
    (currentPayment) => currentPayment.id === paymentId
  );
  if (!payment) {
    throw new Error('No such payment!');
  }
  return payment;
}

export { savePayment, getPayment };
