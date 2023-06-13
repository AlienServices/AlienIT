"use client";
import Image from "next/image";
import { Quote } from "../SVG/Quote";
import { PatternFormat } from "react-number-format";
import Header from "../components/header";
import Funnel from "../funnel/page";
import Head from "next/head";
import Footer from "../components/footer";
import styles from "../styles/finance.module.css";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function landscape() {
  return (
    <div>
      <Head>
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://youritcompany.com/landscape-services"
        />
        <title>IT Solutions for the Landscape Industry | Your IT Company</title>
        <meta
          name="description"
          content="Your IT Company offers comprehensive IT solutions tailored for the landscape industry. From project management systems to fleet tracking software, our expert team ensures efficient operations and streamlined workflows for landscape businesses."
        />
        <meta
          name="keywords"
          content="IT solutions for landscape industry, landscape IT services, project management systems, fleet tracking software, cybersecurity, IT consulting, IT support, landscape technology, workflow optimization, digital transformation"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "IT Solutions for the Landscape Industry",
              description:
                "Your IT Company offers comprehensive IT solutions tailored for the landscape industry. From project management systems to fleet tracking software, our expert team ensures efficient operations and streamlined workflows for landscape businesses.",
              brand: "Your IT Company",
              url: "https://alienit.com/landscape",
              image: "https://alienit.com/static/logo.webp",
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                lowPrice: "Contact for Pricing",
                highPrice: "Contact for Pricing",
                offerCount: "Multiple",
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

        <div className={styles.section}>
          <div
            style={{
              height: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className={styles.mainTitle}>
              Streamline Your Accounting and Finance Operations with Our Robust
              IT Services
            </div>
            <div className={styles.buttonRow}>
              <div className={styles.paragraph}>
                Enhance Efficiency and Security with Tailored IT Solutions for
                Accounting and Finance
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
              alt={"it service for landscaping companies"}
              style={{ borderRadius: "5px" }}
              src={"/landscape.webp"}
              width={400}
              height={450}
            />
          </div>
          <div className={styles.stuff}>
            <div className={styles.title}>
              THE BENEFITS OF MANAGED IT SERVICES FOR YOUR BUSINESS
            </div>
            <div className={styles.paragraphfifty}>
              The landscape and pool industries have experienced rapid
              technological advancements in recent years, with online sales
              tools and customer portals driving revenue and satisfaction. Alien
              IT specializes in tailored IT services that optimize these tools,
              manage cybersecurity risks, safeguard data, and ensure swift
              disaster recovery. Don't struggle with IT services alone - let
              Alien IT be your trusted partner.
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  );
}
