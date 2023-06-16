class AuctionHouse {
  constructor() {
    this.bidders = [];
    this.currentBidder = null;
    this.currentBid = 0;
  }

  registerBidder(bidder) {
    this.bidders.push(bidder);
    bidder.setMediator(this);
  }

  placeBid(bidder, amount) {
    if (this.currentBid < amount) {
      this.currentBidder = bidder;
      this.currentBid = amount;
      this.notifyBidders();
    }
  }

  notifyBidders() {
    this.bidders.forEach((bidder) => {
      bidder.notify(this.currentBidder, this.currentBid);
    });
  }
}

class Bidder {
  constructor(name) {
    this.name = name;
    this.mediator = null;
  }

  setMediator(mediator) {
    this.mediator = mediator;
  }

  placeBid(amount) {
    if (this.mediator) {
      this.mediator.placeBid(this, amount);
    }
  }

  notify(currentBidder, currentBid) {
    if (currentBidder === this) {
      console.log(
        `${this.name}: Congratulations! You are the highest bidder with $${currentBid}`
      );
    } else {
      console.log(
        `${this.name}: ${currentBidder.name} is currently the highest bidder with $${currentBid}`
      );
    }
  }
}

const auctionHouse = new AuctionHouse();

const bidder1 = new Bidder('John');
const bidder2 = new Bidder('Jane');
const bidder3 = new Bidder('Bob');

auctionHouse.registerBidder(bidder1);
auctionHouse.registerBidder(bidder2);
auctionHouse.registerBidder(bidder3);

bidder1.placeBid(100);
bidder2.placeBid(150);
bidder3.placeBid(200);
