import { MotionConfig, motion } from "framer-motion";
import { useRef, useState } from "react";
import { BiSolidSearch } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

export default function SearchInput({ onChange }) {

    const [active, setActive] = useState(false)

    const inputRef = useRef(null)

    return ( 
        <MotionConfig
        transition={{
            duration: 0.4
        }}>
            <motion.div
            initial={false}
            className="flex items-center justify-between md:justify-center p-5 rounded-md w-full sm:w-auto"
            animate={active ? "open" : "closed"}
            variants={{
                open: {

                }
            }}
            >
                <motion.input 
                ref={inputRef}
                onChange={onChange}
                className="bg-transparent border-b-2 focus:outline-none transition-colors focus:border-b-hlColor text-secondaryColor"
                variants={{
                    open: {
                        width: "100%"
                    },
                    closed: {
                        width: "0"
                    }
                }}/>
                <motion.button
                onClick={() => {
                    setActive((prev) => {
                        if (prev) {
                            inputRef.current.value = "";
                            onChange({ target: { value: "" } }); // Pass empty value to onChange
                        }
                        return !prev;
                    });

                    if (!active) {
                        inputRef.current.focus();
                    }
                }}
                >
                    {active ? (
                        <motion.div
                        key="open"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        >
                        <IoMdClose className="fill-secondaryColor size-7 "/>
                        </motion.div>
                    ) : (
                        <motion.div
                        key="closed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        >
                        <BiSolidSearch className="fill-secondaryColor size-7 "/>
                        </motion.div>
                    )}
                    
                </motion.button>
            </motion.div>
        </MotionConfig>
     );
}
