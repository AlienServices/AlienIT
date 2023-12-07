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
              Navigating Efficiency: Unveiling the Power of SD-WAN Service
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
                src={"/static/diagram.webp"}
                fill={true}
              />
            </div>
            <div className={styles.stuff}>
              <h3 className={styles.title}>
                Understanding SD-WAN: Simplifying Network Infrastructure
              </h3>
              <div className={styles.paragraphfifty}>
                SD-WAN simplifies network infrastructure by using software to manage and optimize connections. Unlike traditional setups, it streamlines control, allowing businesses to easily handle different types of connections like MPLS or broadband internet. With software-defined policies, it provides better control over network traffic, optimizing resources, and ensuring critical applications run smoothly. This technology makes networks more agile, cost-effective, and adaptable to modern connectivity demands.
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
