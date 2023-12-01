import styles from "../styles/footer.module.css";
import Image from "next/image"; 
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Footer(props) {
  const router = useRouter();
  return (
    <div className={styles.footerBody}>
      <div className={styles.imageContainerSmall}>
        <Image
          alt={"alien IT logo"}
          style={{ cursor: "pointer" }}
          onClick={() => {}}
          src={"/static/logo.webp"}
          fill={true}
        />
      </div>
      <div className={styles.headerRow}>
        <div className={styles.center}>
          <div className={styles.bold}>Services</div>
          <Link href="/ransom">
            <div>Ransomware</div>
          </Link>
          <Link href="/backup">
            <div>Backup</div>
          </Link>
          <Link href="/printer">
            <div>Printer Support</div>
          </Link>
          <Link href="/network">
            <div>Network Efficiency</div>
          </Link>
          <Link href="/broken">
            <div>Broken Hardware</div>
          </Link>
          <Link href="/software">
            <div>App Support</div>
          </Link>
        </div>
        
        <div className={styles.center}>
          <div className={styles.bold}>Industries We Serve</div>
          <Link href="/finance">
            <div>Financial</div>
          </Link>
          <Link href="/consumer">
            <div>Consumer</div>
          </Link>
          <Link href="/health">
            <div>Healthcare</div>
          </Link>
          <Link href="/hospitality">
            <div>Hospitality</div>
          </Link>
        </div>
        <div className={styles.center}>
          <div className={styles.bold}>Office Solutions</div>
          <Link href="/contact">
            <div>Contact Center</div>
          </Link>
          <Link href="/ucaas">
            <div>UCAAS</div>
          </Link>
          <Link href="/wan">
            <div>SD-WAN</div>
          </Link>
          <Link href="/phoneTech">
            <div>Mobile Phone Tech</div>
          </Link>
          <Link href="/cloud">
            <div>Cloud Computing</div>
          </Link>
        </div>
        
        <div className={styles.center}>
          <div className={styles.bold}>Areas We Serve</div>
          <Link href="/assesment">
            <div>Utah</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
