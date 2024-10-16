import { motion } from "framer-motion"

function Loader() {

    const LoadingDot = {
        display: "block",
        width: "1rem",
        height: "1rem",
        backgroundColor: "#F2F2F0",
        borderRadius: "50%",
        border: "0.1rem solid #21A5D1"
      };
      
      const LoadingContainer = {
        width: "30%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
      };
      
      const ContainerVariants = {
        initial: {
          transition: {
            staggerChildren: 0.2
          }
        },
        animate: {
          transition: {
            staggerChildren: 0.2
          }
        }
      };
      
      const DotVariants = {
        initial: {
          y: "-50%"
        },
        animate: {
          y: "50%"
        }
      };
      
      const DotTransition = {
        duration: 0.5,
        repeatType: "reverse",
        repeat: Infinity,
        ease: "easeInOut"
      };

    return ( 
        <motion.div
            style={LoadingContainer}
            variants={ContainerVariants}
            initial="initial"
            animate="animate"
        >
            <motion.span
            style={LoadingDot}
            variants={DotVariants}
            transition={DotTransition}
            />
            <motion.span
            style={LoadingDot}
            variants={DotVariants}
            transition={DotTransition}
            />
            <motion.span
            style={LoadingDot}
            variants={DotVariants}
            transition={DotTransition}
            />
        </motion.div>
     );
}

export default Loader;