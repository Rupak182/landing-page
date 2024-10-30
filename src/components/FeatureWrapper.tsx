import { useInView ,motion} from 'framer-motion';
import React, { useEffect, useRef } from 'react'

export default function FeatureWrapper({children,onViewChange,index,innerRef}:{children:React.ReactNode,onViewChange:any,index:number,innerRef:any}) {
    const isInView= useInView(innerRef)

    useEffect(()=>{
        if(isInView){
            onViewChange(index);
        }
    },[isInView])

  return (
    <motion.div     style={ { transition: "all 2s "}}    ref={innerRef}  className={`${isInView?"opacity-100":"opacity-0"}  md:min-h-[90vh] md:h-[90vh] h-[50vh]  gap-2  flex justify-center items-center`}>
        {children}
</motion.div>
  )
}
