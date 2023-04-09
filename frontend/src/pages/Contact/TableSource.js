export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "customer",
        headerName: "Customer Name",
        width: 200,
        renderCell: (params) => {
            return (
                <div>
                    {params.row.customer}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 220,
    },

    {
        field: "contactNo",
        headerName: "Contact No.",
        width: 130,
    },

    {
        field: "city",
        headerName: "City",
        width: 130,
    },

];

//temporary data
export const userRows = [
    {
        id: 1,
        customer: "Tirth",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "Tirth@gmail.com",
        contactNo: 9876452535,
        city: 'Aurangabad',
    },
    {
        id: 2,
        customer: "Rohan",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "Rohan@gmail.com",
        contactNo: 9876452542,
        city: 'Aurangabad',
    },
    {
        id: 3,
        customer: "Sameer",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "Sameer@gmail.com",
        contactNo: 9876452545,
        city: 'Aurangabad',
    },
    {
        id: 4,
        customer: "Milind",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "Milind@gmail.com",
        contactNo: 9876452516,
        city: 'Pune',
    },
    {
        id: 5,
        customer: "Suraj",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "Suraj@gmail.com",
        contactNo: 9876452522,
        city: 'Mumbai',
    },
    {
        id: 6,
        customer: "Rohan",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "Rohan@gmail.com",
        contactNo: 9876452515,
        city: 'Aurangabad',
    },
    {
        id: 7,
        customer: "Milind",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "Milind@gmail.com",
        contactNo: 9876452544,
        city: 'Kolhapur',
    },
    {
        id: 8,
        customer: "Sameer",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "Sameer@gmail.com",
        contactNo: 9876452536,
        city: 'Aurangabad',
    },
    {
        id: 9,
        customer: "Mahesh",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "Mahesh@gmail.com",
        contactNo: 9876452565,
        city: 'Aurangabad',
    },
    {
        id: 10,
        customer: "Suraj",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "Suraj@gmail.com",
        contactNo: 9876452565,
        city: 'Aurangabad',
    },
];
