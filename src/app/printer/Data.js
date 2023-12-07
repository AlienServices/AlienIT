"use client";
import Image from "next/image";
import Link from "next/link";
import Funnel from "../funnel/page";
import { Quote } from "../SVG/Quote";
import { PatternFormat } from "react-number-format";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
import styles from "../styles/finance.module.css";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function backup() {
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
              areaServed: "Utah",
              serviceOutput: "Optimal printer performance and reliability",
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
              Maximize Productivity: Comprehensive Printer Support Services by
              Alien IT
            </h1>
            <div className={styles.buttonRow}>
              <h2 className={styles.paragraph}>
                Stop worrying about your printers, let us worry for you
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
              alt={"printer it services"}
              style={{ borderRadius: "10px" }}
              src={"/static/print.webp"}
              fill={true}
            />
          </div>
          <div className={styles.stuff}>
            <h3 className={styles.title}>
              Efficient Printing Solutions: Comprehensive Printer Support by
              Alien IT
            </h3>
            <div className={styles.paragraphfifty}>
              At Alien IT, we provide comprehensive printer support services to
              ensure the smooth operation of your printing infrastructure. Our
              team of experienced technicians is well-versed in various printer
              makes and models, offering expertise in troubleshooting,
              maintenance, and repair. Whether you need assistance with printer
              setup, driver installation, or resolving performance issues, our
              experts are here to help. We offer proactive monitoring to detect
              potential printer problems before they impact your workflow, and
              our swift response times ensure minimal downtime. With Alien IT's
              full printer support, you can rely on us to optimize your printing
              environment, increase efficiency, and keep your business running
              smoothly.
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  );
}
