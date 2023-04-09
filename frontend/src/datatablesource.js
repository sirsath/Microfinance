export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="user" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },

  {
    field: "leads",
    headerName: "Leads",
    width: 100,
  },

  {
    field: "status",
    headerName: "Status",
    width: 160,
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
export const userRows = [
  {
    id: 1,
    username: "Tirth",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "Tirth@gmail.com",
    age: 35,
    leads: 20,
  },
  {
    id: 2,
    username: "Rohan",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Rohan@gmail.com",
    status: "passive",
    age: 42,
    leads: 30,
  },
  {
    id: 3,
    username: "Sameer",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Sameer@gmail.com",
    status: "pending",
    age: 45,
    leads: 30,
  },
  {
    id: 4,
    username: "Milind",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Milind@gmail.com",
    status: "active",
    age: 16,
    leads: 20,
  },
  {
    id: 5,
    username: "Suraj",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Suraj@gmail.com",
    status: "passive",
    age: 22,
    leads: 50,
  },
  {
    id: 6,
    username: "Rohan",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Rohan@gmail.com",
    status: "active",
    age: 15,
    leads: 20,
  },
  {
    id: 7,
    username: "Milind",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Milind@gmail.com",
    status: "passive",
    age: 44,
    leads: 10,
  },
  {
    id: 8,
    username: "Sameer",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Sameer@gmail.com",
    status: "active",
    age: 36,
    leads: 20,
  },
  {
    id: 9,
    username: "Mahesh",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Mahesh@gmail.com",
    status: "pending",
    age: 65,
    leads: 40,
  },
  {
    id: 10,
    username: "Suraj",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Suraj@gmail.com",
    status: "active",
    age: 65,
    leads: 20,
  },
];
