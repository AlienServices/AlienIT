'use client'
import Image from 'next/image'
import { Quote } from '../SVG/Quote'
import { PatternFormat } from 'react-number-format'
import Header from '../components/header'
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
              height: '60%',
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
            <a href="/manufactoring">
              <div className={styles.arrowRow}>
                <div className={styles.bold}>Get An Assesment</div>
                <Image src={'/arrowR.webp'} height={30} width={30} />
              </div>
            </a>
          </div>
          <Image src={'/arrow.webp'} height={70} width={70} />
        </div>
        <div className={styles.section}></div>
      </div>
      <Footer />
    </div>
  )
}
