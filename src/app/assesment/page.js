"use client";
import Image from "next/image";
import { Quote } from "../SVG/Quote";

import { PatternFormat } from "react-number-format";
import Header from "../components/header";
import Head from "next/head";
import Footer from "../components/footer";
import styles from "../styles/assesment.module.css";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function Assesment() {
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
            <Head>
              <meta name="robots" content="index, follow" />
              <link rel="canonical" href="https://copiersutah.com/buy/" />
              <title>
                Get a Quote for Comprehensive IT Solutions and Services | Your
                IT Company
              </title>
              <meta
                name="description"
                content="Looking for comprehensive IT solutions and services for your business? Your IT Company offers a range of advanced IT services, including managed IT services, cybersecurity, cloud computing, and more. Fill out our easy form to get a personalized quote today."
              />
              <meta
                name="keywords"
                content="IT services, IT solutions, managed IT services, cybersecurity, cloud computing, IT consulting, IT support, IT company, get a quote, IT services quote, IT solutions quote, IT services provider, IT support services, IT solutions company, IT services Utah, IT consulting services, IT security, IT infrastructure, IT management"
              />
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    name: "New and Refurbished Copiers",
                    description:
                      "High-quality copiers for your office, including new and refurbished options.",
                    brand: "Copiers Utah",
                    url: "https://alienit.com/home",
                    image: "https://alienit.com/static/logo.webp",
                    offers: {
                      "@type": "AggregateOffer",
                      priceCurrency: "USD",
                      availability: "https://schema.org/InStock",
                      lowPrice: "Your Lowest Price",
                      highPrice: "Your Highest Price",
                      offerCount: "Number of Copiers Available",
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
            <div className={styles.mainTitle}>Get An IT Assesment</div>
            <div className={styles.buttonRow}>
              <div className={styles.paragraph}>
                Want to know how your current IT infrastructure and strategy can
                be improved? Contact us today to get a free IT assessment so we
                can figure out how to solve your IT problems!
              </div>
            </div>
            <a href="">
              <div className={styles.bold}>Call Us At (801) 261-0510</div>
            </a>
          </div>
          <Image src={"/arrow.webp"} height={80} width={80} />
        </div>
        <div className={styles.section}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.titleBigBlack}>
                Heres what you get from us:
              </div>
              <div className={styles.paragraphMid}>
                With our IT assessment, our experienced team of IT professionals
                will:
              </div>
              <div className={styles.space}>
                <div className={styles.container}>
                  <Image
                    style={{ margin: "10px" }}
                    src={"/checkmark.png"}
                    width={25}
                    height={25}
                  />
                  <div className={styles.paragraphSmall}>Asses your needs</div>
                </div>
                <div className={styles.container}>
                  <Image
                    style={{ margin: "10px" }}
                    src={"/checkmark.png"}
                    width={25}
                    height={25}
                  />
                  <div className={styles.paragraphSmall}>
                    Provide a plan to solve your IT problems and keep them from
                    happening
                  </div>
                </div>
                <div className={styles.container}>
                  <Image
                    style={{ margin: "10px" }}
                    src={"/checkmark.png"}
                    width={25}
                    height={25}
                  />
                  <div className={styles.paragraphSmall}>
                    Provide recommendations for securing your data and
                    maximizing your operational efficiency.
                  </div>
                </div>
              </div>
              <div className={styles.paragraphMid}>
                Our IT assessments are quick and painless, and our team is ready
                to help you now.
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.titleBig}>Schedule Your Assesment!</div>
              <div>
                Receive a response within minutes, not hours. Guaranteed!
              </div>
              <div className={styles.boxcolumn}>
                <div className={styles.inputRow}>
                  <input
                    placeholder="First And Last Name"
                    className={styles.input}
                    type="text"
                  />
                  <input
                    placeholder="Company Name"
                    className={styles.input}
                    type="text"
                  />
                </div>
                <div className={styles.inputRow}>
                  <input
                    placeholder="Email Address"
                    className={styles.input}
                    type="text"
                  />
                  <PatternFormat
                    format="+1 (###) ### ####"
                    allowEmptyFormatting
                    mask="_"
                    className={styles.input}
                    onChange={(event) => {
                      setNumber(event.target.value);
                    }}
                  />
                </div>
                <div className={styles.checkColumn}>
                  <div className={styles.inputrow}>
                    <input className={styles.check} type="checkbox" />
                    <div style={{ paddingLeft: "5px" }}>I need Managed IT</div>
                  </div>
                  <div className={styles.inputrow}>
                    <input className={styles.check} type="checkbox" />
                    <div style={{ paddingLeft: "5px" }}>
                      I need Remote Support
                    </div>
                  </div>
                  <div className={styles.inputrow}>
                    <input className={styles.check} type="checkbox" />
                    <div style={{ paddingLeft: "5px" }}>
                      I need Onsite Support
                    </div>
                  </div>
                  <div className={styles.inputrow}>
                    <input className={styles.check} type="checkbox" />
                    <div style={{ paddingLeft: "5px" }}>
                      I need Personal Computer Support
                    </div>
                  </div>
                </div>
                <textarea
                  className={styles.text}
                  placeholder={"Tell us about how we can help!"}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
