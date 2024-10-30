import { Button } from "./ui/button";

export default function Hero() {
  return (


    
    <div className="flex md:flex-row flex-col-reverse md:p-5  py-0 gap-5">
      <div className="text md:w-1/2 w-full p-8 flex flex-col gap-10 ">
        <h1 className="text-6xl font-bold ">Reduce your stockouts and unsold inventory with AI Demand Forecasting</h1>
        <h2 className="text-3xl font-medium ">AI-driven planning and allocation recommendations for retailers
        </h2>
        <Button size={"xl"}>Get Started </Button>

      </div>

      <div className="img md:w-1/2 w-full p-10">
        <img src="/Hero.png"  className="object-cover" alt="" />
      </div>
    </div>
  )
}
