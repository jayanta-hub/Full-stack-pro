const address = require("./cstmr_address");
class employee {
    constructor(name, id, sal, position, address) {
        this.Name = name;
        this.id = id;
        this.salary = sal;
        this.position = position;
        this.address = address;
    }
}
let emp = new employee(" Jayanta Garu", 101, 50000, "Full stack developer", new address(420, "jaleswar", "Odisha", 756035));
console.log(emp);