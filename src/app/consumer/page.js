'use client'
import Image from 'next/image'
import { Quote } from '../SVG/Quote'
import { PatternFormat } from 'react-number-format'
import Header from '../components/header'
import Funnel from '../funnel/page'
import Footer from '../components/footer'
import styles from '../styles/finance.module.css'
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'

export default function consumer() {
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
              IT SERVICES FOR THE CONSUMER GOODS INDUSTRY
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
            <Image src={'/itstuff.webp'} width={500} height={400} />
          </div>
          <div style={{ width: '50%', padding: '10px' }}>
            <div className={styles.title}>
              Revolutionizing IT Services for Consumer Goods Companies/
            </div>
            <div className={styles.paragraphfifty}>
              Alien IT is a pivotal player in the consumer goods production
              industry, contributing significantly to the global economy by
              fostering job creation and innovation. Our company operates at the
              forefront of this ever-evolving industry, leveraging cutting-edge
              technologies and groundbreaking products. In recognizing the
              intricate nature of consumer goods production, we understand the
              paramount importance of streamlined operations. To ensure seamless
              functionality, our sophisticated IT systems serve as the backbone,
              overseeing inventory tracking, order processing, and intricate
              reporting requirements. At Alien IT, we specialize in tackling the
              intricate IT challenges faced by consumer goods companies. Our
              expertise lies in optimizing these systems to enhance operational
              efficiency, enabling your processes to perform at their peak. With
              our comprehensive solutions, your company can thrive in this
              fast-paced industry, capitalizing on every opportunity for growth
              and success.
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  )
}
