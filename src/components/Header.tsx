import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react";

const options = [
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Resources", path: "/resources" },
]


export default function Header() {
  const [visible, setVisible] = useState(false);
  return (

    <div>
 <div className="p-5 md:hidden">
      <button onClick={() => setVisible(!visible)}>{!visible ? <Menu /> : <X />}</button>
      <div className={`${visible ? 'opacity-100  bg-black text-white ' : ' opacity-0 h-0'}  flex-col  transition-all duration-50 ease-in-out p-5 z-40   md:justify-around md:items-center border-b-2 border-gray-200 bg-[#eff3fa]`}>
        <img src="/logo.svg" alt="" className="w-10 my-6 " />
        <ul className="flex md:flex-row flex-col  list-none gap-6 ">
          {
            options.map((option) => (
              <li className="cursor-pointer hover:text-gray-700 text-gray-500">{option.label}</li>
            ))
          }

          <Button variant={"default"} size={"sm"} className="w-fit">Get started</Button>

        </ul>

      </div>
    </div>


    <div className="md:flex hidden p-5   justify-around items-center border-b-2 border-gray-200 bg-[#eff3fa]">
      <img src="/logo.svg" alt="" className="w-10 " />
        <ul className="flex  list-none gap-6 ">
            {
                options.map((option)=> (
                    <li className="cursor-pointer hover:text-gray-700 text-gray-500">{option.label}</li>
                ))
            }
        </ul>

        <Button variant={"default"} size={"lg"}>Get started</Button>
    </div>
    </div>
   
  )
}


//#eff3fa