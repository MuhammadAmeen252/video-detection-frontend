'use client';

import React, { useRef, useState } from 'react';
import CustomButton from '../components/Button';
import DraggableBox from '../components/DraggableBox';
import DroppableBox from '../components/DroppableBox';
import { useRouter } from 'next/navigation'
import styles from '@/styles';

const Video: React.FC = () => {
  const router = useRouter()
  const droppableBoxRef = useRef<HTMLDivElement>(null);
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isCalibrate, setIsCalibrate] = useState(false);

  const toggleVideo = () => {
    setShowVideo((prev) => !prev);
    setIsCalibrate(false);
  };

  const toggleCalibrate = () => {
    setIsCalibrate((prev) => !prev);
  };

  return (
    <div className={`flex flex-col w-full justify-center items-center mt-5 ${styles.innerWidth} ${styles.paddings}`}>
      <div className="flex flex-row pb-2 justify-center items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${!showVideo ? "bg-red-600" : "bg-green-600"}`} />
        <p className="font-sm">{!showVideo ? "Offline" : "Online"}</p>
      </div>
      <DroppableBox ref={droppableBoxRef}>
        {showVideo ? (
          <video width={'100%'} height={'100%'} controls ref={videoRef}>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className='w-[100%] h-[100%] bg-[#e9e9e9] flex justify-center items-center'>
            <p>Offline</p>
          </div>
        )}
        {/* <div className='w-[500px] h-[500px] bg-[#e9e9e9]'></div> */}
        {showVideo && <DraggableBox parentRef={droppableBoxRef} isMoveable={isCalibrate}/>}

      </DroppableBox>
      <div className="flex md:flex-row flex-col gap-5 justify-start p-5 relative sm:mt-0 mt-[45px]">
        <CustomButton text={showVideo ? "Turn Off" : "Turn On"} icon="on-off.png" handleOnclick={toggleVideo} />
        <CustomButton 
          text={isCalibrate ? "Calibrate On" : "Calibrate Off"}
          icon="calibrate.png" 
          handleOnclick={toggleCalibrate} 
          focus={isCalibrate}
        />
        {/* <CustomButton
          text={!showVideo ? "Offline" : "Online"}
          htmlContent={<div className={`w-3 h-3 rounded-full ${!showVideo ? "bg-red-600" : "bg-green-600"}`} />}
        /> */}
        {/* <CustomButton text="Camera mode" icon="cam.png" /> */}
        <CustomButton text="Detection Log" icon="log.png" handleOnclick={() => router.push('/logs')}/>
      </div>
    </div>
  );
};

export default Video;
