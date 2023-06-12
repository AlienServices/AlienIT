import styles from '../styles/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
export default function Footer(props) {
  const router = useRouter()
  return (
    <div className={styles.footerBody}>
      <div className={styles.imageContainerSmall}>
        <Image
          alt={"alien IT logo"}
          style={{ cursor: 'pointer' }}
          onClick={() => {}}
          src={'/logo.webp'}
          fill={true}
        />
      </div>
      <div className={styles.headerRow}>
        <div className={styles.center}>
          <div className={styles.bold}>Services</div>
          <div onClick={() => {}}>Ransomware</div>
          <div onClick={() => {}}>Backup</div>
          <div onClick={() => {}}>Printer Support</div>
          <div onClick={() => {}}>Network Efficiency</div>
          <div>Broken Hardware</div>
          <div>App Support</div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.center}>
          <div className={styles.bold}>Industries We Serve</div>
          <div>Financial</div>
          <div>Consumer</div>
          <div>Healthcare</div>
          <div>Hospitality</div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.center}>
          <div className={styles.bold}>Areas We Serve</div>
          <div>Utah</div>
        </div>
      </div>
      
    </div>
  )
}
