import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signin(props) 
{
    const navigate = useNavigate()
    const [euserName, setEuserName] = useState()
    const [epassword, setpassword] = useState()

    const users = props.users
    const setusers = props.setusers

    function HandleUinput(evt){
        setEuserName(evt.target.value)
    }

    function HandlePinput(evt){
        setpassword(evt.target.value)
    }

    function AddUser(){
        setusers([...users,{username:euserName,password:epassword}])
        navigate("/")
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi...</h1>
                <p>Sign Up here:</p>

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Username" onChange={HandleUinput}/>
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Password" onChange={HandlePinput}/>
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Confirm-Password" />
                    <button onClick={AddUser} className="bg-[#FCA201] w-24 p-1 rounded-md"> Sign Up</button>
                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
                </div>
            </div>
        </div>

    )
}

export default Signin

