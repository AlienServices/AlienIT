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
              All Cloud Computing Solutions Here
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
                src={"/static/cloud.webp"}
                fill={true}
              />
            </div>
            <div className={styles.stuff}>
              <h3 className={styles.title}>
                Benefits of Cloud Services: Enhancing Scalability and Flexibility
              </h3>
              <div className={styles.paragraphfifty}>
                Cloud services offer unmatched flexibility and scalability, allowing businesses to quickly adapt to changing needs. This means effortlessly adjusting resources to match demand spikes, whether it's handling increased website traffic or expanding data storage. With cloud computing, organizations can easily scale up or down, ensuring efficient resource allocation without the limitations of traditional systems. This adaptability not only fosters innovation but also streamlines operations, empowering companies to stay agile and responsive in today's fast-paced markets.
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
