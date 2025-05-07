import { useState } from "react"

function AddToDOForm(props) {
    const activityArry = props.activityArry
    const setActivityArry = props.setActivityArry

    const [newValue,setNewValue] = useState("")

    function HandleChange(event){
        setNewValue(event.target.value)

    }

    function HandleAdd(){
        setActivityArry([...activityArry,{id:activityArry.length + 1,activity:newValue}])
        setNewValue("")
    }

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activitises</h1>

            <div >
                <input value={newValue} onChange={HandleChange} type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity?" />
                <button onClick={HandleAdd} className="bg-black text-white p-1 border border-black rounded">Add</button>
            </div>
        </div>
    )

}

export default AddToDOForm