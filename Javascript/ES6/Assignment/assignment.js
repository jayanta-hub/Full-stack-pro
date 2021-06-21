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
        }

    },
    {
        No: 05,
        gender: "male",
        mobile: "9886955324",
        name: {
            title: "Mr",
            first: "Victor",
            last: "Ginnish"
        }
    },
    {
        No: 06,
        mobile: "8963152478",
        gender: "male",
        name: {
            title: "Mr",
            first: "Klaus-D.",
            last: "Pieper"
        }
    },
    {
        No: 07,
        mobile: "896315127",
        gender: "male",
        name: {
            title: "Mr",
            first: "Jorge",
            last: "Frazier"
        }
    },
    {
        No: 08,
        mobile: "986115127",
        gender: "male",
        name: {
            title: "Mr",
            first: "Murat",
            last: "Bademci"
        }
    },
    {
        No: 09,
        mobile: "796115127",
        gender: "male",
        name: {
        title: "Mr",
        first: "Nathaniel",
        last: "Edwards"
        }
    },
    {
        No: 10,
        mobile: "9937564825",
        gender: "male",
        name: {
        title: "Mr",
        first: "Carl",
        last: "Mortensen"
    }
},
];

let createNewEmployee = (employee) => {
    setTimeout(() => {
        employees.push(employee);
    }, 1000);
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
    }, 1000);
};
getEmployees();