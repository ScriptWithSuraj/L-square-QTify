import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection
        text1={"100 Thousand Songs, ad-free"}
        text2={"Over thousands podcast episodes"}
      />
    </>
  );
}
