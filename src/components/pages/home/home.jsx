import './home.css'
import HeroSection from "../../featurs/hero-section/hero-sectin";
import ServicesCards from '../../featurs/services-cards/services-cards';
import ReasonsSection from '../../featurs/reasons-section/reasons-section';
import ListReview from '../../featurs/list-review/list-review';
import CookiesFeaturs from '../../featurs/cookies/cookiesFeaturs';
import NewsNavbar from '../../featurs/news-navbar/news-navbar';

const Home = () => {
    return (
        < div className = "home" >
            <NewsNavbar/>
            <HeroSection />
            <ServicesCards />
            <ReasonsSection />
            <ListReview />
            <CookiesFeaturs />
        </div >
    )
}

export default Home;