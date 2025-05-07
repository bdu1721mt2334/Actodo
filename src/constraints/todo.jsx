import AddToDOForm from "./addtodoform"
import AddToDOList from "./addtodolist"
import { useState } from "react"

function ToDoContainer() {


    const[activityArry,setActivityArry] = useState([
        {
            id:1,
            activity:"Go for a walk"
        },
        {
            id:2,
            activity:"Take Break Fast"
        },
        {
            id:3,
            activity:"Take a Shawer"
        }
    ])

    return (
        <div>
            <div className="flex gap-5 flex-wrap">
               <AddToDOForm activityArry={activityArry} setActivityArry={setActivityArry}/>
               <AddToDOList activityArry={activityArry} setActivityArry={setActivityArry}/>

                
            </div>
        </div>

    )
}

export default ToDoContainer 