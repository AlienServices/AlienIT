"use client";
import Image from "next/image";
import Link from "next/link";
import Funnel from "../funnel/page";
import { Quote } from "../SVG/Quote";
import { PatternFormat } from "react-number-format";
import Header from "../components/header";
import Head from "next/head";
import Footer from "../components/footer";
import styles from "../styles/finance.module.css";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function backup() {
  return (
    <div>
      <div style={{ color: "black" }} className={styles.backgroundColor}>
        <Header />

        <div className={styles.section}>
          <div
            style={{
              width: "95%",
              height: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 className={styles.mainTitle}>
              Simplified Communication: Amplify Efficiency with UCaaS Innovations
            </h1>
            <div className={styles.buttonRow}>
              <h2 className={styles.paragraph}>
                Stop worrying about your software, let us worry for you
              </h2>
            </div>            
              <div className={styles.arrowRow}>
                <Link href="/assesment"><div className={styles.bold}>Get A Free Assessment</div></Link>
                <Image alt={"right arrow"} src={"/static/right.webp"} height={30} width={30} />
              </div>            
          </div>
        </div>

        <div className={styles.sectionRow}>
          <div className={styles.eighty}>
            <div className={styles.imageContainer}
            >
              <Image
                alt={"data and software backup"}
                style={{ borderRadius: "10px" }}
                src={"/static/it.webp"}
                fill={true}
              />
            </div>
            <div className={styles.stuff}>
              <h3 className={styles.title}>
                Seamless Software and App Support: Alien IT's Expert Assistance
                for Smooth Digital Operations
              </h3>
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
      </div>
      <Funnel />
      <Footer />
    </div>
  );
}
