import React from 'react';

const Marquee = ({ textItems }) => {
  return (
    <div className="relative w-full overflow-hidden bg-electric text-white py-3 border-y border-transparent">
      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-electric to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-electric to-transparent z-10"></div>
      
      <div className="flex w-max animate-marquee">
        {/* Repeat content 4 times for seamless looping on all screen sizes */}
        {[0, 1, 2, 3].map((setIndex) => (
          <div key={setIndex} className="flex items-center shrink-0">
            {textItems.map((item, index) => (
              <React.Fragment key={`${setIndex}-${index}`}>
                <span className="font-heading font-medium tracking-wide uppercase whitespace-nowrap text-sm px-4">{item}</span>
                <span className="text-gold shrink-0">✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
