import { useState } from "react"
import { UseAdmin } from "../Context/Authentications"

export default function OperatorLogin() {
    const {OperatorDetails, UpdateAttendance} = UseAdmin()
    const [inputid, setinputid]=useState('')
    let found = false

    function HandleSubmit(){
        for(let i=0; i<OperatorDetails.length; i++){
            if(OperatorDetails[i].id === inputid.trim() && OperatorDetails[i].status){
                UpdateAttendance(OperatorDetails[i].id)
                found = true
                break
            }
        }
        
        if (found){
            alert('Your attendance Marked')
            
        }
        else{
            alert('There is no user with that Id')
        }
        found=false
        setinputid('') 
    }

    return (                     
        <>
            <div class="w-full md:w-1/3">
                <input
                    value={inputid} 
                    class="flex h-10 w-full rounded-md border ml-32 mt-12 border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    onChange={(e)=>setinputid(e.target.value)}
                    placeholder="Enter Your Unique Id To Mark Your Attendance"
                />
            <button className="bg-black text-white p-4 rounded-xl ml-52 mt-12" onClick={HandleSubmit}>Mark</button>
            </div>

        </>
    )
}