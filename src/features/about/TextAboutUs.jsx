import { motion } from "framer-motion";

function TextAboutUs() {
  return (
    <section className="clip-your-needful-style relative z-10 flex min-h-[calc(100dvh-112px)] flex-1 bg-stone-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: [100, -20, 0] }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          type: "spring",
          stiffness: 120,
        }}
        exit={{ opacity: 0, y: 100 }}
        className="-mt-12 flex w-full items-center"
      >
        <h3 className="w-full bg-transparent text-center font-calistoga2 text-5xl tracking-wide text-primary-100 drop-shadow-[0_8px_4px_rgba(255,127,80,1)] lg:text-7xl xl:text-[90px]">
          Um pouco sobre nós.
        </h3>
      </motion.div>
    </section>
  );
}

export default TextAboutUs;
