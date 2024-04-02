import {AnimatePresence, motion } from 'framer-motion'

export const AnimationWrapper = ({children, keyValue, initial= {opacity:0}, animate={opacity:1}, transition = {duration:1}, className}) => {
  return (
    <AnimatePresence> 
        {/* animatepresence will keep track of the animation */}
    <motion.div
        key={keyValue} // motion is not able to diffrentiate between the sign in sinup page so keyValue is taken and type is passed will be able to diffrentiate both and hence animation will be applied on both
        initial={initial} // initial state
        animate={animate}  //final state
        transition={transition}
        className={className}
        >
        {children}
    </motion.div>
    </AnimatePresence>
  )
}


