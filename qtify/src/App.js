import Card from "./components/Card/Card";
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
      <Card
        image={
          "https://img.freepik.com/free-photo/radio-advertising-with-group-friends_53876-98150.jpg?w=1380&t=st=1678808307~exp=1678808907~hmac=3f7f7145dffd1016ccf5cdcfe1db8f141ad8e7b91153da7ade091da75b50ff70"
        }
        follows={100}
        title={"This is song"}
      />
    </>
  );
}
