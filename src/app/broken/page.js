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
              width: '80%',
              height: '80%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className={styles.mainTitle}>
              Rapid Hardware Recovery: Trust Alien IT for Effective Repair
              Solutions and Minimal Downtime
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
            <Image style={{borderRadius:"10px"}} src={'/repair.webp'} width={400} height={450} />
          </div>
          <div  className={styles.stuff}>
            <div className={styles.title}>
              Seamless Hardware Solutions: Alien IT's Expert Repair Services for
              a Reliable Technology Infrastructure
            </div>
            <div className={styles.paragraphfifty}>
              At Alien IT, we specialize in resolving hardware issues to ensure
              your technology infrastructure runs smoothly. Our team of skilled
              technicians possesses extensive knowledge and experience in
              diagnosing and repairing a wide range of hardware problems. From
              malfunctioning computers and servers to faulty peripherals and
              components, we have the expertise to get your equipment back in
              working order. We utilize industry-leading diagnostic tools and
              techniques to accurately identify the root cause of hardware
              failures and implement effective solutions. Our priority is to
              minimize downtime and disruption to your business operations by
              providing timely and efficient hardware repairs. With Alien IT as
              your trusted partner, you can count on us to restore your
              hardware's functionality and reliability, enabling you to focus on
              what matters most: your core business activities.
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  )
}
