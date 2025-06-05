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
import { CheckCircle } from 'lucide-react';

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
              Streamline Connectivity and Boost Productivity:
              <br />
              Alien IT's Expert Network Efficiency Solutions
            </h1>
            <div className={styles.buttonRow}>
              <h2 className={styles.paragraph}>
              Networking and connectivity are the lifeblood of business, powering seamless communication, collaboration, and lightning-fast decision-making for unparalleled operational agility.
              </h2>
            </div>            
              <div className={styles.arrowRow}>
                <Link href="/assesment"><div className={styles.bold}>Get A Free Assessment</div></Link>
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


              {/* <h3 className={styles.title}>
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
              </div> */}

<div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={styles.checklist}>
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              Modernize Your Customers with Networking & Connectivity
            </h1>
          </div>
          
          <div className="md:col-span-2 space-y-8">
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <hr style={{ width: '92%', justifySelf: 'center'}}></hr>
                <div className={styles.checklist}>
                  <CheckCircle className="text-rose-400 mt-1 flex-shrink-0" size={20} color="#a41b1b"/>
                  <p className="text-gray-800 font-medium">
                    Seamless connectivity and smooth business operations.
                  </p>
                </div>

                <hr style={{ width: '92%', justifySelf: 'center'}}></hr>
                
                <div className={styles.checklist}>
                  <CheckCircle className="text-rose-400 mt-1 flex-shrink-0" size={20} color="#a41b1b"/>
                  <p className="text-gray-800 font-medium">
                    Our expert team brings deep experience in designing, implementing, and managing network infrastructure.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <hr style={{ width: '92%', justifySelf: 'center'}}></hr>
                <div className={styles.checklist}>
                  <CheckCircle className="text-rose-400 mt-1 flex-shrink-0" size={20} color="#a41b1b"/>
                  <p className="text-gray-800 font-medium">
                    In-depth assessments to uncover bottlenecks, security risks, and performance issues.
                  </p>
                </div>
                <hr style={{ width: '92%', justifySelf: 'center'}}></hr>
                <div className={styles.checklist}>
                  <CheckCircle className="text-rose-400 mt-1 flex-shrink-0" size={20} color="#a41b1b"/>
                  <p className="text-gray-800 font-medium">
                    Tailored solutions to boost network speed, stability, and security.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <hr style={{ width: '92%', justifySelf: 'center'}}></hr>
                <div className={styles.checklist}>
                  <CheckCircle className="text-rose-400 mt-1 flex-shrink-0" size={20} color="#a41b1b"/>
                  <p className="text-gray-800 font-medium">
                    Configuration, optimization, monitoring, and troubleshooting to ensure your network runs at peak performance.
                  </p>
                </div>
                <hr style={{ width: '92%', justifySelf: 'center'}}></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
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
