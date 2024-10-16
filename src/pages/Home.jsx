import DifferentialDiiners from "@/features/home/DifferentialDiiners";
import BestSellersBurgers from "@/features/home/BestSellersBurgers";
import Hero from "@/features/home/Hero";
import Feedbacks from "@/features/home/Feedbacks";
import Location from "@/features/home/Location";
// import MenuHome from "@/features/home/MenuHome";

function Home() {
  return (
    <>
      <Hero />
      <DifferentialDiiners />
      <BestSellersBurgers />
      <Feedbacks />
      <Location />
    </>
  );
}

export default Home;
