//? REACT
import React from 'react';

//? CSS
import './content.css';

//? COMPONENTS
import Activity from './components/Activity/Activity';
import ProfileCard from './components/ProfileCard/ProfileCard';
import Misc from './components/Misc/Misc';

const Content = () => {
  return (
    <>
        <div className="contentMain">
            <div className="iconBoxes">
                <span style={{fontSize: 56}}>Icon Box  |</span>
                <span style={{fontSize: 56}}>Icon Box  |</span>
                <span style={{fontSize: 56}}>Icon Box  |</span>
                <span style={{fontSize: 56}}>Icon Box  </span>
            </div>
            <div className="cards">
              <div className="left">
                <Activity />
              </div>
              <div className="right">
                <div id='profile'>
                  <ProfileCard />
                </div>
                <span id='misc'>
                  <Misc />
                </span>
              </div>
            </div>
        </div>
    </>
  )
};

export default Content;