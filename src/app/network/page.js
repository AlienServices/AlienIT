'use client'
import Image from 'next/image'
import Funnel from '../funnel/page'
import { Quote } from '../SVG/Quote'
import { PatternFormat } from 'react-number-format'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/finance.module.css'
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'

export default function backup() {
  return (
    <div>
      <div style={{ color: 'black' }} className={styles.backgroundColor}>
        <Header />

        <div style={{ height: '530px' }} className={styles.section}>
          <div
            style={{
              width: '95%',
              height: '70%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className={styles.mainTitle}>
              Streamline Connectivity and Boost Productivity: Alien IT's Expert
              Network Efficiency Solutions
            </div>
            <div className={styles.buttonRow}>
              <div className={styles.paragraph}>
                Stop worrying about your connection, let us worry for you
              </div>
            </div>
            <a href="/assesment">
              <div className={styles.arrowRow}>
                <div className={styles.bold}>Get A Free Assesment</div>
                <Image src={'/arrowR.webp'} height={30} width={30} />
              </div>
            </a>
          </div>
        </div>

        <div className={styles.sectionRow}>
          <div
            style={{
              width: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src={'/wifi.webp'} width={500} height={350} />
          </div>
          <div  className={styles.stuff}>
            <div className={styles.title}>
              Unlock Network Efficiency: Empower Your Business with Alien IT's
              Comprehensive Network Support
            </div>
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
      <Funnel />
      <Footer />
    </div>
  )
}
