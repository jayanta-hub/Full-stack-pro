class address{
    constructor(house_no,city,state,pin){
        this.house_no=house_no;
        this.city=city;
        this.state=state;
        this.pin=pin;
    }
}
let add=new address(420,"jaleswar","Odisha",756035);
console.log(add);
module.exports = address;