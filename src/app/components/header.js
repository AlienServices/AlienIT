import styles from '../styles/page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Dropdown from '../dropdown/page'

export default function header() {
  const [menu, setMenu] = useState(true)
  const router = useRouter()
  return (
    <div className={styles.center}>
      <Dropdown toggle={menu}/>
      <div className={styles.row}>
        <div className={styles.imageContainerSmall}>
          <Image
            alt={"alien IT logo"}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              router.push('/')
            }}
            src={'/logo.webp'}
            fill={true}
          />
        </div>
        <div className={styles.dropdownWrapper}>
          <div
            onClick={() => {
              router.push('/')
            }}
            className={styles.hover}
          >
            Home
          </div>
        </div>
        <div className={styles.dropdownWrapper}>
          <div className={styles.hover}>Services</div>
          <div className={styles.hidden}>
            <div className={styles.menuWrapper}>
              <div
                onClick={() => {
                  router.push('ransom')
                }}
                className={styles.hide}
              >
                Ransomware Protection
              </div>
              <div
                onClick={() => {
                  router.push('backup')
                }}
                className={styles.hide}
              >
                Backup And Restore
              </div>
              <div
                onClick={() => {
                  router.push('printer')
                }}
                className={styles.hide}
              >
                Full Printer Support
              </div>
              <div
                onClick={() => {
                  router.push('network')
                }}
                className={styles.hide}
              >
                Network Efficiency
              </div>
              <div
                onClick={() => {
                  router.push('broken')
                }}
                className={styles.hide}
              >
                Fix Broken Hardware
              </div>

              <div
                onClick={() => {
                  router.push('software')
                }}
                className={styles.hide}
              >
                Sofware And App Support
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdownWrapper}>
          <div className={styles.hover}>Industries we serve</div>
          <div className={styles.hidden}>
            <div className={styles.menuWrapper}>
              <div
                onClick={() => {
                  router.push('finance')
                }}
                className={styles.hide}
              >
                Financial
              </div>
              <div
                onClick={() => {
                  router.push('/consumer')
                }}
                className={styles.hide}
              >
                Consumer Goods
              </div>
              <div
                onClick={() => {
                  router.push('/health')
                }}
                className={styles.hide}
              >
                Healthcare And Medical
              </div>
              <div
                onClick={() => {
                  router.push('/hospitality')
                }}
                className={styles.hide}
              >
                Hospitality
              </div>
              <div
                onClick={() => {
                  router.push('/manufactoring')
                }}
                className={styles.hide}
              >
                Manufactoring
              </div>
              <div
                onClick={() => {
                  router.push('/restaurants')
                }}
                className={styles.hide}
              >
                Restaurants
              </div>
              <div
                onClick={() => {
                  router.push('/construction')
                }}
                className={styles.hide}
              >
                Construction
              </div>
              <div
                onClick={() => {
                  router.push('/property')
                }}
                className={styles.hide}
              >
                Property Management
              </div>
              <div
                onClick={() => {
                  router.push('/landscape')
                }}
                className={styles.hide}
              >
                Landscape And Pool Design
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdownWrapper}>
          <div className={styles.hover}>Areas we serve</div>
          <div className={styles.hidden}>
            <div className={styles.menuWrapper}>
              <div
                onClick={() => {
                  router.push('/assesment')
                }}
                className={styles.hide}
              >
                Utah County
              </div>
              <div
                onClick={() => {
                  router.push('/assesment')
                }}
                className={styles.hide}
              >
                Salt Lake County
              </div>
              <div
                onClick={() => {
                  router.push('/assesment')
                }}
                className={styles.hide}
              >
                Sanpete County
              </div>
              <div
                onClick={() => {
                  router.push('/assesment')
                }}
                className={styles.hide}
              >
                Weber County
              </div>
              <div
                onClick={() => {
                  router.push('/assesment')
                }}
                className={styles.hide}
              >
                Wasatch County
              </div>
              <div
                onClick={() => {
                  router.push('/assesment')
                }}
                className={styles.hide}
              >
                Davis County
              </div>
              <div
                onClick={() => {
                  router.push('/assesment')
                }}
                className={styles.hide}
              >
                Cache County
              </div>
              <div
                onClick={() => {
                  router.push('/assesment')
                }}
                className={styles.hide}
              >
                Washington County
              </div>
              <div
                onClick={() => {
                  router.push('/assesment')
                }}
                className={styles.hide}
              >
                All Other Utah Counties!
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdownWrapper}>
          <div className={styles.hover}>Company</div>
          <div className={styles.hidden}>
            <div className={styles.menuWrapper}>
              <div
                onClick={() => {
                  router.push('/about')
                }}
                className={styles.hideNo}
              >
                About Us
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            router.push('/assesment')
          }}
          className={styles.bigButton}
        >
          Free Assesment
        </button>
      </div>
      <div className={styles.burgerContainer}>
        <Image alt={"header menu"} onClick={() => {setMenu(!menu)}}  src={'/whiteMenu.png'} fill={true} />
      </div>
    </div>
  )
}
