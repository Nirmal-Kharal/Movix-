import { RiMovie2AiFill} from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { GiGoldScarab } from "react-icons/gi";
import { GiBatteredAxe } from "react-icons/gi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { MdContactPhone } from "react-icons/md";
import { TbMessage2Question } from "react-icons/tb";
import { PiBellRingingFill } from "react-icons/pi"
import { FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {

  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10 ">
<h1 className="text-white text-3xl font-bold flex items-center gap-1">
<RiMovie2AiFill />
<span>Movix.</span>
</h1>
<nav className="flex flex-col text-zinc-400 text-xl  ">
  <h1 className="text-white  text-xl  font-semibold  mt-10 mb-5">
    New Feeds
  </h1>
  <Link className="p-3 hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg  flex items-center gap-1">< BiSolidCameraMovie/>TV Shows</Link>
  <Link className="p-3 hover:bg-[#6556CD]  hover:text-white duration-200 rounded-lg flex items-center gap-1"><GiBatteredAxe />Movies</Link>
  <Link className="p-3 hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg flex items-center gap-1"><PiBellRingingFill/>Latest</Link>
  <Link className="p-3 hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg  flex items-center gap-1"><GiGoldScarab/>My List</Link>
  <Link className="p-3 hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg flex items-center gap-1">   <FaFire /> Popular</Link>
  <Link className="p-3 hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg flex items-center gap-1"><IoIosPeople/>People</Link>
</nav>
<hr className="h-[1px] bg-zinc-400 border-none " />
<nav className="flex flex-col text-zinc-400 text-xl  ">
  <h1 className="text-white  text-xl  font-semibold  mt-5 mb-5">
   Website Information
  </h1>
  <Link className="p-3 hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg  flex items-center gap-1">< TbMessage2Question/>Contact Us</Link>
  <Link className="p-3 hover:bg-[#6556CD]  hover:text-white duration-200 rounded-lg flex items-center gap-1">< MdContactPhone />About</Link>
</nav>
    </div>
  )
}

export default Sidebar