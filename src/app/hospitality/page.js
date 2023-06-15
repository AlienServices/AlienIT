"use client";
import Image from "next/image";
import Link from "next/link";
import { Quote } from "../SVG/Quote";
import { PatternFormat } from "react-number-format";
import Header from "../components/header";
import Funnel from "../funnel/page";
import Footer from "../components/footer";
import Head from "next/head";
import styles from "../styles/finance.module.css";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function hospitality() {
  return (
    <div>
      <Head>
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://youritcompany.com/hospitality-services"
        />
        <title>
          IT Solutions for the Hospitality Industry | Your IT Company
        </title>
        <meta
          name="description"
          content="Your IT Company offers comprehensive IT solutions tailored for the hospitality industry. From property management systems to guest experience platforms, our expert team ensures efficient operations and enhanced guest satisfaction for hospitality businesses."
        />
        <meta
          name="keywords"
          content="IT solutions for hospitality industry, hospitality IT services, property management systems, guest experience platforms, cybersecurity, IT consulting, IT support, hospitality technology, guest satisfaction, digital transformation"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "IT Solutions for the Hospitality Industry",
              description:
                "Your IT Company offers comprehensive IT solutions tailored for the hospitality industry. From property management systems to guest experience platforms, our expert team ensures efficient operations and enhanced guest satisfaction for hospitality businesses.",
              brand: "Your IT Company",
              url: "https://alienit.com/hospitality",
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
            <h1 className={styles.mainTitle}>
              Revolutionizing Hospitality with Innovative IT Solutions:
              Enhancing Guest Experiences and Operational Efficiency
            </h1>
            <div className={styles.buttonRow}>
              <h2 className={styles.paragraph}>
                Elevate Your Hospitality Business with Next-Generation
                Technology: Unleashing the Power of Digital Innovationp
              </h2>
            </div>
            <a href="/assesment">
              <div className={styles.arrowRow}>
                <Link href="/assesment"><div className={styles.bold}>Get A Free Assesment</div></Link>
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
              alt={"it services for hotels"}
              style={{ borderRadius: "5px" }}
              src={"/hotel.webp"}
              width={550}
              height={350}
            />
          </div>
          <div className={styles.stuff}>
            <h3 className={styles.title}>
              Transform Your Hotel with Superior IT Management
            </h3>
            <div className={styles.paragraphfifty}>
              Alien IT unleashes the full potential of top-tier IT management
              within the hospitality and tourism industry, empowering businesses
              to wield a secret weapon that surpasses expectations. By
              harnessing the capabilities of your IT infrastructure, you can
              transcend the ordinary and create unforgettable experiences for
              your patrons, transforming them into loyal, lifelong customers.
              With a myriad of service-based innovations emerging in the tech
              field, enhancing your IT management is paramount in elevating the
              guest experience and maintaining a competitive edge. Alien IT
              provides the expertise and cutting-edge solutions necessary to
              navigate this ever-changing landscape, ensuring your business
              thrives in the face of evolving customer demands.
            </div>
          </div>
        </div>
        <div className={styles.sectionOpposite}>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              alt={"software support for hotels"}
              style={{ borderRadius: "5px" }}
              src={"/hotel2.webp"}
              width={550}
              height={350}
            />
          </div>
          <div className={styles.stuff}>
            <h3 className={styles.title}>
              Safeguarding IT Security: Protecting Guests and Businesses Alike
            </h3>
            <div className={styles.paragraphfifty}>
              With cyberattacks occurring at an alarming frequency of every 39
              seconds, every moment with comprehensive cybersecurity measures
              becomes crucial. Alien IT understands the significance of
              safeguarding both guests and businesses in the hospitality
              industry. We recognize the vital role that data plays in the
              longevity of your hospitality business and the trust bestowed upon
              you by your valued guests. That's why we go the extra mile to
              implement our strongest security measures specifically tailored
              for hotels, motels, inns, restaurants, and resorts. Hospitality is
              an industry that demands constant attention, and we understand
              that data security shouldn't be a burden on your mind. Allow Alien
              IT to handle the behind-the-scenes cybersecurity tasks, enabling
              you to focus wholeheartedly on providing the best possible
              experience for your patrons. Rest assured, we are committed to
              fortifying your IT security, so you can navigate the ever-evolving
              landscape of cyber threats with confidence and peace of mind.
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  );
}
