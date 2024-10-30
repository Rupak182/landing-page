import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


export default function Blogs() {
    return (
        <div className="p-14 py-5 mt-20">
            <h2 className="text-4xl font-bold mb-10">Our Latest Blogs</h2>
            <div className="caraousel p-5 md:w-1/2 w-full m-auto">
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    <CarouselItem className="pl-2 md:pl-4">
                        <div className="relative">
                        <img src="b1.png" alt="" />
                        <span className="absolute bottom-3 text-lg md:text-3xl text-white text-center font-bold w-full ">Understanding AI Demand Forecasting in Fashion Retail
                        </span>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4">
                        <div className="relative">
                        <img src="b2.png" alt="" />
                        <span className="absolute bottom-3 text-lg md:text-3xl text-white text-center font-bold w-full ">The Environmental Impact of Overstock in the Fashion Industry
                        </span>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="pl-2 md:pl-4">
                        <div className="relative">
                        <img src="b3.png" alt="" />
                        <span className="absolute bottom-3 text-lg md:text-3xl text-white text-center font-bold w-full ">The Importance of Forecasting for Upcoming Buying Campaigns
                        </span>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            </div>

            <div className="m-auto text-center mt-14 font-semibold text-2xl md:w-1/2 w-full ">Transform your inventory into your greatest asset.
            Make smarter decisions, faster than ever</div>
        </div>
    )
}
