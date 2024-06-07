import React, { useState } from "react";
import ReactHowler from "react-howler";

interface BackgroundMusicProps {
  src: string;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <ReactHowler src={src} playing={isPlaying} loop={true} />
      <button onClick={togglePlay}>
        {isPlaying ? "Disable Music" : "Enable Music"}
      </button>
    </div>
  );
};

export default BackgroundMusic;
