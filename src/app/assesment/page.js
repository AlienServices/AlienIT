'use client'
import Image from 'next/image'
import { Quote } from '../SVG/Quote'

import { PatternFormat } from 'react-number-format'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/assesment.module.css'
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'

export default function Assesment() {
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
            <div className={styles.mainTitle}>Get An IT Assesment</div>
            <div className={styles.buttonRow}>
              <div className={styles.paragraph}>
                Want to know how your current IT infrastructure and strategy can
                be improved? Contact us today to get a free IT assessment so we
                can figure out how to solve your IT problems!
              </div>
            </div>
            <div>Call Us At (801) 261-0510</div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.titleBigBlack}>
                Heres what you get from us:
              </div>
              <div className={styles.paragraphMid}>
                With our IT assessment, our experienced team of IT professionals
                will:
              </div>
              <div className={styles.space}>
                <div className={styles.container}>
                  <Image src={'/checkmark.png'} width={25} height={25} />
                  <div>Asses your needs</div>
                </div>
                <div className={styles.container}>
                  <Image src={'/checkmark.png'} width={25} height={25} />
                  <div>
                    Provide a plan to solve your IT problems and keep them from
                    happening
                  </div>
                </div>
                <div className={styles.container}>
                  <Image src={'/checkmark.png'} width={25} height={25} />
                  <div>
                    Provide recommendations for securing your data and
                    maximizing your operational efficiency.
                  </div>
                </div>
              </div>
              <div className={styles.paragraphMid}>
                Our IT assessments are quick and painless, and our team is ready
                to help you now.
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.titleBig}>Schedule Your Assesment!</div>
              <div>
                Receive a response within minutes, not hours. Guaranteed!
              </div>
              <div className={styles.boxcolumn}>
                <div className={styles.inputRow}>
                  <input
                    placeholder="First And Last Name"
                    className={styles.input}
                    type="text"
                  />
                  <input
                    placeholder="Company Name"
                    className={styles.input}
                    type="text"
                  />
                </div>
                <div className={styles.inputRow}>
                  <input
                    placeholder="Email Address"
                    className={styles.input}
                    type="text"
                  />
                  <PatternFormat
                    format="+1 (###) ### ####"
                    allowEmptyFormatting
                    mask="_"
                    className={styles.input}
                    onChange={(event) => {
                      setNumber(event.target.value)
                    }}
                  />
                </div>
                <div className={styles.checkColumn}>
                  <div className={styles.inputrow}>
                    <input className={styles.check} type="checkbox" />
                    <div>I need Managed IT</div>
                  </div>
                  <div className={styles.inputrow}>
                    <input className={styles.check} type="checkbox" />
                    <div>I need Remote Support</div>
                  </div>
                  <div className={styles.inputrow}>
                    <input className={styles.check} type="checkbox" />
                    <div>I need Onsite Support</div>
                  </div>
                  <div className={styles.inputrow}>
                    <input className={styles.check} type="checkbox" />
                    <div>I need Personal Computer Support</div>
                  </div>
                </div>
                <textarea
                  className={styles.text}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
