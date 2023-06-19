import React from 'react'
import Masonry from 'react-masonry-css'
import AboutOne from '../../assets/office01.png'
import AboutTwo from '../../assets/office02.png'
import AboutThree from '../../assets/office03.png'
import AboutFour from '../../assets/office04.png'

const About = () => {
  return (
    <div className=''>
    <div className='py-20 px-10 md:px-48'>
    <h2 className="text-4xl font-bold mb-4">We unleash<br /><span className='text-dark-grey'>business potential</span></h2>
    </div>
    <div className='bg-grey py-10 md:px-40 md:py-20  flex flex-row justify-center'>
      <Masonry
        breakpointCols={3}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        <div className=''>
          <img className='mb-4' src={AboutOne} alt=""/>
        </div>
        <div>
          <img className='mb-4' src={AboutThree} alt=""/>
          <img className='mb-4' src={AboutFour} alt=""/>
        </div>
        <div>
          <img className='mb-4' src={AboutTwo} alt=""/>
        </div>
      </Masonry>
    </div>
    </div>
  )
}

export default About
