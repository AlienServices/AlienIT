'use client'
import Image from 'next/image'
import { Quote } from '../SVG/Quote'
import Footer from '../components/footer'
import styles from '../styles/page.module.css'
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'

export default function Assesment() {
  const [fixedHeader, setFixedHeader] = useState(false)
  const HEADER_HEIGHT = 90
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setFixedHeader(true)
      } else {
        setFixedHeader(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <div className={styles.backgroundColor}>
        <div style={{ height: fixedHeader ? HEADER_HEIGHT : 0 }}></div>
        <div
          className={`${styles.center} ${
            fixedHeader
              ? `${styles.fixedHeader}`
              : `${styles.fixedHeader} ${styles.hidden}`
          }`}
        >
          <div className={styles.row}>
            <div>Home</div>
            <div>Services</div>
            <div>Industries We Serve</div>
            <div>Areas We Serve</div>
            <div>Company</div>
            <button className={styles.bigButton}>Free Assesment</button>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.mainTitle}>
            Easy IT Support For All Businesses In Utah
          </div>
          <div className={styles.buttonRow}>
            <button className={styles.buttonRed}>Get Started</button>
            <button className={styles.button}>Call 801-123-4567</button>
          </div>
        </div>
      </div>
    </div>
  )
}
