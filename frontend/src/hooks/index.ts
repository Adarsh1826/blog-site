import axios from "axios";
import { useEffect, useState } from "react";

export const useBlog = () => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token")
                const res = await axios.get("https://backend.adsdevvs.workers.dev/api/v1/post/bulk",{
                    headers: {
                        Authorization: `${token}`,
                    },
                });
               //console.log(res);
               
                
                if (res.data && res.data.posts) {
                    setPost(res.data.posts); 
                } else {
                    console.error("No posts found in response:", res.data);
                }
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { post, loading };
};

export const mainBlog = ({id}:{id:string})=>{
    const [loading,setLoading] = useState(true)
    const [post,setPost] = useState({})
    const fetchData = async()=>{
        const token = localStorage.getItem('token')
        const res = await axios.get(`https://backend.adsdevvs.workers.dev/api/v1/post/${id}`,{
            headers: {
                Authorization: `${token}`,
            },
        })

        setPost(res.data.post)
        setLoading(false)
    }
    useEffect(()=>{
        fetchData()
    },[])
    return {post,loading}
}