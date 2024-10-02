import { motion, MotionConfig } from "framer-motion"

export const MenuButton = ({ onClick, active, color }) => {

    return (
        <MotionConfig
        transition={{
            duration: 0.4
        }}>
            <motion.button 
            initial={false}
            onClick={onClick}
            className={`relative h-16 w-16 rounded-full bg-white/0 transition-colors hover:bg-${color}/20`}
            animate={active ? "open" : "closed"}
            >
                <motion.span 
                style={{
                    left: "50%",
                    top: "35%",
                    x: "-50%",
                    y: "-50%"
                }}
                className="absolute h-1 w-8 bg-secondaryColor"
                variants={{
                    open: {
                        rotate: ["0deg", "0deg", "45deg"],
                        top: ["35%", "50%", "50%"],
                        backgroundColor: ["#F2F2F0", "#F2F2F0", "#282828"]
                    },
                    closed: {
                        rotate: ["45deg", "0deg", "0deg"],
                        top: ["50%", "50%", "35%"],
                        backgroundColor: ["#282828", "#F2F2F0", "#F2F2F0"]
                    }
                }}
                />
                <motion.span 
                style={{
                    left: "50%",
                    top: "50%",
                    x: "-50%",
                    y: "-50%"
                }}
                className="absolute h-1 w-8 bg-secondaryColor"
                variants={{
                    open: {
                        rotate: ["0deg", "0deg", "-45deg"],
                        backgroundColor: ["#F2F2F0", "#F2F2F0", "#282828"]
                    },
                    closed: {
                        rotate: ["-45deg", "0deg", "0deg"],
                        backgroundColor: ["#282828", "#F2F2F0", "#F2F2F0"]
                    }
                }}
                />
                <motion.span 
                style={{
                    left: "calc(50% + 10px)",
                    bottom: "35%",
                    x: "-50%",
                    y: "50%"
                }}
                className="absolute h-1 w-3 bg-secondaryColor"
                variants={{
                    open: {
                        rotate: ["0deg", "0deg", "45deg"],
                        left: '50%',
                        bottom: ["35%", "50%", "50%"],
                        backgroundColor: ["#F2F2F0", "#F2F2F0", "#282828"]
                    },
                    closed: {
                        rotate: ["45deg", "0deg", "0deg"],
                        left: "calc(50% + 10px)",
                        bottom: ["50%", "50%", "35%"],
                        backgroundColor: ["#282828", "#F2F2F0", "#F2F2F0"]
                    }
                }}
                />
            </motion.button>
        </MotionConfig>
    )
}