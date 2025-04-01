import { BlogCard } from "../components/BlogCard"
import { AppBar } from "../components/AppBar"
export const Blogs = () => {
  

  return (
    <div>
      <AppBar/>
    <div className="flex justify-center pt-8">
  
      <div className="flex flex-col space-y-10">
        <div>
        <BlogCard
      authorName="Ad"
      title="How an ugly website makes $5000 a month without affliate marketing
      "
      content="How an ugly website makes $5000 a month without affliate marketing"
      />
        </div>
        <div>
        <BlogCard
      authorName="Ad"
      title="How an ugly website makes $5000 a month without affliate marketing
      "
      content="How an ugly website makes $5000 a month without affliate marketing"
      />
        </div>
        <div>
        <BlogCard
      authorName="Ad"
      title="How an ugly website makes $5000 a month without affliate marketing
      "
      content="How an ugly website makes $5000 a month without affliate marketing"
      />
        </div>
      </div>
    </div>
    </div>
  )
}
