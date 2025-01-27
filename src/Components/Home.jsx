import Sidebar from "../Template/Sidebar"
import Topbar from "../Template/Topbar"

const Home = () => {
  return (
    document.title = "Movix | Home",
    <>
   <Sidebar/>
    <div className="w-[80%] h-full">
      <Topbar />
    </div>
    </>
  )
}

export default Home