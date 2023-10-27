// "use client";
import { projects } from "@/data/list";
import styles from "@/styles/Responsive.module.css";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
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
          light
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
  return (
    <Stack spacing={4} className="Container" id="projects">
      <Typography variant="h2" textAlign={"center"}>
        Projetos <span className="font-light">destaque</span>
      </Typography>
      <Stack>
        <Carousel
          // showArrows={false}
          showIndicators={true}
          infiniteLoop={true}
          // autoPlay={true}
          transitionTime={800}
          interval={3000}
          dynamicHeight={true}
          className={styles.mySwiper}
          showStatus={false}
          swipeable={true}
          emulateTouch={true}
        >
          {projects.map((project, index) => (
            <div key={index} className={styles.swipItem}>
              <div className={styles.imgBox}>
                {/* <Image
                  src={project.img}
                  alt="slides"
                  width={500}
                  height={500}
                /> */}
                <video src={project.video} controls muted loop />
              </div>
              <div className={styles.detail}>
                <h2>{project.titulo}</h2>
                <p>Projetista: {project.projetista}</p>
                <p>Modelagem: {project.modelagem}</p>
                <p>Render: {project.render}</p>
                <div style={{ padding: "10px" }}></div>
              </div>
            </div>
          ))}
        </Carousel>
      </Stack>
    </Stack>
  );
}
