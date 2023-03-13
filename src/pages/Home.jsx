import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="home__video">
        <video
          src="/assets/video/cb.mp4"
          className="home__video-vid"
          autoPlay
          muted
          playsInline
        ></video>
      </div>
    </div>
  );
};

export default Home;
