'use client'
import Image from 'next/image'
import Funnel from '../funnel/page'
import { Quote } from '../SVG/Quote'
import { PatternFormat } from 'react-number-format'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/finance.module.css'
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'

export default function restaurants() {
  return (
    <div>
      <div style={{ color: 'black' }} className={styles.backgroundColor}>
        <Header />

        <div className={styles.section}>
          <div
            style={{
              height: '80%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className={styles.mainTitle}>
              Digital Dining Solutions: Enhancing Restaurant Experiences in the
              Digital Age
            </div>
            <div className={styles.buttonRow}>
              <div className={styles.paragraph}>
                Embracing Technology to Delight Guests, Optimize Operations, and
                Drive Restaurant Success
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
            <Image
              style={{ borderRadius: '5px' }}
              src={'/food.webp'}
              width={400}
              height={450}
            />
          </div>
          <div  className={styles.stuff}>
            <div className={styles.title}>
              Enhancing Restaurant Efficiency and Security through Managed IT
              Services
            </div>
            <div className={styles.paragraphfifty}>
              At Alien IT, we deeply comprehend the indispensable role of
              technology in the restaurant industry. From reservation management
              and inventory tracking to customer connectivity, restaurants
              heavily rely on advanced technological solutions. That's precisely
              why we offer a diverse range of managed IT services tailored
              specifically to meet the unique needs of restaurant industry
              specialists. With our expertise, your restaurant can operate
              seamlessly and securely, allowing you to stay one step ahead of
              your competition. With Alien IT by your side, your restaurant can
              thrive in the cosmic culinary landscape. Our team of skilled
              professionals based in Utah will diligently monitor and manage
              your restaurant's IT infrastructure, allowing you to dedicate your
              energy to running your business smoothly. We ensure that your
              systems are always up to date and operating flawlessly, mitigating
              the risk of costly downtime. By entrusting your IT needs to Alien
              IT, you can focus on serving your customers and maximizing your
              restaurant's potential.
            </div>
          </div>
        </div>
        <div className={styles.sectionOpposite}>
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
              src={'/rest2.webp'}
              width={470}
              height={330}
            />
          </div>
          <div  className={styles.stuff}>
            <div className={styles.title}>Cybersecurity Support</div>
            <div className={styles.paragraphfifty}>
              In today's digital landscape, cybersecurity is crucial for all
              businesses, including restaurants. Alien IT offers comprehensive
              cybersecurity solutions to protect your restaurant from cyber
              attacks. Our services include malware removal, firewalls,
              intrusion detection, and more. We work closely with you to create
              a customized security plan that fits your restaurant's needs,
              providing peace of mind knowing your business is safeguarded.
              Trust Alien IT to fortify your restaurant's defenses and keep your
              valuable data secure.
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  )
}
