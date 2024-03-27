import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { AdminProvider } from "./Context/Authentications"
import { useEffect, useState } from "react"

function App() {
  const [Allowed, setAllowed] = useState(false)
  const [OperatorDetails, setOperatorDetails] = useState(()=> {
    const Details = OperatorInformation()
    return Details || []
  })
  const weekdayobject  = {1:'Monday', 2:'Tuesday', 3:'Wednesday', 4:'Thursday', 5:'Friday', 6:'Saturday', 7:'Sunday'}
  
  function OperatorInformation(){
    return JSON.parse(localStorage.getItem('OperatorInformation'))
  }
  useEffect(() => { localStorage.setItem('OperatorInformation', JSON.stringify(OperatorDetails)) }, [OperatorDetails])


  function UpdateInformation(user) {
    setOperatorDetails((prev) => [...prev || [], user])

  }

  function setAllowedfunction(flag){
    setAllowed(flag)
  }

  function ChangeActiveStatus(id) {
    setOperatorDetails((prevArray) =>
      prevArray.map((operator) =>
        operator.id === id
          ? { ...operator, status: !operator.status }
          : operator
      )
    );
  }

  function getDateandDay() {
    const today = new Date();
    const dateandtime = today.toLocaleString().split(',')
    return { date:dateandtime[0], time:dateandtime[1], weekday:weekdayobject[today.getDay()]}
  }

  function UpdateAttendance(id) {
    setOperatorDetails((prevarry) => 
      prevarry.map((operator) => 
        operator.id === id ? { ...operator, Attendance: [...(operator.Attendance || []), getDateandDay()] } : operator
      )
    )
  }
  

  function DeleteOperator(id) {
    setOperatorDetails((prev) => prev.filter((single) => single.id !== id))
  }

  return (
    <AdminProvider value={{ username: 'admin', password: 'admin', OperatorInformation, Allowed, setAllowedfunction, UpdateInformation, ChangeActiveStatus, OperatorDetails, DeleteOperator, UpdateAttendance }}>
      <Header />
      <Outlet />
      <Footer />
    </AdminProvider>
  )
}

export default App
