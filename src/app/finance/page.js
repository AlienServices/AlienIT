'use client'
import Image from 'next/image'
import Funnel from '../funnel/page'
import { Quote } from '../SVG/Quote'
import { PatternFormat } from 'react-number-format'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/finance.module.css'
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'

export default function finance() {
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
              Streamline Your Accounting and Finance Operations with Our Robust
              IT Services
            </div>
            <div className={styles.buttonRow}>
              <div className={styles.paragraph}>
                Enhance Efficiency and Security with Tailored IT Solutions for
                Accounting and Finance
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
            <Image style={{borderRadius:"5px"}} src={'/finance.webp'} width={500} height={400} />
          </div>
          <div style={{ width: '50%', padding: '10px' }}>
            <div className={styles.title}>
              Optimizing Efficiency and Security: Cloud Services for Utah
              Construction Companies
            </div>
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
      </div>
      <Funnel />
      <Footer />
    </div>
  )
}
