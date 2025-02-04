
export default function Footer() {
  return (
    <div className='flex flex-col p-14 py-0  '>
        <div className="p1 flex justify-around pb-4 border-b-2 border-gray-200">
            <div className='flex flex-col gap-3'>
                <span className='font-semibold mb-1'>COMPANY</span>
                <span><a href="http://">Products</a></span>
                <span><a href="http://">Get Started</a></span>
            </div>


            <div className='flex flex-col gap-3'>
                <span className='font-semibold mb-1'>Resources</span>
                <span><a href="http://">AI Demand Forecasting</a></span>
                <span><a href="http://">The impact of overstock</a></span>
                <span><a href="http://">Forecasting for Buying</a></span>
                <span><a href="http://">Stock Rebalancing</a></span>
                <span><a href="http://">See all resources</a></span>

            </div>

            <div className='flex flex-col gap-3'>
                <span className='font-semibold mb-1'>About</span>
                <span><a href="http://">About</a></span>
                <span><a href="http://">Linkedin</a></span>
            </div>
        </div>

        <div className=' flex md:gap-10 gap-5 justify-center w-full m-5 py-5 '>
            <img className='self-start' src='logo.svg'></img><span className='flex items-center justify-center'>Copyright &copy; 2024 Test</span>
        </div>
    </div>
  )
}
