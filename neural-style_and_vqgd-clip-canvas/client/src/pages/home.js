import React from 'react';

//Assets
import AIFace from '../assets/images/AIFace.png';

//components
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import HomeCard from '../components/cards/homeCard';
import PageDivider from '../components/dividers/page';
import HomeIntroCard from '../components/cards/homeIntro';
import HomeFAQ from '../components/cards/homeFAQ';
import HomeRegisterTodayCard from '../components/cards/homeRegisterToday';
import HomeBlogCard from '../components/cards/homeBlog';

function Home() {
  return (
  <div>
    <Header/>
      <div className="p-20">
        <HomeIntroCard AIFace={AIFace}/>
        <PageDivider/>
        <HomeCard/>
        <PageDivider/>
        <HomeFAQ/>
        <HomeRegisterTodayCard/>
        <PageDivider/>
        <HomeBlogCard/>
      </div>
    <Footer/>
  </div>)
}

export default Home;
