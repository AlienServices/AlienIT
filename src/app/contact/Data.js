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
              Optimize Customer Engagement: Unleashing the Power of Contact Center Solutions
            </h1>
            <div className={styles.buttonRow}>
              <h2 className={styles.paragraph}>
                Stop worrying about your software, let us worry for you
              </h2>
            </div>
            <a href="/assesment">
              <div className={styles.arrowRow}>
                <Link href="/assesment"><div className={styles.bold}>Get A Free Assesment</div></Link>
                <Image alt={"right arrow"} src={"/static/right.webp"} height={30} width={30} />
              </div>
            </a>
          </div>
        </div>

        <div className={styles.sectionRow}>
          <div className={styles.eighty}>
            <div className={styles.imageContainer}
            >
              <Image
                alt={"data and software backup"}
                style={{ borderRadius: "10px" }}
                src={"/static/contact.webp"}
                fill={true}
              />
            </div>
            <div className={styles.stuff}>
              <h3 className={styles.title}>
                Customized Contact Center Solutions: Tailored for Your Business Needs
              </h3>
              <div className={styles.paragraphfifty}>
                Our contact center solutions are tailored to fit your business perfectly. We recognize that every business is unique, and our customizable options are designed to seamlessly align with your specific needs. Whether it's scaling up for growth, integrating with your current systems, or implementing special features, our solutions ensure efficient operations while delivering personalized customer experiences, ultimately driving your business forward
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
