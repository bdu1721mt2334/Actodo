import { useState } from "react"
import AddToDoItem from "./addtodoitem"

function AddToDOList(props) {
    const activityArry = props.activityArry
    const setActivityArry = props.setActivityArry
    

    return (
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {activityArry.length===0?<p>You have't added anything yet</p>:""}
            {
                activityArry.map(function(item,index){
                    return <AddToDoItem id={item.id} item={item} index={index}  activityArry={activityArry} setActivityArry={setActivityArry}/>
                })
            }
        </div>
    )
}

export default AddToDOList