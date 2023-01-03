import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour' />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, ea itaque saepe, numquam 
      iusto maxime ipsa iure quia nobis fugiat ad nihil beatae nemo, aut asperiores est debitis animi eum? </p>
      <button type='button' className='custom__button'>Explore More</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
