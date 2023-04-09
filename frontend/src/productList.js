export const packageColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "package",
    headerName: "Package Name",
    width: 150,
    renderCell: (params) => {
      return (
        <div>
          {params.row.packageName}
        </div>
      );
    },
  },
  {
    field: "country",
    headerName: "Country",
    width: 100,
  },

  {
    field: "stay",
    headerName: "Stay",
    width: 150,
  },

  {
    field: "createdBy",
    headerName: "Created By",
    width: 130,
  },

  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const packageRows = [
  {
    id: 1,
    packageName: "Himachal",
    status: "active",
    country: "India",
    stay: '2Days/1Nights',
    createdBy: 'Tirthesh',
  },
  {
    id: 2,
    packageName: "Manali",
    country: "India",
    status: "passive",
    stay: '2Days/1Nights',
    createdBy: 'Tirthesh',
  },
  {
    id: 3,
    packageName: "Bhandardara",
    country: "India",
    status: "pending",
    stay: '2Days/1Nights',
    createdBy: 'Tirthesh',
  },
  {
    id: 4,
    packageName: "Himachal",
    country: "India",
    status: "active",
    stay: '2Days/1Nights',
    createdBy: 'Tirthesh',
  },
  {
    id: 5,
    packageName: "Himachal",
    country: "India",
    status: "passive",
    stay: '2Days/1Nights',
    createdBy: 'Tirthesh',
  },
  {
    id: 6,
    packageName: "Himachal",
    country: "India",
    status: "active",
    stay: '2Days/1Nights',
    createdBy: 'Tirthesh',
  },
  {
    id: 7,
    packageName: "Himachal",
    country: "India",
    status: "passive",
    stay: '2Days/1Nights',
    createdBy: 'Tirthesh',
  },
  {
    id: 8,
    packageName: "Himachal",
    country: "India",
    status: "active",
    stay: '2Days/1Nights',
    createdBy: 'Tirthesh',
  },
  {
    id: 9,
    packageName: "Himachal",
    country: "India",
    status: "pending",
    stay: '2Days/1Nights',
    createdBy: 'Tirthesh',
  },
  {
    id: 10,
    packageName: "Himachal",
    country: "India",
    status: "active",
    stay: '2Days/1Nights',
    createdBy: 'Tirthesh',
  },
];
