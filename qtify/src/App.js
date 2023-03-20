import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
// import { useEffect } from "react";
import { fetchTopSogs } from "./api/api";

export default function App() {
  // useEffect(() => {
  //   fetchTopSogs().then((data) => {
  //     console.log(data);
  //   });
  // }, []);

  return (
    <>
      <Navbar />
      <HeroSection
        text1={"100 Thousand Songs, ad-free"}
        text2={"Over thousands podcast episodes"}
      />
      <Section title={"Top Album"} dataSource={fetchTopSogs} />
    </>
  );
}
