import Chatbot from "./components/Chatbot"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

export default function layout(
    {
    children
    }:{
    children : React.ReactNode
    }
) {
  return (
    <div className="grid grid-rows-12 grid-cols-12 w-full h-screen">
        <div className="row-span-3 col-span-12">
        <Navbar/>
        </div>
        <div className="hidden lg:flex lg:col-span-3 lg:row-span-12 h-full">
          <Sidebar/>
        </div>
        <div className="col-span-12 row-span-12 lg:col-span-6 lg:row-span-12">
        {children}
        </div>
        <div className="hidden lg:flex lg:col-span-3 lg:row-span-12">
        <Chatbot/>
        </div>
    </div>
  )
}
