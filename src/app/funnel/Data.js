"use client";
import Image from "next/image";
import Link from "next/link";
import { Quote } from "../SVG/Quote";
import { PatternFormat } from "react-number-format";
import Header from "../components/header";
import Footer from "../components/footer";

import styles from "../styles/finance.module.css";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function funnel() {
  return (
    <div className={styles.sectionSmall}>
      
      <div className={styles.gray}>
        <div className={styles.mainTitle}>
          You dont need to do it on your own
        </div>
        <div className={styles.buttonRow}>
          <div className={styles.paragraph}>Let us figure it out for you</div>
        </div>
        <a href="/assesment">
          <div className={styles.arrowRow}>
            <Link href="/assesment"><div className={styles.bold}>Get A Free Assesment</div></Link>
            <Image alt={"arrow right"} src={"/static/right.webp"} height={30} width={30} />
          </div>
        </a>
      </div>
    </div>
  );
}
