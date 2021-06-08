class employee {
    min = 500;
    constructor(name, id, sal, position) {
        this.Name = name;
        this.id = id;
        this.salary = sal;
        this.position = position;
    }
}
let emp = new employee(" Jayanta Garu", 101, 50000, "Full stack developer");
console.log(emp);