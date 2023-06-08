'use client'
import Image from 'next/image'
import { Quote } from '../SVG/Quote'
import { PatternFormat } from 'react-number-format'
import Header from '../components/header'
import Funnel from '../funnel/page'
import Footer from '../components/footer'
import styles from '../styles/finance.module.css'
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'

export default function health() {
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
              Digital Health Solutions: Empowering Wellness and Transforming
              Healthcare
            </div>
            <div className={styles.buttonRow}>
              <div className={styles.paragraph}>
                Harnessing the Power of Technology to Revolutionize Patient
                Care, Efficiency, and Outcomes
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
              src={'/hospital.webp'}
              width={500}
              height={350}
            />
          </div>
          <div  className={styles.stuff}>
            <div className={styles.title}>
              Seamless Healthcare IT Solutions: Empowering Your Practice for
              Uninterrupted Operations
            </div>
            <div className={styles.paragraphfifty}>
              Alien IT understands the crucial role of healthcare IT services in
              ensuring the seamless operation of your medical practice. From
              maintaining accurate patient records to enabling secure data
              access, your technology infrastructure is instrumental in
              delivering quality care to your patients. Given the increasing
              frequency of cyber attacks targeting healthcare organizations,
              data security has become a paramount concern. Compliance with
              stringent guidelines, such as HIPAA, is essential for safeguarding
              and protecting sensitive patient health information. Alien IT's
              healthcare IT services offer comprehensive security measures to
              fortify the protection of critical data within your practice. By
              establishing a robust network infrastructure, we provide a secure
              environment where authorized access is granted while unauthorized
              access is effectively prevented. With our solutions in place, you
              can confidently prioritize patient care, knowing that your
              protected health information remains shielded from potential
              threats.
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
              src={'/health.webp'}
              width={500}
              height={350}
            />
          </div>
          <div  className={styles.stuff}>
            <div className={styles.title}>
              Elevating Patient Care: How Managed IT Enhances Your Medical
              Practice
            </div>
            <div className={styles.paragraphfifty}>
              Managed IT services from Alien IT offer healthcare businesses the
              opportunity to elevate their patient care through improved network
              security, 24/7 monitoring, in-depth IT assessments, seamless
              integration with EHR and medical software, remote and on-site
              support, and expert security planning and implementation. With our
              flexible and cloud-based solutions, we empower your medical
              practice to operate with enhanced efficiency, productivity, and
              confidence in comprehensive security measures. Trust Alien IT to
              optimize your IT infrastructure, allowing you to better serve your
              patients while we handle your technology needs.
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  )
}
