"use client";
import Image from "next/image";
import { Quote } from "../SVG/Quote";
import { PatternFormat } from "react-number-format";
import Header from "../components/header";
import Funnel from "../funnel/page";
import Footer from "../components/footer";
import styles from "../styles/about.module.css";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function about() {
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
            <div className={styles.mainTitle}>How Alien IT is different</div>
            <div className={styles.buttonRow}>
              <div className={styles.paragraph}>
                Stop worrying about your IT, let us worry for you
              </div>
            </div>
            <a href="/assesment">
              <div className={styles.arrowRow}>
                <div className={styles.bold}>Get A Free Assesment</div>
                <Image src={"/arrowR.webp"} height={30} width={30} />
              </div>
            </a>
          </div>
          <Image src={"/arrow.webp"} height={70} width={70} />
        </div>
        <div className={styles.section}>
          <div style={{ padding: "20px", fontSize: "50px" }}>About us</div>
          <div className={styles.center}>
            When it comes to choosing an IT partner, there are several reasons
            why Alien IT stands out from the crowd. First and foremost, our team
            of highly skilled professionals brings a wealth of expertise and
            experience to the table. We stay ahead of the curve by staying up to
            date with the latest industry trends, ensuring that we deliver
            cutting-edge solutions tailored to your specific needs.
          </div>
          <div style={{ padding: "10px" }} className={styles.center}>
            Additionally, we take a client-centric approach, building strong
            relationships based on trust and transparency. Our solutions are
            customized to your unique requirements, guaranteeing the most
            effective and efficient services. We are dedicated to delivering
            top-notch quality and reliability, striving for excellence in every
            project we undertake. Furthermore, our commitment to continuous
            support means that our partnership doesn't end with project
            completion—we provide ongoing support and maintenance to keep your
            technology infrastructure secure and up to date. Join us on a
            transformative journey and experience the Alien IT difference—let us
            empower you to reach for the stars in the digital realm.
          </div>
        </div>
        <Funnel />
      </div>

      <Footer />
    </div>
  );
}
