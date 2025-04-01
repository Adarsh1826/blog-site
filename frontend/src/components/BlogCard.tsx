interface BlogCardsProps{
    authorName:string,
    title:string,
    content:string
}
export const BlogCard = ({
    authorName,
    title,
    content
}:BlogCardsProps) => {
  return (
    <div className="border-b pb-4 mb-4 space-y-2">
        <Avatar authorName={authorName}/>
        <div className="text-bold font-bold">{title}</div>
        <div className="font-extralight">{content.slice(0,100)}</div>
    </div>
  )
}
export function Avatar({ authorName }: { authorName: string }) {
  return(
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">{authorName.slice(0,1).toUpperCase()}</span>
    </div>
  )
}