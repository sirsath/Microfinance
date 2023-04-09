import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { userInputs } from "../../formSource"
import { useState } from "react"
import { userRows, userColumns } from "../../datatablesource"

const List = () => {
  const [userData, setUserData] = useState(userRows);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable
          title='Users'
          inputs={userInputs}
          rows={userData}
          setData={setUserData}
          columns={userColumns}
        />
      </div>
    </div>
  )
}

export default List