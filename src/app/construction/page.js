'use client'
import Image from 'next/image'
import Funnel from '../funnel/page'
import { Quote } from '../SVG/Quote'
import { PatternFormat } from 'react-number-format'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/finance.module.css'
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'

export default function construction() {
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
              Tech Solutions for Construction: Building a Digital Future
            </div>
            <div className={styles.buttonRow}>
              <div className={styles.paragraph}>
                Efficiently Streamline Operations and Boost Productivity with
                Cutting-Edge IT Solutions
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
              alt={"it solutions for construction"}
              style={{ borderRadius: '5px' }}
              src={'/construction.webp'}
              width={500}
              height={350}
            />
          </div>
          <div  className={styles.stuff}>
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
              alt={"it services for construction"}
              style={{ borderRadius: '5px' }}
              src={'/construction2.webp'}
              width={550}
              height={400}
            />
          </div>
          <div   className={styles.stuff}>
            <div className={styles.title}>Reliable Managed IT Services</div>
            <div className={styles.paragraphfifty}>
              With Alien IT, you can bid farewell to the worries of managing
              your IT infrastructure. Our team of skilled professionals is ready
              to take charge and handle it on your behalf. We proactively
              monitor and update your network, ensuring that issues are resolved
              before they have a chance to impact your business. Our
              comprehensive managed services encompass around-the-clock help
              desk support, patch management, and diligent network monitoring.
              With these inclusive offerings, you can rest assured that we have
              you covered. By entrusting your IT services to us, you can shift
              your focus back to your core business operations, without being
              burdened by the complexities that construction industry businesses
              often face. Stay one step ahead of your competition with Alien IT,
              as we take care of your IT needs with expertise and dedication.
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  )
}
