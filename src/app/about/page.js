'use client'
import Image from 'next/image'
import { Quote } from '../SVG/Quote'
import { PatternFormat } from 'react-number-format'
import Header from '../components/header'
import Funnel from '../funnel/page'
import Footer from '../components/footer'
import styles from '../styles/about.module.css'
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'

export default function about() {
  return (
    <div>
      <div style={{ color: 'black' }} className={styles.backgroundColor}>
        <Header />

        <div className={styles.section}>
          <div
            style={{
              width: '95%',
              height: '70%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className={styles.mainTitle}>How Alien IT is different</div>
            <div className={styles.buttonRow}>
              <div className={styles.paragraph}>
                Stop worrying about your IT, let us worry for you
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
        <div className={styles.section}>
          <div className={styles.row}>
            <div className={styles.box}>
              <div className={styles.titleMid}>IT experts</div>
              <div className={styles.paragraph}>
                Alien IT boasts a team of exceptional IT experts, ensuring
                cutting-edge technological solutions for our clients
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.titleMid}>Transparent Pricing </div>
              <div className={styles.paragraph}>
                Alien IT, Utah's trusted IT company, prioritizes transparency,
                providing clients with straightforward pricing for confident
                decision-making
              </div>
            </div>
          </div>
          <div className={styles.boxBig}>
            <div className={styles.titleMid}>100% Utah Ran</div>
            <div className={styles.paragraph}>
Alien IT takes pride in being an exclusively Utah-based team, harnessing the local talent and expertise to deliver exceptional IT services tailored to the unique needs of businesses in our community</div>
          </div>
        </div>
        <Funnel />
      </div>

      <Footer />
    </div>
  )
}
