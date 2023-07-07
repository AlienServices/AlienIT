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

export default function construction() {
  return (
    <div>
      <Head>
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://youritcompany.com/construction-services"
        />
        <title>IT Solutions for Construction Companies | Your IT Company</title>
        <meta
          name="description"
          content="Your IT Company offers comprehensive IT solutions tailored for construction companies. From network infrastructure setup to software integration, our expert team ensures smooth operations and enhanced productivity for your construction projects."
        />
        <meta
          name="keywords"
          content="IT solutions for construction companies, construction IT services, construction software integration, network infrastructure setup, construction project management software, construction technology, IT consulting, IT support, construction industry, construction IT solutions, construction IT infrastructure"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "IT Solutions for Construction Companies",
              description:
                "Your IT Company offers comprehensive IT solutions tailored for construction companies. From network infrastructure setup to software integration, our expert team ensures smooth operations and enhanced productivity for your construction projects.",
              brand: "Your IT Company",
              url: "https://youritcompany.com/construction-services",
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
              Tech Solutions for Construction: Building a Digital Future
            </h1>
            <div className={styles.buttonRow}>
              <h2 className={styles.paragraph}>
                Efficiently Streamline Operations and Boost Productivity with
                Cutting-Edge IT Solutions
              </h2>
            </div>
            <a href="/assesment">
              <div className={styles.arrowRow}>
                <Link href="/assesment"><div className={styles.bold}>Get A Free Assesment</div></Link>
                <Image alt={"right arrow"} src={"/static/arrowR.webp"} height={30} width={30} />
              </div>
            </a>
          </div>
          <Image alt={"down arrow"} src={"/static/arrow.webp"} height={70} width={70} />
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
              alt={"it solutions for construction"}
              style={{ borderRadius: "5px" }}
              src={"/static/construction.webp"}
              width={500}
              height={350}
            />
          </div>
          <div className={styles.stuff}>
            <h3 className={styles.title}>
              Optimizing Efficiency and Security: Cloud Services for Utah
              Construction Companies
            </h3>
            <div className={styles.paragraphfifty}>
              At Alien IT, we specialize in simplifying the transition to
              cloud-based construction business applications. Our expert team
              will guide you through the migration process, helping you
              determine which applications to move and providing a clear plan.
              With ongoing support, we ensure a smooth and hassle-free
              experience post-migration. By embracing our cloud services, Utah
              construction companies gain flexibility, scalability, and robust
              security. Remote access, ample storage space, and efficient
              communication tools promote seamless collaboration. Additionally,
              automatic backups and data encryption protect your business from
              disasters and cyber threats. Experience the advantages of Alien
              IT's cloud services and empower your construction company in Utah.
              Make the move to the cloud for enhanced efficiency, security, and
              future-proofing your business.
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
              alt={"it services for construction"}
              style={{ borderRadius: "5px" }}
              src={"/static/construction2.webp"}
              width={550}
              height={400}
            />
          </div>
          <div className={styles.stuff}>
            <h4 className={styles.title}>Reliable Managed IT Services</h4>
            <div className={styles.paragraphfifty}>
              With Alien IT, you can bid farewell to the worries of managing
              your IT infrastructure. Our team of skilled professionals is ready
              to take charge and handle it on your behalf. We proactively
              monitor and update your network, ensuring that issues are resolved
              before they have a chance to impact your business. Our
              comprehensive managed services encompass around-the-clock help
              desk support, patch management, and diligent network monitoring.
              With these inclusive offerings, you can rest assured that we have
              you covered. By entrusting your IT services to us, you can shift
              your focus back to your core business operations, without being
              burdened by the complexities that construction industry businesses
              often face. Stay one step ahead of your competition with Alien IT,
              as we take care of your IT needs with expertise and dedication.
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  );
}
