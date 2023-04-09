export const userColumns = [
    { field: "id", headerName: "ID", width: 30 },
    {
        field: "company",
        headerName: "Company Name",
        width: 170,
        renderCell: (params) => {
            return (
                <div>
                    {params.row.company}
                </div>
            );
        },
    },
    {
        field: "alias",
        headerName: "Alias name",
        width: 150,
    },

    {
        field: "deals",
        headerName: "Deals In",
        width: 100,
    },

    {
        field: "tags",
        headerName: "Tags",
        width: 70,
    },

    {
        field: "adminApproval",
        headerName: "Admin Approval",
        width: 100,
        renderCell: (params) => {
            return (
                <div>
                    {!params.row.adminApproval ? 'No' : 'Yes'}
                </div>
            )
        }
    },

    {
        field: "contactNo",
        headerName: "Contact No.",
        width: 130,
    },

    {
        field: "location",
        headerName: "Location",
        width: 130,
    },

];

//temporary data
export const userRows = [
    {
        id: 1,
        company: "Beyond Stay",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        alias: "Make My Trip",
        contactNo: 9876452535,
        location: 'Himachal Pradesh',
        deals: 'Hotel',
        tags: 'couple',
        adminApproval: false,
    },
    {
        id: 2,
        company: "Group",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        alias: "Make My Trip",
        contactNo: 9876452542,
        location: 'Manali',
        deals: 'Package',
        tags: 'couple',
        adminApproval: true,
    },
    {
        id: 3,
        company: "IRCTC",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        alias: "IRCTC",
        contactNo: 9876452545,
        location: 'Bhandardara',
        deals: 'Other',
        tags: 'couple',
        adminApproval: false,
    },
    {
        id: 4,
        company: "Bhandardara camping",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        alias: "Make My Trip",
        contactNo: 9876452516,
        location: 'Bhandardara',
        deals: 'Hotel',
        tags: 'couple',
        adminApproval: true,
    },
    {
        id: 5,
        company: "Beyond Stay",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        alias: "Beyond Stay",
        contactNo: 9876452522,
        location: 'Himachal Pradesh',
        deals: 'Hotel',
        tags: 'couple',
        adminApproval: false,
    },
    {
        id: 6,
        company: "Beyond Stay",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        alias: "Make My Trip",
        contactNo: 9876452515,
        location: 'Himachal Pradesh',
        deals: 'Hotel',
        tags: 'couple',
        adminApproval: true,
    },
    {
        id: 7,
        company: "Beyond Stay",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        alias: "Make My Trip",
        contactNo: 9876452544,
        location: 'Himachal Pradesh',
        deals: 'Hotel',
        tags: 'couple',
        adminApproval: false,
    },
    {
        id: 8,
        company: "Beyond Stay",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        alias: "Make My Trip",
        contactNo: 9876452536,
        location: 'Himachal Pradesh',
        deals: 'Hotel',
        tags: 'couple',
        adminApproval: false,
    },
    {
        id: 9,
        company: "Beyond Stay",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        alias: "Make My Trip",
        contactNo: 9876452565,
        location: 'Himachal Pradesh',
        deals: 'Hotel',
        tags: 'couple',
        adminApproval: false,
    },
    {
        id: 10,
        company: "Beyond Stay",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        alias: "Make My Trip",
        contactNo: 9876452565,
        location: 'Himachal Pradesh',
        deals: 'Hotel',
        tags: 'couple',
        adminApproval: false,
    },
];
