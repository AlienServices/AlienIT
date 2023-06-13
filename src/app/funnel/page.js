"use client";
import Image from "next/image";
import { Quote } from "../SVG/Quote";
import { PatternFormat } from "react-number-format";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/finance.module.css";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function funnel() {
  return (
    <div className={styles.sectionSmall}>
      
      <div
        style={{
          width: "100%",
          height: "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className={styles.mainTitle}>
          You dont need to do it on your own
        </div>
        <div className={styles.buttonRow}>
          <div className={styles.paragraph}>Let us figure it out for you</div>
        </div>
        <a href="/assesment">
          <div className={styles.arrowRow}>
            <div className={styles.bold}>Get A Free Assesment</div>
            <Image src={"/arrowR.webp"} height={30} width={30} />
          </div>
        </a>
      </div>
    </div>
  );
}
