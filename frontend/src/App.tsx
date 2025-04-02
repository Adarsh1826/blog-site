import{BrowserRouter,Routes,Route} from "react-router-dom"
import { Post } from "./pages/Post"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { Blogs } from "./pages/Blogs"
import { AppBar } from "./components/AppBar"
import { PublishPost } from "./components/PublishPost"
function App() {
  return (
    <>
    
     <BrowserRouter>
     <AppBar/>
      <Routes>
        <Route path="/post/:id" element={<Post />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/publish" element={<PublishPost />}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}
export default App
