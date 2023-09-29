import './App.css'
import React, { useEffect, useState, useRef } from "react";
import convert from 'convert-seconds';
import CircularSlider from "react-circular-slider-svg";

export const Slider = () => {
  const [value, changeValue] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  
  const audioRef = useRef(null);

  
  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    };

    const handleAudioEnd = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleLoadedMetadata = () => {
        setDuration(audio.duration);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', handleAudioEnd);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', handleAudioEnd);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const seekTime = e;
    audio.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleVolumeChange = (e) => {
    const audio = audioRef.current;
    const newVolume = e.target.value;
    audio.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <div className="auido-container">
    <div className="textContainer">
       <audio id='audio' ref={audioRef} src="../public/song.mp3" />

       {convert( Math.floor(currentTime)).minutes}:{convert( Math.floor(currentTime)).seconds} / {convert(Math.floor(duration)).minutes}:{convert(Math.floor(duration)).seconds}
    </div>

        <div className="slider_wrapper">
    <CircularSlider
    size={350}
    minValue={0}
    maxValue={duration || 100}
    startAngle={0}
    endAngle={180}
    angleType={{
      direction: "ccw",
      axis: "-x"
    }}
    handle1={{
      value: currentTime,
      onChange: v => handleSeek(v)
    }}
   /*  handle2={{
      value: value2,
      onChange: v => setValue2(v)
    }} */
    arcColor="#00FFFF"
    arcBackgroundColor="#aaa"
  />
  </div>

  
  <button className='play_btn' onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
</div>
  )
}
