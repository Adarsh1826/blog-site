import { useEffect, useState } from "react";
import { Avatar } from "./BlogCard";
import axios from "axios";
import { Link } from "react-router-dom";

export const AppBar = () => {
  const [name, setName] = useState("");
  const [tok, setTok] = useState(localStorage.getItem("token") || ""); // Ensure it's not null

  const fetchData = async () => {
    if (!tok) return;

    const res = await axios.get("https://backend.adsdevvs.workers.dev/api/v1/post/name", {
      headers: {
        Authorization: `${tok}`,
      },
    });

    setName(res.data.us.name);
  };

  useEffect(() => {
    fetchData();
  }, [tok]); 

  useEffect(() => {
    const handleTokenUpdate = () => {
      const newToken = localStorage.getItem("token");
      if (newToken !== tok) {
        setTok(newToken);
      }
    };

    const interval = setInterval(handleTokenUpdate, 1000); 
    //console.log("hello");
    
    return () => clearInterval(interval);
  }, [tok]);

  return (
    <div className="border-b flex justify-between px-10 py-2">
      <Link to={'/blogs'}>
      <div className="font-bold">Bridge</div>
      </Link>
      <div className="flex justify-between">
      <div className="px-10">
      {
        
        tok?<Link to={'/publish'}><button
        className=" text-white bg-green-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
          
        >
          Publish
    </button></Link>:null
    
      }
      </div>
      <div>
        {tok ? (
        <div>
          <Avatar name={name} />
        </div>
      ) : null}
      </div>
      </div>
    </div>
  );
};
