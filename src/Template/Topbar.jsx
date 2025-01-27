import { useState } from "react"
import { Link } from "react-router-dom"

const Topbar = () => {
  const [query, setQuery] = useState("")
  console.log(query)
  return (
    <div className="w-full h-[10vh] flex items-center justify-start  gap-2 p-5">
     
      <i className="ri-search-2-line text-3xl text-zinc-400 "></i>
      <input onChange={(e)=>setQuery(e.target.value)} 
      value = {query}
      className="py-1 w-1/2 px-5 border-[1px] rounded-xl outline-none bg-transparent border-none" type="text"placeholder="search anything"/>
    {query.length > 0 && <i onClick={()=>setQuery("")} className="ri-close-large-fill text-3xl text-zinc-400 "></i> }
      <div className="w-1/2 bg-zinc-200 max-h-[50vh] absolute top-[10%] overflow-auto ">
      <Link className=" font-medium text-zinc-700 hover:text-black hover:bg-zinc-400 duration-200 flex justify-start items-center border-b-2 border-zinc-100 p-10" >
      <img src="" alt="" />
      <span>Hello baby</span>
      </Link>
      </div>
      
    </div>
  )
}

export default Topbar