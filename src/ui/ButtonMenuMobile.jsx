import { motion } from "framer-motion";

function ButtonMenuMobile({ isOpen, setIsOpen }) {
  return (
    <motion.button
      onClick={() => setIsOpen(!isOpen)}
      className="relative z-50 h-10 w-12 cursor-pointer rounded-full bg-white/0 transition-colors hover:scale-110 hover:bg-white/20 sm:hidden"
    >
      <motion.span
        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        className={`absolute h-1 w-8 transition-colors duration-300 ${isOpen ? "bg-stone-900" : "bg-primary-500"}`}
        style={{
          top: "30%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
      />
      <motion.span
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        className={`absolute h-1 w-8 transition-colors duration-300 ${isOpen ? "bg-stone-900" : "bg-primary-500"}`}
        style={{
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        className={`absolute h-1 w-8 transition-colors duration-300 ${isOpen ? "bg-stone-900" : "bg-primary-500"}`}
        style={{
          top: "60%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
      />
    </motion.button>
  );
}

export default ButtonMenuMobile;
