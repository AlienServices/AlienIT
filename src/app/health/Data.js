"use client";
import Image from "next/image"; import Link from "next/link";

import { Quote } from "../SVG/Quote";
import { PatternFormat } from "react-number-format";
import Header from "../components/header";
import Funnel from "../funnel/page";
import Footer from "../components/footer";
import Head from "next/head";
import styles from "../styles/finance.module.css";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function health() {
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
              Digital Health Solutions: Empowering Wellness and Transforming
              Healthcare
            </h1>
            <div className={styles.buttonRow}>
              <h2 className={styles.paragraph}>
                Harnessing the Power of Technology to Revolutionize Patient
                Care, Efficiency, and Outcomes
              </h2>
            </div>
            <a href="/assesment">
              <div className={styles.arrowRow}>
                <Link href="/assesment"><div className={styles.bold}>Get A Free Assesment</div></Link>
                <Image alt={"arrow right"} src={"/static/right.webp"} height={30} width={30} />
              </div>
            </a>
          </div>
          <Image alt={"right arrow"} src={"/static/arrow.webp"} height={70} width={70} />
        </div>
        <div className={styles.sectionRow}>
          <div className={styles.eighty}>
            <div className={styles.imageContainer}
            >
              <Image
                alt={"it services for healthcare"}
                style={{ borderRadius: "5px" }}
                src={"/static/hospital.webp"}
                fill={true}
              />
            </div>
            <div className={styles.stuff}>
              <h3 className={styles.title}>
                Seamless Healthcare IT Solutions: Empowering Your Practice for
                Uninterrupted Operations
              </h3>
              <div className={styles.paragraphfifty}>
                Alien IT understands the crucial role of healthcare IT services in
                ensuring the seamless operation of your medical practice. From
                maintaining accurate patient records to enabling secure data
                access, your technology infrastructure is instrumental in
                delivering quality care to your patients. Given the increasing
                frequency of cyber attacks targeting healthcare organizations,
                data security has become a paramount concern. Compliance with
                stringent guidelines, such as HIPAA, is essential for safeguarding
                and protecting sensitive patient health information. Alien IT's
                healthcare IT services offer comprehensive security measures to
                fortify the protection of critical data within your practice. By
                establishing a robust network infrastructure, we provide a secure
                environment where authorized access is granted while unauthorized
                access is effectively prevented. With our solutions in place, you
                can confidently prioritize patient care, knowing that your
                protected health information remains shielded from potential
                threats.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionOpposite}>
          <div className={styles.imageContainer}
          >
            <Image
              alt={"it services for hospitals"}
              style={{ borderRadius: "5px" }}
              src={"/static/health.webp"}
              fill={true}
            />
          </div>
          <div className={styles.stuff}>
            <h4 className={styles.title}>
              Elevating Patient Care: How Managed IT Enhances Your Medical
              Practice
            </h4>
            <div className={styles.paragraphfifty}>
              Managed IT services from Alien IT offer healthcare businesses the
              opportunity to elevate their patient care through improved network
              security, 24/7 monitoring, in-depth IT assessments, seamless
              integration with EHR and medical software, remote and on-site
              support, and expert security planning and implementation. With our
              flexible and cloud-based solutions, we empower your medical
              practice to operate with enhanced efficiency, productivity, and
              confidence in comprehensive security measures. Trust Alien IT to
              optimize your IT infrastructure, allowing you to better serve your
              patients while we handle your technology needs.
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  );
}
