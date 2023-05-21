class PaymentFactory {
  createPayment(type, paymentDetails) {
    switch (type) {
      case 'Credit Card': {
        return new CreditCard(paymentDetails);
      }
      case 'PayPal': {
        return new PayPal(paymentDetails);
      }
      case 'Bank Transfer': {
        return new BankTransfer(paymentDetails);
      }
      default: {
        throw new Error(`Invalid payment type: ${type}`);
      }
    }
  }
}

class CreditCard {
  constructor(paymentDetails) {
    this.type = 'Credit Card';
    this.paymentDetails = paymentDetails;
  }
}

class PayPal {
  constructor(paymentDetails) {
    this.type = 'PayPal';
    this.paymentDetails = paymentDetails;
  }
}

class BankTransfer {
  constructor(paymentDetails) {
    this.type = 'Bank Transfer';
    this.paymentDetails = paymentDetails;
  }
}

const paymentFactory = new PaymentFactory();

const creditCard = paymentFactory.createPayment('Credit Card', {
  cardNumber: '1234 5678 9012 3456',
  expiryDate: '01/25',
  cvv: '123',
});
console.log(creditCard);

const payPal = paymentFactory.createPayment('PayPal', {
  email: 'example@example.com',
  password: 'password',
});
console.log(payPal);

const bankTransfer = paymentFactory.createPayment('Bank Transfer', {
  accountNumber: '1234567890',
  sortCode: '12-34-56',
});
console.log(bankTransfer);
