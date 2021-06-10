class Employee {
    constructor(name, id, sal, position) {
        this.Name = name;
        this.id = id;
        this.salary = sal;
        this.position = position;
    }
}
let emp = new Employee(" Jayanta Garu", 101, 50000, "Full stack developer" );
console.log(emp);
const Address = require('./cstmr_address');
module.exports=Employee;