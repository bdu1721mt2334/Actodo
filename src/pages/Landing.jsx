import Header from '../constraints/headed';
import Cards from '../constraints/cards';
import ToDoContainer from '../constraints/todo';
import { useLocation } from "react-router-dom"


function Landing()
{
    const data = useLocation()

    return(
        <div className='bg-black p-16'>
      <div className='bg-white p-10 border rounded-md'>
        <Header  ></Header>


        <div className='flex justify-between gap-7 my-5 flex-wrap'>

          <Cards bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
          <Cards bgcolor={"#FD6663"} title={"December 20"} subtitle={"14:23:08"} />
          <Cards bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"} />

        </div>

        <div>
          <ToDoContainer/>
        </div>
      </div>

    </div>


    )
}

export default Landing