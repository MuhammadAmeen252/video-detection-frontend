import React, { useState } from 'react';
import { Resizable, ResizeCallbackData } from 'react-resizable';
import '../styles/resizable.css'

const ResizeableBox: React.FC = () => {
  const [size, setSize] = useState({ width: 200, height: 200 });

  const onResize = (event: React.SyntheticEvent, { size: newSize }: ResizeCallbackData) => {
    setSize({ width: newSize.width, height: newSize.height });
  };

  return (
    <Resizable
      height={(size.height)}
      width={size.width}
      onResize={onResize}
      resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}
    >
      <div className="box" style={{ width: size.width + 'px', height: size.height + 'px', background:'red' }}>
        <span>Contents</span>
      </div>
    </Resizable>
  );
};

export default ResizeableBox;