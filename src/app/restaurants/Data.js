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

export default function restaurants() {
  return (
    <div>
      <Head>
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://youritcompany.com/restaurant-services"
        />
        <title>IT Solutions for Restaurants | Your IT Company</title>
        <meta
          name="description"
          content="Your IT Company offers comprehensive IT solutions tailored for restaurants. From point-of-sale systems to online ordering platforms, we provide the technology and support needed to streamline operations, enhance customer experience, and boost profitability for your restaurant business."
        />
        <meta
          name="keywords"
          content="restaurant IT solutions, restaurant technology, restaurant POS systems, online ordering platforms, IT support for restaurants, restaurant software, restaurant network security, restaurant IT consulting, restaurant tech solutions, restaurant technology services"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "IT Solutions for Restaurants",
              description:
                "Your IT Company offers comprehensive IT solutions tailored for restaurants. From point-of-sale systems to online ordering platforms, we provide the technology and support needed to streamline operations, enhance customer experience, and boost profitability for your restaurant business.",
              brand: "Alien IT",
              url: "https://youritcompany.com/restaurant-services",
              image: "https://youritcompany.com/static/logo.webp",
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
              Digital Dining Solutions: Enhancing Restaurant Experiences in the
              Digital Age
            </h1>
            <div className={styles.buttonRow}>
              <h2 className={styles.paragraph}>
                Embracing Technology to Delight Guests, Optimize Operations, and
                Drive Restaurant Success
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
              alt={"software support for restaurants"}
              style={{ borderRadius: "5px" }}
              src={"/static/food.webp"}
              width={400}
              height={450}
            />
          </div>
          <div className={styles.stuff}>
            <h3 className={styles.title}>
              Enhancing Restaurant Efficiency and Security through Managed IT
              Services
            </h3>
            <div className={styles.paragraphfifty}>
              At Alien IT, we deeply comprehend the indispensable role of
              technology in the restaurant industry. From reservation management
              and inventory tracking to customer connectivity, restaurants
              heavily rely on advanced technological solutions. That's precisely
              why we offer a diverse range of managed IT services tailored
              specifically to meet the unique needs of restaurant industry
              specialists. With our expertise, your restaurant can operate
              seamlessly and securely, allowing you to stay one step ahead of
              your competition. With Alien IT by your side, your restaurant can
              thrive in the cosmic culinary landscape. Our team of skilled
              professionals based in Utah will diligently monitor and manage
              your restaurant's IT infrastructure, allowing you to dedicate your
              energy to running your business smoothly. We ensure that your
              systems are always up to date and operating flawlessly, mitigating
              the risk of costly downtime. By entrusting your IT needs to Alien
              IT, you can focus on serving your customers and maximizing your
              restaurant's potential.
            </div>
          </div>
        </div>
        <div className={styles.sectionOpposite}>
          <div className={styles.imageContainer}
          >
            <Image
              alt={"restaurant it services"}
              style={{ borderRadius: "5px" }}
              src={"/static/rest2.webp"}
              width={470}
              height={330}
            />
          </div>
          <div className={styles.stuff}>
            <h4 className={styles.title}>Cybersecurity Support</h4>
            <div className={styles.paragraphfifty}>
              In today's digital landscape, cybersecurity is crucial for all
              businesses, including restaurants. Alien IT offers comprehensive
              cybersecurity solutions to protect your restaurant from cyber
              attacks. Our services include malware removal, firewalls,
              intrusion detection, and more. We work closely with you to create
              a customized security plan that fits your restaurant's needs,
              providing peace of mind knowing your business is safeguarded.
              Trust Alien IT to fortify your restaurant's defenses and keep your
              valuable data secure.
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  );
}
