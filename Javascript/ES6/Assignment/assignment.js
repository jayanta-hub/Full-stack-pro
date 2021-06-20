let employees = [
    {
        No: 01,
        gender: "Male",
        mobile: "8917293473",
        name: {
            title: "Mr",
            first: "Jayanta",
            last: "Garu"
        }

    },
    {
        No: 02,
        gender: "female",
        mobile: "7381462833",
        name: {
            title: "Mrs",
            first: "Tapaswani",
            last: "Panda"
        }
    },
    {
        No: 03,
        gender: "Male",
        mobile: "9861425882",
        name: {
            title: "Mr",
            first: "Prasanta",
            last: "Das"
        },

    },
    {
        No: 04,
        gender: "female",
        mobile: "9861546235",
        name: {
            title: "Miss",
            first: "Yuna",
            last: "Agricola"
        },
    }
];

let createNewEmployee = (employee) => {
    setTimeout(() => {
        employees.push(employee);
    }, 000);
};
let getEmployees = () => {
    setTimeout(() => {
        let employeeRows = "";
        employees.forEach((employee) => {
            employeeRows += `<tr> 
            <td> ${employee.No}</td>
            <td> ${employee.name.title}</td>
            <td> ${employee.name.first}</td>
            <td> ${employee.name.last}</td>
            <td> ${employee.gender}</td>
            <td> ${employee.mobile}</td></tr>`;
        });
        document.querySelector("#table-body").innerHTML = employeeRows;
    }, 000);
};
getEmployees();