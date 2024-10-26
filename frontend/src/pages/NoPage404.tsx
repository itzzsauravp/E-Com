import { useRef } from "react";
import { NavLink } from "react-router-dom";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";

const NoPage404 = () => {
  const playerRef = useRef<YouTubePlayer | null>(null);

  const onPlayerReady: YouTubeProps["onReady"] = (event): void => {
    playerRef.current = event.target;
    playerRef.current.setVolume(20)
    playerRef.current.playVideo();
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-purple-300">
      <YouTube
        videoId="dQw4w9WgXcQ"
        opts={{
          height: "315",
          width: "560",
          playerVars: {
            autoplay: 1,
            controls: 0,
            rel: 0,
            showinfo: 0,
            mute: 0,
          },
        }}
        onReady={onPlayerReady}
      />

      <p className="text-3xl mt-4">
        Hey there{" "}
        <span className="uppercase font-bold text-purple-500 cursor-pointer">
          pookie
        </span>{" "}
        💖 this page doesn't exist
      </p>

      <p className="text-tLight">
        Kindly navigate back to{" "}
        <NavLink to="/" className="uppercase text-2xl font-bold text-etBlue">
          home
        </NavLink>
      </p>
    </div>
  );
};

export default NoPage404;
