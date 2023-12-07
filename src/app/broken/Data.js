"use client";
import Image from "next/image";
import Link from "next/link";
import Funnel from "../funnel/page";
import { Quote } from "../SVG/Quote";
import Head from "next/head";
import { PatternFormat } from "react-number-format";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/finance.module.css";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function backup() {
  return (
    <div>
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/repair" />
        <title>
          Rapid Hardware Recovery: Trust Alien IT for Effective Repair Solutions
          and Minimal Downtime
        </title>
        <meta
          name="description"
          content="Stop worrying about your connection, let us worry for you"
        />
        <meta
          name="keywords"
          content="hardware repair, technology infrastructure, hardware solutions, reliable technology, hardware problems, malfunctioning computers, faulty peripherals, industry-leading diagnostic tools, minimize downtime, efficient hardware repairs, restore functionality, core business activities"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Hardware Repair",
              description:
                "Seamless hardware solutions: Alien IT's expert repair services for a reliable technology infrastructure.",
              brand: "Alien IT",
              url: "https://alienit.com/broken",

              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                lowPrice: "Your Lowest Price",
                highPrice: "Your Highest Price",
                offerCount: "Number of Services Available",
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
              },
            }),
          }}
        />
      </Head>
      <div style={{ color: "black" }} className={styles.backgroundColor}>
        <Header />

        <div  className={styles.section}>
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
              Rapid Hardware Recovery: Trust Alien IT for Effective Repair
              Solutions and Minimal Downtime
            </h1>
            <div className={styles.buttonRow}>
              <h2 className={styles.paragraph}>
                Stop worrying about your connection, let us worry for you
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
          <div className={styles.imageContainer}
          >
            <Image
              alt={"Hardware Repair"}
              style={{ borderRadius: "10px" }}
              src={"/static/repair.webp"}
              fill={true}
            />
          </div>
          <div className={styles.stuff}>
            <h3 className={styles.title}>
              Seamless Hardware Solutions: Alien IT's Expert Repair Services for
              a Reliable Technology Infrastructure
            </h3>
            <div className={styles.paragraphfifty}>
              At Alien IT, we specialize in resolving hardware issues to ensure
              your technology infrastructure runs smoothly. Our team of skilled
              technicians possesses extensive knowledge and experience in
              diagnosing and repairing a wide range of hardware problems. From
              malfunctioning computers and servers to faulty peripherals and
              components, we have the expertise to get your equipment back in
              working order. We utilize industry-leading diagnostic tools and
              techniques to accurately identify the root cause of hardware
              failures and implement effective solutions. Our priority is to
              minimize downtime and disruption to your business operations by
              providing timely and efficient hardware repairs. With Alien IT as
              your trusted partner, you can count on us to restore your
              hardware's functionality and reliability, enabling you to focus on
              what matters most: your core business activities.
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  );
}
