import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
// import { useEffect } from "react";
import { fetchTopSogs, fetchNewAlbums, fetchSongs } from "./api/api";
// import NewAlbumSection from "./components/Section/NewAlbumSection/NewAlbumSection";

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

      <Section title={"Top Albums"} dataSource={fetchTopSogs} />
      <div style={{ marginTop: "40px" }}>
        <Section title={"New Albums"} dataSource={fetchNewAlbums} />
      </div>
      <div style={{ marginTop: "30px", color: "green" }}>
        <img src={require("./assets/green-line.png")} alt="line" />
      </div>
      <div style={{ marginTop: "40px" }}>
        <Section title={"Songs"} dataSource={fetchSongs} />
      </div>
    </>
  );
}
