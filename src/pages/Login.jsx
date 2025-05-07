import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function Login(props)
{
    const navigate = useNavigate()
    const [euserName,setEuserName] = useState()
    const [epassword,setpassword] = useState()
    const [reguser,setReguser] = useState(true)

    const users = props.users

    function HandleUinput(evt){
        setEuserName(evt.target.value)
    }

    function HandlePinput(evt){
        setpassword(evt.target.value)
    }

    function CheckUser(){

        var userFound = false

        users.forEach(function(item)
    {
        if(item.username === euserName && item.password === epassword )
        {
            console.log("success")
            userFound = true
            navigate("/landing",{state:{user:euserName}})
        }
       
    })
    if(userFound === false)
    {
        console.log("Login fail")
        setReguser(false)
    }

    }

    return(
        <div className="bg-black p-10">
        <div className="bg-white p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi...</h1>
            {reguser? <p>i help you manage your activities after you Login:)</p>:<p className="text-red-700">"Please Sign Up before you Login..,"</p>}

            <div className="flex flex-col gap-2 my-2">
                <input onChange={HandleUinput} type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Username" />
                <input onChange={HandlePinput} type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Password" />
                <button onClick={CheckUser} className="bg-[#8272DA] w-24 p-1 rounded-md">Login</button>
                <p>Don't have an account? <Link to={"/signup"} className="underline">SignUp</Link></p>
            </div>
        </div>
    </div>
    )
}

export default Login