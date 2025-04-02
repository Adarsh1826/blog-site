import { useEffect, useState } from "react"
import { Avatar } from "./BlogCard"
import axios from "axios"

export const AppBar = () => {
  const [name,setName] = useState("")
  const fetchData = async ()=>{
    const token = localStorage.getItem("token")
    if(!token){
      return <div>
        Inavlid...
      </div>
    }
    const res = await axios.get("https://backend.adsdevvs.workers.dev/api/v1/post/name",{
        headers:{
          Authorization:`${token}`
        }
    })
    //console.log(res)
    setName(res.data.us.name)
    console.log(res);
    
  }
  useEffect(()=>{
    fetchData()
  },[])
 // alert(name)
  return (
    <div className="border-b flex justify-between px-10 py-2">
        <div className="font-bold">
            Medium
        </div>
        <div>
            <Avatar authorName={name|| ""}/>
        </div>
    </div>
  )
}
