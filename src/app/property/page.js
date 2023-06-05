'use client'
import Image from 'next/image'
import { Quote } from '../SVG/Quote'
import { PatternFormat } from 'react-number-format'
import Header from '../components/header'
import Footer from '../components/footer'
import Funnel from '../funnel/page'
import styles from '../styles/finance.module.css'
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'

export default function property() {
  return (
    <div>
      <div style={{ color: 'black' }} className={styles.backgroundColor}>
        <Header />

        <div className={styles.section}>
          <div
            style={{
              height: '60%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
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
                <div className={styles.bold}>Get An Assesment</div>
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
            <Image src={'/property.webp'} width={500} height={400} />
          </div>
          <div style={{ width: '50%', padding: '10px' }}>
            <div className={styles.title}>
              Streamlined IT Management for Utah Property Management Companies: Alien IT's Managed Services
            </div>
            <div className={styles.paragraphfifty}>
              Let us alleviate the burden of managing your IT infrastructure
              with our comprehensive managed IT services. Our team will
              proactively monitor and manage your network, ensuring
              uninterrupted operations and seamless performance. Our managed IT
              services encompass a wide range of essential features, including
              24/7/365 help desk support, patch management, network monitoring,
              threat detection, and much more. By entrusting us with your IT
              management, you can shift your focus back to your core business
              activities, knowing that your technology is in expert hands. We
              understand that every business has unique requirements, which is
              why we offer customizable packages tailored specifically to your
              needs. With Alien IT, you will never have to pay for services you
              don't utilize, ensuring cost-effective solutions at all times. If
              you're unsure about the specific IT services your property
              management company requires, we're here to help. Through
              collaborative consultation, we'll work closely with you to
              identify the most beneficial IT solutions that will enhance
              productivity, accessibility, and security simultaneously. With
              Alien IT as your trusted partner, you can unlock the full
              potential of technology in driving your property management
              business forward.
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  )
}
