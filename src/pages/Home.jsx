import React from 'react';
import showcaseData from '../assets/showcaseData';
import './Home.css'

import Showcase from '../Components/Showcase/Showcase';

const showCaseData = showcaseData

const Home = () => {
  return (
    <div className='container homeContainer'>
        <div className="homeMain">
            <span className='homeName'>
                Restaurant Name
            </span>
        </div>
        {showCaseData.map(item => <Showcase key={item.id} object={item}/>)}
    </div>
  )
}

export default Home;
