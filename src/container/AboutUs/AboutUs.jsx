import React from 'react';

import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={ images.G } alt="t letter" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'> About Us </h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img '/>
        <p className='p__opensans'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi 
        eveniet laudantium sit quo, libero, odio esse doloremque ipsa ipsam officiis natus soluta quidem adipisci a est corrupti amet, illum similique! </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={ images.knife} alt="about_knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'> Our History </h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img '/>
        <p className='p__opensans'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi 
        eveniet laudantium sit quo, libero, odio esse doloremque ipsa ipsam officiis natus soluta quidem adipisci a est corrupti amet, illum similique! </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
