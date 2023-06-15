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
      <Head>
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://youritcompany.com/software-support"
        />
        <title>Software and App Support | Your IT Company</title>
        <meta
          name="description"
          content="Your IT Company provides comprehensive software and app support services. Our expert team offers technical assistance, troubleshooting, and maintenance for various software applications and mobile apps, ensuring smooth operation and optimal performance for your business."
        />
        <meta
          name="keywords"
          content="software support, app support, software maintenance, app maintenance, software troubleshooting, app troubleshooting, software assistance, app assistance, software performance, app performance, software solutions, app solutions"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Software and App Support",
              seller: {
                "@type": "LocalBusiness",
                name: "Alien IT",
                telephone: "(801) 261-0510",
                email: "info@copiersutah.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "554 W 8360 S",
                  addressLocality: "Sandy",
                  addressRegion: "Utah",
                  postalCode: "84070",
                  addressCountry: "USA",
                },
              },
              description:
                "Your IT Company provides comprehensive software and app support services. Our expert team offers technical assistance, troubleshooting, and maintenance for various software applications and mobile apps, ensuring smooth operation and optimal performance for your business.",
              serviceOutput:
                "Smooth operation and optimal performance of software applications and mobile apps",
            }),
          }}
        />
      </Head>
      <div style={{ color: "black" }} className={styles.backgroundColor}>
        <Header />

        <div style={{ height: "530px" }} className={styles.section}>
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
              Reliable Support for Your Digital Solutions: Alien IT's Expert
              Software and App Assistance
            </h1>
            <div className={styles.buttonRow}>
              <h2 className={styles.paragraph}>
                Stop worrying about your software, let us worry for you
              </h2>
            </div>
            <a href="/assesment">
              <div className={styles.arrowRow}>
                <Link href="/assesment"><div className={styles.bold}>Get A Free Assesment</div></Link>
                <Image src={"/arrowR.webp"} height={30} width={30} />
              </div>
            </a>
          </div>
        </div>

        <div className={styles.sectionRow}>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              alt={"data and software backup"}
              style={{ borderRadius: "10px" }}
              src={"/app.webp"}
              width={500}
              height={350}
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
      <Funnel />
      <Footer />
    </div>
  );
}
