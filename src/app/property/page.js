"use client";
import Image from "next/image";
import { Quote } from "../SVG/Quote";
import { PatternFormat } from "react-number-format";
import Header from "../components/header";
import Head from "next/head";
import Footer from "../components/footer";
import Funnel from "../funnel/page";
import styles from "../styles/finance.module.css";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function property() {
  return (
    <div>
      <Head>
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://youritcompany.com/printer-services"
        />
        <title>Professional Printer Services | Your IT Company</title>
        <meta
          name="description"
          content="Your IT Company offers professional printer services including repair and maintenance. Our expert technicians provide comprehensive solutions to keep your printers running smoothly and efficiently, ensuring minimal downtime and maximum productivity for your business."
        />
        <meta
          name="keywords"
          content="printer services, printer repair, printer maintenance, printer troubleshooting, printer support, printer solutions, printer technicians, printer installation, printer setup, printer upgrades"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Printer Services",
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
                "Your IT Company offers professional printer services including repair and maintenance. Our expert technicians provide comprehensive solutions to keep your printers running smoothly and efficiently, ensuring minimal downtime and maximum productivity for your business.",
              areaServed: "Your Service Area",
              serviceOutput: "Optimal printer performance and reliability",
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
              Smart Property Management: Streamlining Operations and Maximizing
              Asset Value
            </div>
            <div className={styles.buttonRow}>
              <div className={styles.paragraph}>
                Unlocking the Potential of Digital Solutions for Efficient
                Property Management and Enhanced Tenant Experiences
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
          <div className={styles.photoContainer}>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                alt={" "}
                src={"/property.webp"}
                width={500}
                height={400}
              />
            </div>
            <div className={styles.stuff}>
              <div className={styles.title}>
                Streamlined IT Management for Utah Property Management
                Companies: Alien IT's Managed Services
              </div>
              <div className={styles.paragraphfifty}>
                Let us handle your IT infrastructure with our comprehensive
                managed IT services. Our proactive team will monitor and manage
                your network, ensuring uninterrupted operations. We offer 24/7
                help desk support, patch management, network monitoring, threat
                detection, and more. With Alien IT, you can focus on your core
                business while we take care of your technology needs. Our
                customizable packages ensure cost-effective solutions tailored
                to your requirements. Collaborate with us to identify the best
                IT solutions for enhanced productivity, accessibility, and
                security. Partner with Alien IT to unlock the full potential of
                technology for your property management business.
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
