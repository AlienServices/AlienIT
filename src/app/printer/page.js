"use client";
import Image from "next/image";
import Funnel from "../funnel/page";
import { Quote } from "../SVG/Quote";
import { PatternFormat } from "react-number-format";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
import styles from "../styles/finance.module.css";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function backup() {
  return (
    <div>
      <Head>
        <title>
          Maximize Productivity: Comprehensive Printer Support Services by Alien
          IT
        </title>
        <meta
          name="description"
          content="At Alien IT, we provide comprehensive printer support services to ensure the smooth operation of your printing infrastructure. Our team of experienced technicians is well-versed in various printer makes and models, offering expertise in troubleshooting, maintenance, and repair."
        />
        <meta
          name="keywords"
          content="printer support, printer services, printer troubleshooting, printer maintenance, printer repair"
        />
        <meta
          property="og:title"
          content="Maximize Productivity: Comprehensive Printer Support Services by Alien IT"
        />
        <meta
          property="og:description"
          content="At Alien IT, we provide comprehensive printer support services to ensure the smooth operation of your printing infrastructure. Our team of experienced technicians is well-versed in various printer makes and models, offering expertise in troubleshooting, maintenance, and repair."
        />
        <meta property="og:image" content="/print.webp" />
        <meta property="og:url" content="https://example.com/printersupport" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Alien IT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Maximize Productivity: Comprehensive Printer Support Services by Alien IT"
        />
        <meta
          name="twitter:description"
          content="At Alien IT, we provide comprehensive printer support services to ensure the smooth operation of your printing infrastructure. Our team of experienced technicians is well-versed in various printer makes and models, offering expertise in troubleshooting, maintenance, and repair."
        />
        <meta name="twitter:image" content="/print.webp" />
      </Head>
      <div style={{ color: "black" }} className={styles.backgroundColor}>
        <Header />

        <div style={{ height: "530px" }} className={styles.section}>
          <div
            style={{
              width: "95%",
              height: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className={styles.mainTitle}>
              Maximize Productivity: Comprehensive Printer Support Services by
              Alien IT
            </div>
            <div className={styles.buttonRow}>
              <div className={styles.paragraph}>
                Stop worrying about your printers, let us worry for you
              </div>
            </div>
            <a href="/assesment">
              <div className={styles.arrowRow}>
                <div className={styles.bold}>Get A Free Assesment</div>
                <Image src={"/arrowR.webp"} height={30} width={30} />
              </div>
            </a>
          </div>
        </div>

        <div className={styles.sectionRow}>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              alt={"printer it services"}
              style={{ borderRadius: "10px" }}
              src={"/print.webp"}
              width={400}
              height={500}
            />
          </div>
          <div className={styles.stuff}>
            <div className={styles.title}>
              Efficient Printing Solutions: Comprehensive Printer Support by
              Alien IT
            </div>
            <div className={styles.paragraphfifty}>
              At Alien IT, we provide comprehensive printer support services to
              ensure the smooth operation of your printing infrastructure. Our
              team of experienced technicians is well-versed in various printer
              makes and models, offering expertise in troubleshooting,
              maintenance, and repair. Whether you need assistance with printer
              setup, driver installation, or resolving performance issues, our
              experts are here to help. We offer proactive monitoring to detect
              potential printer problems before they impact your workflow, and
              our swift response times ensure minimal downtime. With Alien IT's
              full printer support, you can rely on us to optimize your printing
              environment, increase efficiency, and keep your business running
              smoothly.
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  );
}
