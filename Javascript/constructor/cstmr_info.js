const Employee = require ('./customer');
class Info{
  constructor(Email,Mobile, Mobile1){
      this.Email=Email;
      this.Mobile=Mobile;
      this.Mobile1=Mobile1;
    
  }  
}

let details=new Info("jayanta.garu@gmail.com", 8917293473,7381462833);
console.log(details);