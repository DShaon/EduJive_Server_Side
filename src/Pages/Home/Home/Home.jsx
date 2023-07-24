import Banner from "../Banner/Banner";
import FeaturedColleges from "../FeaturedColleges/FeaturedColleges";
import Gallery from "../Gallery/Gallery";
import ResearchPapers from "../ResearchPapers/ResearchPapers";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedColleges></FeaturedColleges>
      <Gallery></Gallery>
      <ResearchPapers></ResearchPapers>
      <Review></Review>
    </div>
  );
};

export default Home;

