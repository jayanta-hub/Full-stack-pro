let employees = [
    {
        city: "Leirvik",
        state: "Vest-Agder",
        country: "Norway",
        postcode: "6220",
        coordinates: {
            latitude: "55.6425",
            longitude: "-21.3266"
        },
        timezone: {
            offset: "+4:30",
            description: "Kabul"
        }
    },

    {
        city: "Haaren",
        state: "Drenthe",
        country: "Netherlands",
        postcode: 47400,
        coordinates: {
            latitude: "47.4303",
            longitude: "76.7272"
        },
        timezone: {
            offset: "-4:00",
            description: "Atlantic Time (Canada), Caracas, La Paz"
        }
    },
    {
        city: "Ponta Grossa",
        state: "Ceará",
        country: "Brazil",
        postcode: 29150,
        coordinates: {
            latitude: "-73.3167",
            longitude: "-179.1829"
        },
        timezone: {
            offset: "+5:00",
            description: "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
    },
    {
        city: "Atibaia",
        state: "Amapá",
        country: "Brazil",
        postcode: 98087,
        coordinates: {
            latitude: "-77.3216",
            longitude: "41.5722"
        },
        timezone: {
            offset: "+1:00",
            description: "Brussels, Copenhagen, Madrid, Paris"
        }
    },
    {
        city: "Aylmer",
        state: "Saskatchewan",
        country: "Canada",
        postcode: "A3O7T6",
        coordinates: {
            latitude: "-68.4912",
            longitude: "-170.8868"
        },
        timezone: {
            offset: "-1:00",
            description: "Azores, Cape Verde Islands"
        },
    },
    {
        city: "Königsberg In Bayern",
        state: "Baden-Württemberg",
        country: "Germany",
        postcode: 50710,
        coordinates: {
            latitude: "-44.1182",
            longitude: "-15.1105"
        },
        timezone: {
            offset: "+3:00",
            description: "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
    },
    {
        city: "Cardiff",
        state: "Tayside",
        country: "United Kingdom",
        postcode: "R40 5SW",
        coordinates: {
            latitude: "5.3515",
            longitude: "-21.2345"
        },
        timezone: {
            offset: "-9:00",
            description: "Alaska"
        }
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
            <td> ${employee.city}</td>
            <td> ${employee.state}</td>
            <td> ${employee.country}</td>
            <td> ${employee.postcode}</td>
            <td> ${employee.coordinates.latitude}</td>
            <td> ${employee.coordinates.longitude}</td>
            <td> ${employee.timezone.offset}</td>
            <td> ${employee.timezone.description}</td>
            </tr>`;
        });
        document.querySelector("#table-body").innerHTML = employeeRows;
    }, 000);
};
getEmployees();