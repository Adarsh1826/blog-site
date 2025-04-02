import { useState } from "react";
import {BlogInput } from "ads-blog-common"
import axios from "axios";
export const PublishPost = () => {
    const[inputs,setInputs] = useState<BlogInput>({
        title:"",
        content:""

    })
    const handle = async()=>{
        const token = localStorage.getItem("token")
        if(!token){
            return <div>
                Inavlid..
            </div>
        }
        const res = await axios.post(`https://backend.adsdevvs.workers.dev/api/v1/post/create`,inputs,{
            headers:{
                Authorization: `${token}`
            }
        })
        if(res.data.id){
            alert("Success")
            setInputs({ title: "", content: "" });
        }
        else{
            alert("Something went wrong")
        }
    }
    return (
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Create a Post</h2>
  
        <input
            onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
          type="text"
          placeholder="Title"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
  
        <textarea
           onChange={(e) => setInputs({ ...inputs, content: e.target.value })}  
          placeholder="Write an Article"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
        />
  
        <button className=" text-white bg-blue-800 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5"
            onClick={handle}
        >
          Publish
        </button>
      </div>
    );
  };
  