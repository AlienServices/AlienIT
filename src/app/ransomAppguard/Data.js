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
import ImageHoverLink from "../components/imageHoverLink";

export default function ransomAppguard() {
  return (
    <div>
      <div 
      style={{ color: "black" }} className={styles.backgroundColor}
      >
        <Header />
        
        <div 
        style={{ height: "540px" }} className={styles.section}
        >
          <div className={styles.mainTitleContainer}>
            <h1 className={styles.mainTitle}>
              KEEP YOUR BUSINESS SAFE FROM <br />
              <span>CYBER THREATS</span> <br />
              <span>EFFORTLESSLY.</span>
            </h1>
            <div className={styles.buttonRow}>
              <h2 className={styles.paragraph}>
                Ransomware can disrupt your operations and cost you time, money, and trust. With AppGuard, you can protect your business against cyberattacks—no technical expertise needed.
              </h2>
            </div>
            <div>
              <h2 className={styles.paragraph}>
                Call us at <a href="tel:801-212-9016">801-212-9016</a> <br />
                or <br />
              </h2>
            </div>         
            <Link href="/assessmentAppguard">
              <button className={styles.bigButton} style={{ backgroundColor: 'rgb(250, 216, 21)' }} >SCHEDULE A CALL</button>
            </Link>   
              {/* <div className={styles.arrowRow}>
                <Link href="/assesment"><div className={styles.bold}>Get A Free Assessment</div></Link>
                <Image
                  alt={"right arrow"}
                  style={{ borderRadius: "10px" }}
                  src={"/static/right.webp"}
                  height={30}
                  width={30}
                />
              </div>             */}
          </div>
        </div>

<div className={styles.imageHoverLinkContainer}>
        <div>
        <ImageHoverLink 
        imageUrl='/static/Laptopwithshield.webp'
        title="SIMPLE, SEAMLESS SECURITY"
        description="Protect you systems without lifting a finger. AppGuard is designed to integrate effortlessly into your workflow, requiring a minimal oversight."
        linkUrl="/assesment"
      />
        </div>
        <div>
        <ImageHoverLink 
        imageUrl="/static/GreaterSecurity.webp"
        title="ZERO DAY DEFENSE"
        description="Stop new threats before they strike, with cutting-edge technology."
        linkUrl="/assesment"
      />
        </div>
        <div>
        <ImageHoverLink 
        imageUrl="/static/techMatrix.webp"
        title="MINIMAL MANAGEMENT"
        description="Whether you're using the latest tools or older setups, AppGuard has you covered without disrupting your day-to-day operations."
        linkUrl="/assesment"
      />
        </div>
</div>

        <div className={styles.appguardSectionRow}>
          <div className={styles.appguardSection}>

          <div className={styles.appguardContainer}>
              <h3 className={styles.title} style={{ fontSize: '62px', fontFamily: 'Poppins, sans-serif' }}>
                DON'T WAIT FOR A CRISIS.
              </h3>
              <div className={styles.appguardParagraph} 
              style={{ width: '82%', fontSize: 'x-large', fontFamily: 'Poppins, sans-serif', marginBottom: '1em' }}
              >
              Schedule a quick consultation to see how AppGuard can secure your business today.
              </div>
              <Link href="/assessmentAppguard">
              <button className={styles.appguardButton} style={{ backgroundColor: 'rgb(250, 216, 21)' }}>SCHEDULE A CALL</button>
            </Link>  
            </div>

            <div className={styles.imageContainer}>
              <Image
                alt={"ransomware services"}
                style={{ borderRadius: "10px" }}
                src={"/static/property.webp"}
                fill={true}
              />
            </div>

            
          </div>
        </div>
      </div>
      {/* <Funnel /> */}
      <Footer />
    </div>
  );
}
