import React from 'react';

const Marquee = ({ textItems }) => {
  return (
    <div className="relative w-full overflow-hidden bg-electric text-white py-3 border-y border-transparent">
      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-electric to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-electric to-transparent z-10"></div>
      
      <div className="flex w-[200%] animate-marquee">
        {/* We double the content to create a seamless loop */}
        <div className="flex w-1/2 justify-around items-center space-x-4">
          {textItems.map((item, index) => (
            <React.Fragment key={`first-${index}`}>
              <span className="font-heading font-medium tracking-wide uppercase whitespace-nowrap">{item}</span>
              <span className="text-gold mx-4">✦</span>
            </React.Fragment>
          ))}
        </div>
        <div className="flex w-1/2 justify-around items-center space-x-4">
          {textItems.map((item, index) => (
            <React.Fragment key={`second-${index}`}>
              <span className="font-heading font-medium tracking-wide uppercase whitespace-nowrap">{item}</span>
              <span className="text-gold mx-4">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
