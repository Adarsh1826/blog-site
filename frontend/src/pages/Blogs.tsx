import { BlogCard } from "../components/BlogCard";
import { useBlog } from "../hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Skeleton } from "../components/Skeleton";
export const Blogs = () => {
  const navigate = useNavigate();
  const { post, loading } = useBlog() as { post: { id: string; title: string; content: string ; name:string}[]; loading: boolean };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  if (loading) {
    return  <div className="flex justify-center items-center min-h-screen">
    <div className="flex flex-col items-center space-y-6 w-full max-w-3xl">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  </div>
  }

  return (
      
      <div className="flex justify-center pt-8">
        <div className="flex flex-col space-y-10">
          {
            post.map(p=><BlogCard 
              id={p.id}
              name={p.name || "Anonynmous" }
              title={p.title}
              content={p.content}

            />)}
        </div>
      </div>
      
              
  );
};
