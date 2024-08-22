import Herosvg from "@/ui/Herosvg";
import ImageHero from "/images/burgers/bg-hero.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-112px)] items-center bg-stone-900 px-4 lg:px-14">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex h-full max-w-6xl flex-col items-center justify-center gap-10 lg:flex-row lg:justify-around"
      >
        <div className="flex flex-col lg:-mt-20">
          <h1 className="mb-5 flex flex-col text-center font-calistoga2 text-6xl font-bold text-primary-50 sm:mt-0 sm:text-[90px] lg:text-start lg:text-[100px] xl:text-[120px]">
            Diiner&apos;s <span className="">Burgers</span>
          </h1>
          <h3 className="text-center text-xl font-semibold text-primary-500 sm:text-2xl lg:text-start">
            Soboreie o inexplicável
          </h3>
          <Link
            to="/order"
            className="mx-auto mt-5 inline-block rounded-xl bg-primary-600 px-4 py-2 text-base font-bold tracking-wide text-primary-100 duration-500 hover:bg-red-900 sm:max-w-max lg:mx-0"
          >
            Peça já!
          </Link>
        </div>
        <img
          src={ImageHero}
          alt=""
          className="h-80 sm:h-96 lg:h-[500px] xl:h-[550px]"
        />
      </motion.div>
      <Herosvg />
    </section>
  );
}

export default Hero;
