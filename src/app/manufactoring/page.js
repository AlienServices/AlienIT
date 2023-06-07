'use client'
import Image from 'next/image'
import { Quote } from '../SVG/Quote'
import { PatternFormat } from 'react-number-format'
import Header from '../components/header'
import Funnel from '../funnel/page'
import Footer from '../components/footer'
import styles from '../styles/finance.module.css'
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'

export default function manufactoring() {
  return (
    <div>
      <div style={{ color: 'black' }} className={styles.backgroundColor}>
        <Header />

        <div className={styles.section}>
          <div
            style={{
              height: '70%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className={styles.mainTitle}>
              Driving Manufacturing Excellence through Advanced IT Solutions:
              Empowering Efficiency, Quality, and Growth
            </div>
            <div className={styles.buttonRow}>
              <div className={styles.paragraph}>
                Transforming Manufacturing Processes with Smart Technology:
                Optimizing Operations and Accelerating Industry 4.0 Adoption
              </div>
            </div>
            <a href="/assesment">
              <div className={styles.arrowRow}>
                <div className={styles.bold}>Get A Free Assesment</div>
                <Image src={'/arrowR.webp'} height={30} width={30} />
              </div>
            </a>
          </div>
          <Image src={'/arrow.webp'} height={70} width={70} />
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
            <Image
              style={{ borderRadius: '10px' }}
              src={'/manufactor.webp'}
              width={350}
              height={450}
            />
          </div>
          <div  className={styles.stuff}>
            <div className={styles.title}>
              PROPELLING YOUR BUSINESS INTO THE FUTURE
            </div>
            <div className={styles.paragraphfifty}>
              In the dynamic world of manufacturing, seamless telecommunications
              networks, efficient product distribution systems, reliable
              broadband access, and robust data management are essential for
              success. At Alien IT, we recognize the paramount importance of
              these capabilities in driving your business forward. We also
              understand that many manufacturers still rely on outdated
              technology and systems. That's where our expertise comes into
              play. We offer your manufacturing business access to the latest
              and most innovative IT solutions available in the market today.
              From state-of-the-art enterprise resource planning (ERP) systems
              to advanced data storage and security solutions, we possess the
              experience and know-how to propel your business to new heights.
              Partnering with Alien IT means unlocking the potential for
              enhanced operational efficiency and unparalleled growth in the
              competitive manufacturing landscape.
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  )
}
