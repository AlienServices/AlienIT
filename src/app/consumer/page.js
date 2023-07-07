"use client";
import Image from "next/image";
import Link from "next/link";
import { Quote } from "../SVG/Quote";
import { PatternFormat } from "react-number-format";
import Header from "../components/header";
import Funnel from "../funnel/page";
import Head from "next/head";
import Footer from "../components/footer";
import styles from "../styles/finance.module.css";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function consumer() {
  return (
    <div>
      <div style={{ color: "black" }} className={styles.backgroundColor}>
        <Head>
          <meta name="robots" content="index, follow" />
          <link
            rel="canonical"
            href="https://youritcompany.com/consumer-goods-services"
          />
          <title>
            IT Solutions for the Consumer Goods Industry | Your IT Company
          </title>
          <meta
            name="description"
            content="Your IT Company offers comprehensive IT solutions tailored for the consumer goods industry. From e-commerce platforms to supply chain management systems, our expert team ensures efficient operations and enhanced customer experiences for consumer goods businesses."
          />
          <meta
            name="keywords"
            content="IT solutions for consumer goods industry, consumer goods IT services, e-commerce platforms, supply chain management systems, inventory management, data analytics, consumer goods technology, IT consulting, IT support, consumer goods industry solutions, customer experience, digital transformation"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Product",
                name: "IT Solutions for the Consumer Goods Industry",
                description:
                  "Your IT Company offers comprehensive IT solutions tailored for the consumer goods industry. From e-commerce platforms to supply chain management systems, our expert team ensures efficient operations and enhanced customer experiences for consumer goods businesses.",
                brand: "Your IT Company",
                url: "https://youritcompany.com/consumer-goods-services",
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
              IT SERVICES FOR THE CONSUMER GOODS INDUSTRY
            </h1>
            <div className={styles.buttonRow}>
              <h2 className={styles.paragraph}>
                Enhance Efficiency and Security with Tailored IT Solutions for
                Accounting and Finance
              </h2>
            </div>
            <a href="/assesment">
              <div className={styles.arrowRow}>
                <Link href="/assesment"><div className={styles.bold}>Get A Free Assesment</div></Link>
                <Image src={"/static/arrowR.webp"} height={30} width={30} />
              </div>
            </a>
          </div>
          <Image src={"/static/arrow.webp"} height={70} width={70} />
        </div>
        <div className={styles.sectionRow}>
          <div className={styles.eighty}>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                alt={"it services for consumer companies"}
                style={{ borderRadius: "10px" }}
                src={"/static/food.webp"}
                width={350}
                height={450}
              />
            </div>
            <div className={styles.fifty}>
              <h3 className={styles.title}>
                Revolutionizing IT Services for Consumer Goods Companies
              </h3>
              <div className={styles.paragraphfifty}>
                Alien IT is a pivotal player in the consumer goods production
                industry, contributing significantly to the global economy by
                fostering job creation and innovation. Our company operates at
                the forefront of this ever-evolving industry, leveraging
                cutting-edge technologies and groundbreaking products. In
                recognizing the intricate nature of consumer goods production,
                we understand the paramount importance of streamlined
                operations. To ensure seamless functionality, our sophisticated
                IT systems serve as the backbone, overseeing inventory tracking,
                order processing, and intricate reporting requirements. At Alien
                IT, we specialize in tackling the intricate IT challenges faced
                by consumer goods companies. Our expertise lies in optimizing
                these systems to enhance operational efficiency, enabling your
                processes to perform at their peak. With our comprehensive
                solutions, your company can thrive in this fast-paced industry,
                capitalizing on every opportunity for growth and success.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionOpposite}>
          <div className={styles.eightyOpposite}>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                alt={"consumer it services"}
                style={{ borderRadius: "10px" }}
                src={"/static/consumer.webp"}
                width={450}
                height={400}
              />
            </div>
            <div className={styles.fifty}>
              <h4 className={styles.title}>
                Seamless Healthcare IT Solutions: Empowering Your Practice for
                Uninterrupted Operations
              </h4>
              <div className={styles.paragraphfifty}>
                Healthcare IT services are essential for keeping your medical
                practice running smoothly. From maintaining accurate patient
                records to providing secure access to your data, your technology
                enables you to provide quality care for your patients. Cyber
                attacks targeting healthcare organizations make data security a
                critical aspect of medical practices today, and HIPAA compliance
                sets strict guidelines for storing and security PHI. Healthcare
                IT services from Galaxy IT can provide security to protect your
                practice’s critical data while also keeping day-to-day IT
                operations running flawlessly. With a secure network
                infrastructure, you can be confident knowing that protected
                health information is safe from unauthorized access.
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
