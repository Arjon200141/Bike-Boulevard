import Banner from "../Banner/Banner";
import FAQs from "../FAQs/FAQs";
import Featured from "../Featured/Featured";
import Latest from "../Latest/Latest";
import Review from "../Review/Review";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <Latest></Latest>
            <FAQs></FAQs>
            <Review></Review>
        </div>
    );
};

export default Home;