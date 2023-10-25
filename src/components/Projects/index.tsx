import styles from "@/styles/Responsive.module.css";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const array = [0, 1, 2, 3, 4];

export default function Projects() {
  return (
    <Stack spacing={4} className="Container" id="projects">
      <Typography variant="h2" textAlign={"center"}>
        Projetos <span className="font-light">destaque</span>
      </Typography>
      <div className={styles.container}>
        <Carousel
          // showArrows={false}
          showIndicators={true}
          infiniteLoop={true}
          autoPlay={true}
          transitionTime={800}
          interval={3000}
          dynamicHeight={false}
          className={styles.mySwiper}
          showStatus={false}
          showThumbs={true}
        >
          {array.map((item) => (
            <div key={item} className={styles.swipItem}>
              <div className={styles.imgBox}>
                <Image
                  src={"/assets/images/01.jpeg"}
                  alt="slides"
                  width={500}
                  height={500}
                />
              </div>
              <div className={styles.detail}>
                <h2>titulo</h2>
                <p style={{ padding: "10px", marginBottom: "20px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore animi incidunt quasi, nesciunt deleniti nihil quas
                  illo laborum numquam distinctio perferendis debitis maiores
                  ex? Ab id fuga deleniti ratione error. sfsdf dfssfdf dsdfds
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore natus delectus dignissimos accusantium dolor eaque
                  libero consequatur pariatur quis quia vero recusandae optio
                  odit quisquam quas, iusto minus. Temporibus, quas!
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </Stack>
  );
}
