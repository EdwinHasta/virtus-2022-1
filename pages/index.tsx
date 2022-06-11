import { GetServerSideProps } from "next";
import { Box, Button, Divider, Typography } from "@mui/material";
import type { NextPage } from "next";

// Components
import { Layout } from "../components/layout";
import { Nosotros, Ludicas, Teoria, Footer } from "../components/landing";

// Redux
import { useAppDispatch } from "../hooks";
import { INotification } from "../interfaces";
import { newNotification } from "../reducers";

// uuid
import { v4 as uuid } from "uuid";

// Auth
import { requireNoAuth } from "../auth";

//Motion Effects
import { motion, useViewportScroll } from "framer-motion";
import { useEffect } from "react";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const { scrollYProgress } = useViewportScroll();

  const handleNotification = () => {
    const payload: INotification = {
      id: uuid(),
      title: "Success:",
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, iusto quibusdam laboriosam magni at nesciunt quam. Architecto dignissimos numquam, fugiat rem commodi neque enim optio. Ut odit deserunt explicabo tenetur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, iusto quibusdam laboriosam magni at nesciunt quam. Architecto dignissimos numquam, fugiat rem commodi neque enim optio. Ut odit deserunt explicabo tenetur?",
      severity: "error",
    };
    dispatch(newNotification(payload));
  };

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <>
      <Layout title={"Home - App"}>
        <Box className="index__container">
          <motion.path style={{ pathLength: scrollYProgress }} />
          <Box className="index__landing" id="landing">
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", paddingBottom: "0.5em" }}
              textAlign={"center"}
            >
              PENSAMIENTO COMPUTACIONAL
            </Typography>
            <Typography
              variant="overline"
              fontWeight={"400"}
              fontSize={"1em"}
              textAlign={"justify"}
            >
              En esta página encontrarás todos los fundamentos necesarios para
              comprender acerca del pensamiento computacional y la importancia
              del mismo en todos los ámbitos de la ciencia y la ingeniería.
            </Typography>
            <Box className="index__options">
              <Button variant="contained"> About </Button>
              <Divider orientation="vertical" flexItem />
              <Button onClick={handleNotification}> Learn more </Button>
            </Box>
          </Box>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="index__sub-container"
            id="proyecto"
          >
            <Nosotros />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="index__sub-container"
            id="ludicas"
          >
            <Ludicas />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="index__sub-container"
            id="modulos"
          >
            <Teoria />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="index__sub-container"
            id="footer"
          >
            <Footer />
          </motion.div>
        </Box>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = requireNoAuth(
  async (_ctx) => {
    return {
      props: {},
    };
  }
);

export default Home;
