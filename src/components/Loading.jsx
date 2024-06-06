import styles from "../style";
import { motion } from "framer-motion";

const Loading = ({ isLoading }) => {
    return (
        <motion.div
            id="loading"
            className={`w-[100vw] h-[100vh] flex ${styles.flexCenter} bg-gray-900`}
            initial={{ scale: 1.0, opacity: 0.25 }}
            animate={{ scale: 2.0, opacity: 0.75 }}
            transition={{
                yoyo: Infinity,
                duration: 1.0,
                ease: "easeIn",
            }}
        >
            <div className="relative text-white text-5xl font-bold">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-white to-white blur-md opacity-50 animate-pulse"></div>
                <div className="relative z-10">
                    <span className="inline-block">
                        <code>&lt;Harsh/&gt;</code>
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default Loading;
