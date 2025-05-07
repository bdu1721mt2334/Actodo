function AddToDoItem(props) {
    const activityArry = props.activityArry
    const setActivityArry = props.setActivityArry

    function HandleDelete(deleteid) {
        var temparr = activityArry.filter(function (items) {
            if (items.id == deleteid) {
                return false
            } else {
                return true
            }

        })
        setActivityArry(temparr)
    }

    return (
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.item.activity}</p>
            <button className="text-red-600" onClick={() => HandleDelete(props.id)}>Delete</button>
        </div>
    )
}

export default AddToDoItem