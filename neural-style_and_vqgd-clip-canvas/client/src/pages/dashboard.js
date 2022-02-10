import React from 'react';

//Components
import Header from '../components/header/dashboardHeader';
import Bot from '../components/bot/bot';
import Actions from '../components/units/dashboardActions';
import Gallery from '../components/units/dashboardGallery';

function Dashboard() {
  return (
      <div>
          <Header/>

          <div className="p-6">
            <Actions/>

            <div className="mt-4 pl-6 pr-32">
              <Gallery/>
            </div>
          </div>
          <Bot/>
      </div>
  );
}

export default Dashboard;
