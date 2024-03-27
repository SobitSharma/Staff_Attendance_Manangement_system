import { createContext, useContext } from "react";

export const AdminDetails = createContext({
    username:'',
    password:'',
    Allowed:null,
    OperatorDetails:[{Username:'Sobit',activity:'sad',Schedule:false, id:'sdsd',Attendance:[]}],
    OperatorInformation:()=>{},
    UpdateInformation:()=>{},
    ChangeActiveStatus:()=>{},
    DeleteOperator:()=>{},
    UpdateAttendance:()=>{},
    setAllowedfunction:()=>{}

})           

export const AdminProvider = AdminDetails.Provider  

export function UseAdmin(){
    return useContext(AdminDetails)
}



