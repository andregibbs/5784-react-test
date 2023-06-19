import React from 'react'
import Flickity from 'react-flickity-component'
import SlideOne from '../../assets/dashboard01@2x.png'

const flickityOptions = {
  initialIndex: 1,
  imagesLoaded: true,
  wrapAround: true,
  pageDots: false,
  freeScroll: true
}

const Hero = () => {
  return (
    <div>
      <div className='container p-10 mx-auto'>
        <div className='flex flex-row items-center justify-center'>
          <div className='text-center'>
            <div className='row-span-3'>
              <h2 className='text-4xl font-bold mb-4'>Case Studies</h2>
              <div className='row-span-1 pb-5'>
                <p>
                  Every project is different. We like to work collaboratively
                  with our clients,
                  <br /> tailoring each project to suit the needs of you and
                  your business.
                </p>
              </div>
            </div>
            </div>
            </div>

            <div className='max-w-screen-lg w-full py-10 mx-auto'>
              <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
              >
                <div>
                <img src={SlideOne} alt="" />
                </div>
                <div>
                <img src={SlideOne} alt=""/>
                </div>
                <div>
                <img src={SlideOne} alt="" />
                </div>
              </Flickity>
            </div>
          </div>
        </div>
  )
}

export default Hero
