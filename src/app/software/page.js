"use client";
import Image from "next/image";
import Funnel from "../funnel/page";
import { Quote } from "../SVG/Quote";
import { PatternFormat } from "react-number-format";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/finance.module.css";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function backup() {
  return (
    <div>
      <Head>
        <title>
          Reliable Support for Your Digital Solutions: Alien IT's Expert
          Software and App Assistance
        </title>
        <meta
          name="description"
          content="Stop worrying about your software, let us worry for you"
        />
        <meta
          name="keywords"
          content="software support, app assistance, digital solutions, IT services"
        />
        <meta
          property="og:title"
          content="Reliable Support for Your Digital Solutions: Alien IT's Expert Software and App Assistance"
        />
        <meta
          property="og:description"
          content="Stop worrying about your software, let us worry for you"
        />
        <meta property="og:image" content="/app.webp" />
        <meta
          property="og:url"
          content="https://example.com/software-support"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Alien IT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Reliable Support for Your Digital Solutions: Alien IT's Expert Software and App Assistance"
        />
        <meta
          name="twitter:description"
          content="Stop worrying about your software, let us worry for you"
        />
        <meta name="twitter:image" content="/app.webp" />
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
              Reliable Support for Your Digital Solutions: Alien IT's Expert
              Software and App Assistance
            </div>
            <div className={styles.buttonRow}>
              <div className={styles.paragraph}>
                Stop worrying about your software, let us worry for you
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
              alt={"data and software backup"}
              style={{ borderRadius: "10px" }}
              src={"/app.webp"}
              width={500}
              height={350}
            />
          </div>
          <div className={styles.stuff}>
            <div className={styles.title}>
              Seamless Software and App Support: Alien IT's Expert Assistance
              for Smooth Digital Operations
            </div>
            <div className={styles.paragraphfifty}>
              At Alien IT, we offer comprehensive software and app support
              services to ensure the smooth operation of your digital
              applications. Our experienced team is well-versed in a wide range
              of software solutions and platforms, enabling us to provide expert
              assistance for troubleshooting, maintenance, and updates. Whether
              you're facing compatibility issues, software glitches, or need
              guidance on utilizing specific features, our experts are here to
              help. We offer timely resolutions to technical issues, ensuring
              minimal disruption to your business processes. Additionally, we
              provide proactive monitoring to detect potential software
              vulnerabilities and apply necessary patches and updates to enhance
              security and performance. With Alien IT's software and app
              support, you can maximize the efficiency of your digital solutions
              and optimize your business operations with confidence.
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  );
}
