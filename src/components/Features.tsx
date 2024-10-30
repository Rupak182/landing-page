import { Button } from "./ui/button"
import Feature1 from "./Feature1"
import { useRef, useState } from "react"
const contents = [{ label: "Buying" }, { label: "Reordering" }, { label: "Rebalancing" }, { label: "Channels" }]

export default function Features() {

  const refs = [useRef<null | HTMLDivElement>(null),useRef<null | HTMLDivElement>(null),useRef<null | HTMLDivElement>(null),useRef<null | HTMLDivElement>(null),]

  const scrollToComponent=(index:number)=>{
    if(refs[index].current){
      refs[index].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["end end", "start start"]
  // })

  const [isActive,setIsActive]= useState(0);

  const handleViewChange =(inView:number)=>{
      setIsActive(inView);
  } 


  return (

    <main className="pl-14">
      <div className="flex  gap-10 px-14 w-full relative h-full border-b-2 border-gray-200">

        <div className="sidebar hidden md:w-2/5 md:flex flex-col gap-4 sticky  top-0 items-center justify-center  h-screen">
        <h2 className="text-4xl font-bold self-start gap-4">Features</h2>

          {
            contents.map((c,i) => (
              <Button onClick={()=>scrollToComponent(i)} variant={"link2"} size={"xl2"} className={`${isActive===i && "underline"} font-bold`}>{c.label}</Button>
            ))
          }

          {/* <div className="text-6xl font-medium p-5 ">Transform your inventory into your greatest asset.
            Make smarter decisions, faster than ever.</div> */}
        </div>

        <div className="content md:w-3/5 w-full flex justify-center items-center ">
          <Feature1 refs={refs} onViewChange={handleViewChange} />
        </div>
      </div>
    </main>

  )
}
