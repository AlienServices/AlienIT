'use client'
import Image from 'next/image'
import { Quote } from '../SVG/Quote'
import { PatternFormat } from 'react-number-format'
import Header from '../components/header'
import Funnel from '../funnel/page'
import Footer from '../components/footer'
import styles from '../styles/finance.module.css'
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'

export default function landscape() {
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
              style={{ borderRadius: '5px' }}
              src={'/landscape.webp'}
              width={400}
              height={450}
            />
          </div>
          <div  className={styles.stuff}>
            <div className={styles.title}>
              THE BENEFITS OF MANAGED IT SERVICES FOR YOUR BUSINESS
            </div>
            <div className={styles.paragraphfifty}>
              The landscape and pool industries have experienced rapid
              technological advancements in recent years, with online sales
              tools and customer portals driving revenue and satisfaction. Alien
              IT specializes in tailored IT services that optimize these tools,
              manage cybersecurity risks, safeguard data, and ensure swift
              disaster recovery. Don't struggle with IT services alone - let
              Alien IT be your trusted partner.
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  )
}
