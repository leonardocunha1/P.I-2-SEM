import BurgerInfo from "@/features/home/BurgerInfo";
import BestSellersBurgers from "@/features/home/BestSellersBurgers";
import Hero from "@/features/home/Hero";
import Feedbacks from "@/features/home/Feedbacks";
import Location from "@/features/home/Location";
// import MenuHome from "@/features/home/MenuHome";

function Home() {
  return (
    <>
      <Hero />
      {/* <MenuHome /> */}
      <BurgerInfo />
      <BestSellersBurgers />
      <Feedbacks />
      <Location />
    </>
  );
}

export default Home;
