"use client";
import Image from "next/image";
import Link from "next/link";
import { Quote } from "../SVG/Quote";
import { PatternFormat } from "react-number-format";
import Header from "../components/header";
import Head from "next/head";
import Funnel from "../funnel/page";
import Footer from "../components/footer";
import styles from "../styles/finance.module.css";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function manufactoring() {
  return (
    <div>
      <Head>
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://youritcompany.com/manufacturing-services"
        />
        <title>
          IT Solutions for the Manufacturing Industry | Your IT Company
        </title>
        <meta
          name="description"
          content="Your IT Company offers comprehensive IT solutions tailored for the manufacturing industry. From inventory management systems to process automation, our expert team ensures efficient operations and optimized production workflows for manufacturing businesses."
        />
        <meta
          name="keywords"
          content="IT solutions for manufacturing industry, manufacturing IT services, inventory management systems, process automation, cybersecurity, IT consulting, IT support, manufacturing technology, production optimization, digital transformation"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "IT Solutions for the Manufacturing Industry",
              description:
                "Your IT Company offers comprehensive IT solutions tailored for the manufacturing industry. From inventory management systems to process automation, our expert team ensures efficient operations and optimized production workflows for manufacturing businesses.",
              brand: "Your IT Company",
              url: "https://alienit.com/manufacturing",
              
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
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/landscape" />
        <title>Landscape Component</title>
        <meta
          name="description"
          content="A landscape component for your website."
        />
        <meta name="keywords" content="landscape, component, website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Landscape Component",
              description: "A landscape component for your website.",
              url: "https://yourwebsite.com/landscape",
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
            <h1 className={styles.mainTitle}>
              Driving Manufacturing Excellence through Advanced IT Solutions:
              Empowering Efficiency, Quality, and Growth
            </h1>
            <div className={styles.buttonRow}>
              <h2 className={styles.paragraph}>
                Transforming Manufacturing Processes with Smart Technology:
                Optimizing Operations and Accelerating Industry 4.0 Adoption
              </h2>
            </div>
            
              <div className={styles.arrowRow}>
                <Link href="/assesment"><div className={styles.bold}>Get A Free Assesment</div></Link>
                <Image  alt={"right arrow"} src={"/static/right.webp"} height={30} width={30} />
              </div>
            
          </div>
          <Image alt={"down arrow"} src={"/static/arrow.webp"} height={70} width={70} />
        </div>
        <div className={styles.sectionRow}>
          <div className={styles.imageContainer}
          >
            <Image
              alt={"it services for manufactoring companies"}
              style={{ borderRadius: "10px" }}
              src={"/static/manufactor.webp"}
              width={350}
              height={450}
            />
          </div>
          <div className={styles.stuff}>
            <h3 className={styles.title}>
              PROPELLING YOUR BUSINESS INTO THE FUTURE
            </h3>
            <div className={styles.paragraphfifty}>
              In the dynamic world of manufacturing, seamless telecommunications
              networks, efficient product distribution systems, reliable
              broadband access, and robust data management are essential for
              success. At Alien IT, we recognize the paramount importance of
              these capabilities in driving your business forward. We also
              understand that many manufacturers still rely on outdated
              technology and systems. That's where our expertise comes into
              play. We offer your manufacturing business access to the latest
              and most innovative IT solutions available in the market today.
              From state-of-the-art enterprise resource planning (ERP) systems
              to advanced data storage and security solutions, we possess the
              experience and know-how to propel your business to new heights.
              Partnering with Alien IT means unlocking the potential for
              enhanced operational efficiency and unparalleled growth in the
              competitive manufacturing landscape.
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  );
}
