'use client'
import Image from 'next/image'
import { Quote } from '../SVG/Quote'
import { PatternFormat } from 'react-number-format'
import Header from '../components/header'
import Footer from '../components/footer'
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
            <a href="">
              <div className={styles.bold}>Get An Assesment</div>
            </a>
          </div>
          <Image src={'/arrow.webp'} height={150} width={150} />
        </div>
        <div className={styles.section}></div>
      </div>
      <Footer />
    </div>
  )
}
