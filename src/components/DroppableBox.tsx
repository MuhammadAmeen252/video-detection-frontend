'use client';
import React from 'react';

interface DroppableBoxProps {
    children: React.ReactNode;
    height?: number;
}

const DroppableBox = React.forwardRef<HTMLDivElement, DroppableBoxProps>((props, ref) => {
    return (
    <div ref={ref} className={`md:w-[800px] md:h-[450px]
     sm:w-[600px] sm:h-[340px] 
     bg-[#e9e9e9] relative 
     w-[300px] h-[170px]`}>
      {props.children}
    </div>
  );
});

export default DroppableBox;
