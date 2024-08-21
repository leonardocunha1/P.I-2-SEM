import BurgerInfo from "@/features/home/BurgerInfo";
import BestSellersBurgers from "@/features/home/BestSellersBurgers";
import Hero from "@/features/home/Hero";
// import MenuHome from "@/features/home/MenuHome";

function Home() {
  return (
    <>
      <Hero />
      {/* <MenuHome /> */}
      <BurgerInfo />
      <BestSellersBurgers />
    </>
  );
}

export default Home;
