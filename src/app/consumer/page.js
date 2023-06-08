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
              height: '70%',
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
                <div className={styles.bold}>Get A Free Assesment</div>
                <Image src={'/arrowR.webp'} height={30} width={30} />
              </div>
            </a>
          </div>
          <Image src={'/arrow.webp'} height={70} width={70} />
        </div>
        <div className={styles.sectionRow}>
          <div className={styles.eighty}>
            <div
              style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                style={{ borderRadius: '10px' }}
                src={'/food.webp'}
                width={350}
                height={450}
              />
            </div>
            <div className={styles.fifty}>
              <div className={styles.title}>
                Revolutionizing IT Services for Consumer Goods Companies
              </div>
              <div className={styles.paragraphfifty}>
                Alien IT is a pivotal player in the consumer goods production
                industry, contributing significantly to the global economy by
                fostering job creation and innovation. Our company operates at
                the forefront of this ever-evolving industry, leveraging
                cutting-edge technologies and groundbreaking products. In
                recognizing the intricate nature of consumer goods production,
                we understand the paramount importance of streamlined
                operations. To ensure seamless functionality, our sophisticated
                IT systems serve as the backbone, overseeing inventory tracking,
                order processing, and intricate reporting requirements. At Alien
                IT, we specialize in tackling the intricate IT challenges faced
                by consumer goods companies. Our expertise lies in optimizing
                these systems to enhance operational efficiency, enabling your
                processes to perform at their peak. With our comprehensive
                solutions, your company can thrive in this fast-paced industry,
                capitalizing on every opportunity for growth and success.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionOpposite}>
          <div className={styles.eightyOpposite}>
            <div
              style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                style={{ borderRadius: '10px' }}
                src={'/consumer.webp'}
                width={450}
                height={400}
              />
            </div>
            <div className={styles.fifty}>
              <div className={styles.title}>
                Seamless Healthcare IT Solutions: Empowering Your Practice for
                Uninterrupted Operations
              </div>
              <div className={styles.paragraphfifty}>
                Healthcare IT services are essential for keeping your medical
                practice running smoothly. From maintaining accurate patient
                records to providing secure access to your data, your technology
                enables you to provide quality care for your patients. Cyber
                attacks targeting healthcare organizations make data security a
                critical aspect of medical practices today, and HIPAA compliance
                sets strict guidelines for storing and security PHI. Healthcare
                IT services from Galaxy IT can provide security to protect your
                practice’s critical data while also keeping day-to-day IT
                operations running flawlessly. With a secure network
                infrastructure, you can be confident knowing that protected
                health information is safe from unauthorized access.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  )
}
