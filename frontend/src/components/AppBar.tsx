import { Avatar } from "./BlogCard"

export const AppBar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-2">
        <div className="font-bold">
            Medium
        </div>
        <div>
            <Avatar authorName="adarsh"/>
        </div>
    </div>
  )
}
