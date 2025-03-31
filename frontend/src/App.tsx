import{BrowserRouter,Routes,Route} from "react-router-dom"
import { Post } from "./pages/Post"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/post/:id" element={<Post />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/" element={<Signup />}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}
export default App
