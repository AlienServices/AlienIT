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
          href="https://youritcompany.com/network-efficiency-service"
        />
        <title>Network Efficiency Service | Your IT Company</title>
        <meta
          name="description"
          content="Enhance your network efficiency and performance with our Network Efficiency Service. Our expert team optimizes your network infrastructure, improves connectivity, reduces downtime, and ensures smooth operations for your business."
        />
        <meta
          name="keywords"
          content="network efficiency service, network optimization, network performance, connectivity, network infrastructure, IT services, IT support, network management, downtime reduction"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Network Efficiency Service",
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
                "Enhance your network efficiency and performance with our Network Efficiency Service. Our expert team optimizes your network infrastructure, improves connectivity, reduces downtime, and ensures smooth operations for your business.",
              areaServed: "Your Location",
              serviceOutput: "Improved network efficiency and performance",
            }),
          }}
        />
      </Head>
      <div style={{ color: "black" }} className={styles.backgroundColor}>
        <Header />

        <div className={styles.section}>
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
              Streamline Connectivity and Boost Productivity: Alien IT's Expert
              Network Efficiency Solutions
            </h1>
            <div className={styles.buttonRow}>
              <h2 className={styles.paragraph}>
                Stop worrying about your connection, let us worry for you
              </h2>
            </div>            
              <div className={styles.arrowRow}>
                <Link href="/assesment"><div className={styles.bold}>Get A Free Assesment</div></Link>
                <Image alt={"right arrow"} src={"/static/right.webp"} height={30} width={30} />
              </div>            
          </div>
        </div>

        <div className={styles.sectionRow}>
          <div className={styles.eighty}>
            <div className={styles.imageContainer}
            >
              <Image alt={"network it services"} src={"/static/wifi.webp"} fill={true} />
            </div>
            <div className={styles.stuff}>
              <h3 className={styles.title}>
                Unlock Network Efficiency: Empower Your Business with Alien IT's
                Comprehensive Network Support
              </h3>
              <div className={styles.paragraphfifty}>
                At Alien IT, we are committed to optimizing your network
                efficiency to ensure seamless connectivity and smooth operations.
                Our team of skilled professionals possesses extensive experience
                in network infrastructure design, implementation, and management.
                We conduct thorough assessments to identify potential bottlenecks,
                security vulnerabilities, or performance issues within your
                network. Leveraging industry best practices and cutting-edge
                technologies, we tailor solutions that enhance network speed,
                stability, and security. From network configuration and
                optimization to proactive monitoring and troubleshooting, we
                provide comprehensive network support services that allow your
                business to operate at its full potential. With Alien IT's
                expertise, you can experience a reliable and efficient network
                that empowers your organization to thrive in today's digital
                landscape.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  );
}
