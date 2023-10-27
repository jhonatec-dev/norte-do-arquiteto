// "use client";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import screenfull from "screenfull";

export default function Projects() {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    setHasWindow(true);
  }, []);

  const playInFullScreen = () => {
    if (screenfull.isEnabled) {
      const element = document.getElementById("widget2");
      if (element) screenfull.request(element);
    }
  };

  const exitFullScreen = () => {
    if (screenfull.isEnabled) {
      screenfull.exit();
    }
  };

  return (
    <Stack spacing={4} className="Container" id="projects">
      <Typography variant="h2" textAlign={"center"}>
        Projetos <span className="font-light">destaque</span>
      </Typography>
      {hasWindow && (
        <ReactPlayer
          light={"/assets/images/projects/01.jpeg"}
          url="https://www.youtube.com/watch?v=uthJhzkKgc8"
          controls={!screenfull.isEnabled}
          playing={true}
          width={"100%"}
          style={{ flexGrow: 1 }}
          onPlay={playInFullScreen}
          onPause={exitFullScreen}
          
        />
      )}
    </Stack>
  );
}
