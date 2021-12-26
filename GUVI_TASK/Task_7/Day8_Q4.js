//Base Fare + ((Cost per minute x time of the ride) + (cost per mile x ride distance) x surge boost multiplier) + booking fee = Passengers Ride Fare.
//write a class to calculate uber price


class UberPrice{
    constructor(base_fare,costpermin,ridetime,costpermile,ridedist,surgeboost,bookingfee){
        this.base_fare = Number(base_fare);
        this.costpermin =costpermin;
        this.ridetime =ridetime;
        this.costpermile =costpermile;
        this.ridedist =ridedist;
        this.surgeboost =surgeboost;
        this.bookingfee =bookingfee;
    }
    getUberPrice(){
        
      let Fare=this.base_fare + ((this.costpermin * this.ridetime) + ( this.costpermile  * this.ridedist) *  this.surgeboost) +   this.bookingfee;
      console.log(Fare);
    }
}

let cal_price=new UberPrice(36,0.30,30, 8,2,10,5);

cal_price.getUberPrice();