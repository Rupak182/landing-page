
import { useRef, useState } from "react";
import FeatureWrapper from "./FeatureWrapper";

export default function Feature1({onViewChange,refs}:any) {


    return (
        <div>
            <FeatureWrapper index={0} innerRef={refs[0]}  onViewChange={onViewChange} >
                <div className="img space-y-6">
                    <img src="/Buying.png" alt="" className="object-cover rounded-xl" />
                    <h3 className="text-4xl text-center font-bold">Buying</h3>
                    <span className="text-lg pt-7 ">Allocate the right amount of product to the right location at the right time.</span>
                </div>
            </FeatureWrapper>

            <FeatureWrapper index={1} innerRef={refs[1]} onViewChange={onViewChange}>
                <div className="img space-y-6">
                    <img src="/Reordering.png" alt="" className="object-cover rounded-xl" />
                    <h3 className="text-4xl text-center font-bold">Reordering</h3>
                    <span className="text-lg pt-7 ">Identify key re-buy opportunities and keep your products consistently in stock
                    </span>
                </div>
                </FeatureWrapper>


            
                <FeatureWrapper index={2} innerRef={refs[2]} onViewChange={onViewChange}>
                <div className="img space-y-6">
                    <img src="/Rebalancing.png" alt="" className="object-cover rounded-xl" />
                    <h3 className="text-4xl text-center font-bold">Rebalancing
                    </h3>
                    <span className="text-lg pt-7 ">Move stock from locations with excess inventory to those that are lacking.
                    </span>
                </div>
                </FeatureWrapper>

                <FeatureWrapper index={3} innerRef={refs[3]} onViewChange={onViewChange}>
                <div className="img space-y-6">
                    <img src="/Channels.png" alt="" className="object-cover rounded-xl" />
                    <h3 className="text-4xl text-center font-bold">Channels
                    </h3>
                    <span className="text-lg pt-7 ">View all your KPIs, sales predictions and inventory with our dashboard
                    </span>
                </div>
                </FeatureWrapper>
        </div>
    )
}
