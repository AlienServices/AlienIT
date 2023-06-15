import styles from "../styles/page.module.css";
import Image from "next/image"; 
import Link from "next/link";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Dropdown from "../dropdown/page";

export default function Header() {
  const [menu, setMenu] = useState(true);
  const router = useRouter();
  return (
    <div className={styles.center}>
      <Dropdown toggle={menu} />
      <div className={styles.row}>
        <div className={styles.imageContainerSmall}>
          <Link href="/">
            <Image
              alt={"alien IT logo"}
              style={{ cursor: "pointer" }}
              src={"/logo.webp"}
              fill={true}
            />
          </Link>
        </div>
        <div className={styles.dropdownWrapper}>
          <Link href="/">
            <div className={styles.hover}>Home</div>
          </Link>
        </div>
        <div className={styles.dropdownWrapper}>
          <div className={styles.hover}>Services</div>
          <div className={styles.hidden}>
            <div className={styles.menuWrapper}>
              <Link href="/ransom">
                <div className={styles.hide}>Ransomware Protection</div>
              </Link>
              <div
                onClick={() => {
                  router.push("backup");
                }}
                className={styles.hide}
              >
                Backup And Restore
              </div>
              <Link href="/printer">
                <div className={styles.hide}>Full Printer Support</div>
              </Link>
              <Link href="/network">
                <div className={styles.hide}>Network Efficiency</div>
              </Link>
              <Link href="/broken">
                <div className={styles.hide}>Fix Broken Hardware</div>
              </Link>
              <Link href="/software">
                <div className={styles.hide}>Sofware And App Support</div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.dropdownWrapper}>
          <div className={styles.hover}>Industries we serve</div>
          <div className={styles.hidden}>
            <div className={styles.menuWrapper}>
              <Link href="/finance">
                <div className={styles.hide}>Financial</div>
              </Link>
              <Link href="/consumer">
                <div className={styles.hide}>Consumer Goods</div>
              </Link>
              <Link href="/health">
                <div className={styles.hide}>Healthcare And Medical</div>
              </Link>
              <Link href="/hospitality">
                <div className={styles.hide}>Hospitality</div>
              </Link>
              <Link href="/manufactoring">
                <div className={styles.hide}>Manufactoring</div>
              </Link>
              <Link href="/restaurants">
                <div className={styles.hide}>Restaurants</div>
              </Link>
              <Link href="/construction">
                <div className={styles.hide}>Construction</div>
              </Link>
              <Link href="/property">
                <div className={styles.hide}>Property Management</div>
              </Link>
              <Link href="/landscape">
                <div className={styles.hide}>Landscape And Pool Design</div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.dropdownWrapper}>
          <div className={styles.hover}>Areas we serve</div>
          <div className={styles.hidden}>
            <div className={styles.menuWrapper}>
              <Link href="/assesment">
                <div className={styles.hide}>Utah County</div>
              </Link>
              <Link href="/assesment">
                <div className={styles.hide}>Salt Lake County</div>
              </Link>
              <Link href="/assesment">
                <div className={styles.hide}>Sanpete County</div>
              </Link>
              <Link href="/assesment">
                <div className={styles.hide}>Weber County</div>
              </Link>
              <Link href="/assesment">
                <div className={styles.hide}>Wasatch County</div>
              </Link>
              <Link href="/assesment">
                <div className={styles.hide}>Davis County</div>
              </Link>
              <Link href="/assesment">
                <div className={styles.hide}>Cache County</div>
              </Link>
              <Link href="/assesment">
                <div className={styles.hide}>Washington County</div>
              </Link>
              <Link href="/assesment">
                <div className={styles.hide}>All Other Utah Counties!</div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.dropdownWrapper}>
          <div className={styles.hover}>Company</div>
          <div className={styles.hidden}>
            <div className={styles.menuWrapper}>
              <Link href="/about">
                <div className={styles.hideNo}>About Us</div>
              </Link>
            </div>
          </div>
        </div>
        <Link href="/assesment">
          <button className={styles.bigButton}>Free Assesment</button>
        </Link>
      </div>
      <div className={styles.burgerContainer}>
        <Image
          alt={"header menu"}
          onClick={() => {
            setMenu(!menu);
          }}
          src={"/whiteMenu.png"}
          fill={true}
        />
      </div>
    </div>
  );
}
