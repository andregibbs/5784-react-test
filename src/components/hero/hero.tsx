import React from "react";
import HeroImage from "../../assets/Spaniel01_gradient.png";

const Hero = () => {
  return (
    <div>
      <div className="container max-w-none hero">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <div className="flex justify-center">
              <div className="row-span-3">
                <p className="text-pink font-semibold pb-5">BRAND, DEV, ECOM, MARKETING</p>
                <h1 className="text-4xl font-bold mb-4">We unleash<br /><span>business potential</span></h1>
                <div className="row-span-1 pb-5">
                  <p>We create brand experiences which are<br /> 
                    memorable and distinct. Our experienced <br />
                    team create and develop brands with<br /> 
                    personality and resonance.
                  </p>
                </div>

                <div className="pb-10">
                  <a href="/" className="cta-pink">Let's Go</a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div>
              <img src={HeroImage} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;