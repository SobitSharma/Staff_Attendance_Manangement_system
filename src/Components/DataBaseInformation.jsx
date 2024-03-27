import { useState } from "react"
import { UseAdmin } from "../Context/Authentications"

function DataBaseInformation() {
    const { OperatorDetails, UpdateInformation, ChangeActiveStatus, DeleteOperator, Allowed } = UseAdmin()

    const [name, setname] = useState('')
    const [work, setwork] = useState('')
    const [schedule, setschdule] = useState('')
    const [active, setactive] = useState(false)
    const [addemployee, setaddenployee] = useState("none")

    function uniqueid() {
        let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHJKLOPIYTREWQAXZCVBNM1234567890!@$%^'
        let uniqueId = ''
        for (let i = 0; i < 10; i++) {
            let no = (Math.floor(Math.random() * string.length))
            uniqueId += string[no]
        }
        return uniqueId
    }

    function HandleOperator() {
        if (name && work && schedule) {
            UpdateInformation({ Username: name, activity: work, Schedule: schedule, status: active, id: uniqueid(), Attendance: [] })
        }
        else {
            alert('Please Fill all the Details about the operator')
        }
        setname('')
        setwork('')
        setschdule('')
        setactive(false)
        setaddenployee('none')
    }

    if(Allowed){
        return (
            <> 
                <button className="bg-black text-white text-xl rounded-xl text-center p-2 ml-60 mt-28 id=addemplyeebutton"
                    onClick={() => setaddenployee(addemployee == 'block' ? 'none' : 'block')}
                >Add Operator</button>
                <div class="bg-gray-100 flex justify-center items-center" id="" style={{ display: addemployee }}>
                    <div class="bg-white p-8 rounded-lg shadow-md">
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="operatorName">
                                Enter Operator Name
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="operatorName"
                                value={name}
                                type="text"
                                onChange={(e) => setname(e.target.value)}
                                placeholder="Enter operator name"
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="workDescription">
                                Description of Work
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="workDescription"
                                type="text"
                                value={work}
                                onChange={(e) => setwork(e.target.value)}
                                placeholder="Enter work description"
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="operatorSchedule">
                                Schedule of the Operator
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="operatorSchedule"
                                type="text"
                                value={schedule}
                                onChange={(e) => setschdule(e.target.value)}
                                placeholder="Enter operator schedule"
                            />
                        </div>
                        <div class="flex items-center">
                            <input
                                class="mr-2"
                                id="activeStatus"
                                type="checkbox"
                                onChange={() => setactive(!active)}
                            />
                            <label class="text-gray-700 font-bold" for="activeStatus">
                                Active Status
                            </label>
                        </div>
                        <button className="bg-black rounded-xl p-2 text-white mt-5" onClick={HandleOperator}>Add Operator</button>
                    </div>
                </div>
                <section class="mx-auto w-full max-w-7xl px-4 py-4">
                    <div class="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                        <div>
                            <h2 class="text-lg font-semibold">Operators</h2>
                            <p class="mt-1 text-sm text-gray-700">
                                This is a list of all Operators. You can add new operators, edit or
                                delete existing ones.
                            </p>
                        </div>
    
                    </div>
                    <div class="mt-6 flex flex-col">
                        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                                >
                                                    <span>Operator Name</span>
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                                                >
                                                    Work
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                                >
                                                    Schedule
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                                >
                                                    Unique_Id
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                                >
                                                    Attendance
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200 bg-white">
    
                                            {OperatorDetails.map((operator) => (
                                                <tr key={operator.id}>
                                                    <td class="whitespace-nowrap px-4 py-4">
                                                        <div class="flex items-center">
                                                            <div class="ml-4">
                                                                <div class="text-sm font-medium text-gray-900">
                                                                    {operator.Username}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="whitespace-nowrap px-12 py-4">
                                                        <div class="text-sm text-gray-900 ">{operator.activity}</div>
    
                                                    </td>
                                                    <td class="whitespace-nowrap px-4 py-4">
                                                        <span class="inline-flex rounded-full bg-green-100  px-2 text-xs font-semibold leading-5 text-green-800">
                                                            <button onClick={() => ChangeActiveStatus(operator.id)}>{operator.status ? 'Active' : 'Not Active'}</button>
    
                                                        </span>
                                                    </td>
                                                    <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                                        {operator.Schedule}
                                                    </td>
                                                    <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                                        {operator.id}
                                                    </td>
                                                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                                        {
                                                            <ul key={operator.id}>
                                                                {(operator.Attendance || []).map((single, index) => (
                                                                    <li key={`${operator.id}-${index}`}>{`${single.date}  : ${single.time} :  ${single.weekday}`}</li>
                                                                ))}
                                                            </ul>
                                                        }
                                                    </td>
                                                    <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                                                        <button onClick={() => DeleteOperator(operator.id)}>Delete</button>
    
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    
    
            </>
        )
    }
    else{
        return(
            <>
            <h1 className="bg-black text-white text-2xl text-center">You are not Allowed To Access This Page Please Login First</h1>
            </>
        )
    }
   
}

export default DataBaseInformation