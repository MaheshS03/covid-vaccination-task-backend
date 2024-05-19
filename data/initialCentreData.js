const initialCentreData = [
    {
        name: "Central Health Clinic",
        location: "123 Main St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-01") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-02") }
        ]
    },
    {
        name: "Eastside Medical Center",
        location: "456 Elm St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-03") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-04") }
        ]
    },
    {
        name: "West End Hospital",
        location: "789 Oak St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-05") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-06") }
        ]
    },
    {
        name: "North Valley Clinic",
        location: "101 Pine St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-07") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-08") }
        ]
    },
    {
        name: "Southside Health Center",
        location: "202 Maple St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-09") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-10") }
        ]
    },
    {
        name: "Downtown Health Hub",
        location: "303 Birch St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-11") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-12") }
        ]
    },
    {
        name: "Lakeside Medical Facility",
        location: "404 Cedar St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-13") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-14") }
        ]
    },
    {
        name: "Mountainview Health Clinic",
        location: "505 Spruce St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-15") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-16") }
        ]
    },
    {
        name: "Riverfront Medical Center",
        location: "606 Willow St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-17") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-18") }
        ]
    },
    {
        name: "Uptown Health Services",
        location: "707 Ash St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-19") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-20") }
        ]
    },
    {
        name: "Parkside Clinic",
        location: "808 Cherry St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-21") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-22") }
        ]
    },
    {
        name: "Hilltop Medical Center",
        location: "909 Chestnut St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-23") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-24") }
        ]
    },
    {
        name: "Suburban Health Clinic",
        location: "1001 Poplar St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-25") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-26") }
        ]
    },
    {
        name: "Greenwood Health Services",
        location: "1102 Walnut St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-27") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-28") }
        ]
    },
    {
        name: "Seaside Medical Facility",
        location: "1203 Fir St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-29") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-30") }
        ]
    },
    {
        name: "Countryside Clinic",
        location: "1304 Sycamore St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-05-31") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-06-01") }
        ]
    },
    {
        name: "Urban Health Hub",
        location: "1405 Pinecone St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-06-02") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-06-03") }
        ]
    },
    {
        name: "City Center Health Clinic",
        location: "1506 Acorn St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-06-04") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-06-05") }
        ]
    },
    {
        name: "Harborview Medical Center",
        location: "1607 Redwood St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-06-06") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-06-07") }
        ]
    },
    {
        name: "Sunset Health Services",
        location: "1708 Palm St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-06-08") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-06-09") }
        ]
    },
    {
        name: "Crescent Health Clinic",
        location: "1809 Pear St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-06-10") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-06-11") }
        ]
    },
    {
        name: "Blue Ridge Medical Center",
        location: "1900 Peach St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-06-12") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-06-13") }
        ]
    },
    {
        name: "Sunnyvale Health Hub",
        location: "2001 Plum St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-06-14") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-06-15") }
        ]
    },
    {
        name: "Pine Valley Clinic",
        location: "2102 Mango St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-06-16") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-06-17") }
        ]
    },
    {
        name: "Redwood Health Services",
        location: "2203 Papaya St, Springfield",
        slots: 10,
        dosages: [
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-06-18") },
            { dosageType: "COVID-19 Vaccine", dateAdministered: new Date("2023-06-19") }
        ]
    }
];

module.exports = initialCentreData