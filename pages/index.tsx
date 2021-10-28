import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import ListComponent from "../components/ListComponent";
import MapComponent from "../components/MapComponent";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>UrbanMatrix React Assignment</title>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://urbanmatrix.co.in">UrbanMatrix</a> React Assignment
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <div className={styles.gridContainer}>
          <ListComponent className={styles.item} />
          <MapComponent className={styles.item} />
        </div>
      </main>
    </div>
  );
};

export default Home;
