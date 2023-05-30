import styles from '../styles/page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function header() {
    return (
        <div className={styles.center}>
          <div className={styles.row}>
            <div className={styles.dropdownWrapper}>
              <div className={styles.hover}>Home</div>
            </div>
            <div className={styles.dropdownWrapper}>
              <div className={styles.hover}>Services</div>
              <div className={styles.hidden}>
                <div className={styles.menuWrapper}>
                  <div className={styles.hide}>Ransomware Protection</div>
                  <div className={styles.hide}>Backup And Restore</div>
                  <div className={styles.hide}>Full Printer Support</div>
                  <div className={styles.hide}>Network Efficiency</div>
                  <div className={styles.hide}>Fix Broken Hardware</div>
                  <div className={styles.hide}>Secure And Fast Setup</div>
                  <div className={styles.hide}>Sofware And App Support</div>
                </div>
              </div>
            </div>
            <div className={styles.dropdownWrapper}>
              <div className={styles.hover}>Industries we serve</div>
              <div className={styles.hidden}>
                <div className={styles.menuWrapper}>
                  <div className={styles.hide}>Financial</div>
                  <div className={styles.hide}>Consumer Goods</div>
                  <div className={styles.hide}>Healthcare And Medical</div>
                  <div className={styles.hide}>Hospitality</div>
                  <div className={styles.hide}>Manufactoring</div>
                  <div className={styles.hide}>Restaurants</div>
                  <div className={styles.hide}>Construction</div>
                  <div className={styles.hide}>Property Management</div>
                  <div className={styles.hide}>Landscape And Pool Design</div>
                </div>
              </div>
            </div>
            <div className={styles.dropdownWrapper}>
              <div className={styles.hover}>Areas we serve</div>
              <div className={styles.hidden}>
                <div className={styles.menuWrapper}>
                  <div className={styles.hide}>Utah County</div>
                  <div className={styles.hide}>Salt Lake County</div>
                  <div className={styles.hide}>Sanpete County</div>
                  <div className={styles.hide}>Weber County</div>
                  <div className={styles.hide}>Wasatch County</div>
                  <div className={styles.hide}>Davis County</div>
                  <div className={styles.hide}>Cache County</div>
                  <div className={styles.hide}>Washington County</div>
                  <div className={styles.hide}>All Other Utah Counties!</div>
                </div>
              </div>
            </div>
            <div className={styles.dropdownWrapper}>
              <div className={styles.hover}>Company</div>
              <div className={styles.hidden}>
                <div className={styles.menuWrapper}>
                  <div className={styles.hideNo}>About Us</div>
                </div>
              </div>
            </div>

            <button className={styles.bigButton}>Free Assesment</button>
          </div>
        </div>
    )
}