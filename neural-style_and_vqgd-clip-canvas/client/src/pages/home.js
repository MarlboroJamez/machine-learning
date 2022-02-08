import React from 'react';
import Header from '../components/header/header';
import AIFace from '../assets/images/AIFace.png';


//components
import HomeCard from '../components/cards/homeCard';
import PageDivider from '../components/dividers/page';
import HomeIntroCard from '../components/cards/homeIntro';
import HomeFAQ from '../components/cards/homeFAQ';

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
        <PageDivider/>
      </div>
  </div>)
}

export default Home;
