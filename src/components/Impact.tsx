
export default function Impact() {
  return (
    <div className="flex flex-col  md:p-14 p-5 py-0 gap-14">
      <span className="flex items-center gap-2"><h3 className="md:text-4xl text-2xl  font-bold">Measuring</h3><img src="text.svg" className="w-40 md:w-60" alt=""/></span>

      <div className="flex md:flex-row flex-col md:justify-around gap-10 text-2xl">
        <div className="text-center"><div className="font-bold">X%</div>Improved forecasting accuracy</div>
        <div className="text-center"><div className="font-bold">Y%</div>Reduction in unsold inventory</div>
        <div className="text-center"><div className="font-bold">Z%</div>Reduction in stock shortages</div>
      </div>


    </div>
  )
}
