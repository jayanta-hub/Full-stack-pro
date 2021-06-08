class employee{
    Name= "Jayanta Garu";
    Emp_Id= 101;
    Loc= "Odisha";
    // Position= "Full stack developer";
    get_info_name(){
        return "hello";
    }
}
// console.log(new employee());
// console.log(new employee().Loc);
let x= new employee();
console.log(x.get_info_name());