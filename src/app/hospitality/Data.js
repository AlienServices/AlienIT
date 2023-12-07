"use client";
import Image from "next/image";
import Link from "next/link";
import { Quote } from "../SVG/Quote";
import { PatternFormat } from "react-number-format";
import Header from "../components/header";
import Funnel from "../funnel/page";
import Footer from "../components/footer";
import Head from "next/head";
import styles from "../styles/finance.module.css";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function hospitality() {
  return (
    <div>
      <div style={{ color: "black" }} className={styles.backgroundColor}>
        <Header />

        <div className={styles.section}>
          <div
            style={{
              height: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 className={styles.mainTitle}>
              Revolutionizing Hospitality with Innovative IT Solutions:
              Enhancing Guest Experiences and Operational Efficiency
            </h1>
            <div className={styles.buttonRow}>
              <h2 className={styles.paragraph}>
                Elevate Your Hospitality Business with Next-Generation
                Technology: Unleashing the Power of Digital Innovationp
              </h2>
            </div>
            <a href="/assesment">
              <div className={styles.arrowRow}>
                <Link href="/assesment"><div className={styles.bold}>Get A Free Assesment</div></Link>
                <Image alt={"arrow right"} src={"/static/right.webp"} height={30} width={30} />
              </div>
            </a>
          </div>
          <Image alt={"arrow right"} src={"/static/arrow.webp"} height={70} width={70} />
        </div>        
        <div className={styles.sectionOpposite}>
          <div className={styles.imageContainer}
          >
            <Image
              alt={"software support for hotels"}
              style={{ borderRadius: "5px" }}
              src={"/static/hotel2.webp"}
              fill={true}
            />
          </div>
          <div className={styles.stuff}>
            <h3 className={styles.title}>
              Safeguarding IT Security: Protecting Guests and Businesses Alike
            </h3>
            <div className={styles.paragraphfifty}>
              With cyberattacks occurring at an alarming frequency of every 39
              seconds, every moment with comprehensive cybersecurity measures
              becomes crucial. Alien IT understands the significance of
              safeguarding both guests and businesses in the hospitality
              industry. We recognize the vital role that data plays in the
              longevity of your hospitality business and the trust bestowed upon
              you by your valued guests. That's why we go the extra mile to
              implement our strongest security measures specifically tailored
              for hotels, motels, inns, restaurants, and resorts. Hospitality is
              an industry that demands constant attention, and we understand
              that data security shouldn't be a burden on your mind. Allow Alien
              IT to handle the behind-the-scenes cybersecurity tasks, enabling
              you to focus wholeheartedly on providing the best possible
              experience for your patrons. Rest assured, we are committed to
              fortifying your IT security, so you can navigate the ever-evolving
              landscape of cyber threats with confidence and peace of mind.
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  );
}
