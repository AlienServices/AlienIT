"use client";
import Image from "next/image";
import Link from "next/link";
import { Quote } from "../SVG/Quote";
import { PatternFormat } from "react-number-format";
import Header from "../components/header";
import Funnel from "../funnel/page";
import { useRouter } from "next/navigation";
import Footer from "../components/footer";
import styles from "../styles/dropdown.module.css";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function Dropdown(props) {
  const [display, setDisplay] = useState(true);
  const [serviceToggle, setServiceToggle] = useState(true);
  const [industryToggle, setIndustryToggle] = useState(true);
  const [areaToggle, setAreaToggle] = useState(true);
  const router = useRouter();
  useEffect(() => {    
    if (props.toggle === false) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  }, [props.toggle]);
  console.log(props, "this is props")  
  return (
    <div className={styles.dropdown}>
      <div style={{ opacity: display ? "0" : "1" }} className={styles.box}>
        <div style={{ padding: "10px" }}>Home</div>
        <div className={styles.headerRow}>
          <div
            onClick={() => {
              setServiceToggle(!serviceToggle);
            }}
            className={styles.flex}
          >
            <div>Services</div>
            <Image alt={"down arrow"} src={"/static/side.webp"} width={20} height={20} />
          </div>
          <div
            style={{ display: serviceToggle ? "none" : "flex" }}
            className={styles.hiddenList}
          >
            <div
              onClick={() => {
                router.push("/ransom");
              }}
            >
              Ransomwhere Protection
            </div>
            <div
              onClick={() => {
                router.push("/backup");
              }}
            >
              Backup and Support
            </div>
            <div
              onClick={() => {
                router.push("/printer");
              }}
            >
              Printer Support
            </div>
            <div
              onClick={() => {
                router.push("/network");
              }}
            >
              Network Efficiency
            </div>
            <div
              onClick={() => {
                router.push("/broken");
              }}
            >
              Fix Broken Hardware
            </div>
            <div
              onClick={() => {
                router.push("/software");
              }}
            >
              Software Support
            </div>
          </div>
        </div>
        <div className={styles.headerRow}>
          <div
            onClick={() => {
              setIndustryToggle(!industryToggle);
            }}
            className={styles.flex}
          >
            <div>Industries We Serve</div>
            <Image alt={"down arrow"} src={"/static/side.webp"} width={20} height={20} />
          </div>
          <div
            style={{ display: industryToggle ? "none" : "flex" }}
            className={styles.hiddenList}
          >
            <div
              onClick={() => {
                router.push("/finance");
              }}
            >
              Financial
            </div>
            <div
              onClick={() => {
                router.push("/consumer");
              }}
            >
              Consumer Goods
            </div>
            <div
              onClick={() => {
                router.push("/health");
              }}
            >
              Healthcare
            </div>
            <div
              onClick={() => {
                router.push("/hospitality");
              }}
            >
              Hospitality
            </div>
            <div
              onClick={() => {
                router.push("/manufactoring");
              }}
            >
              Manufactoring
            </div>
            <div
              onClick={() => {
                router.push("/restaurants");
              }}
            >
              Restaurants
            </div>
            <div
              onClick={() => {
                router.push("/construction");
              }}
            >
              Construction
            </div>
            <div
              onClick={() => {
                router.push("/property");
              }}
            >
              Property Management
            </div>
            <div
              onClick={() => {
                router.push("/landscape");
              }}
            >
              Landscape
            </div>
          </div>
        </div>
        <div className={styles.headerRow}>
          <div
            onClick={() => {
              setAreaToggle(!areaToggle);
            }}
            className={styles.flex}
          >
            <div>Areas We Serve</div>
            <Image alt={"down arrow"} src={"/static/side.webp"} width={20} height={20} />
          </div>
          <div
            style={{ display: areaToggle ? "none" : "flex" }}
            className={styles.hiddenList}
          >
            <div
              onClick={() => {
                router.push("/assesment");
              }}
            >
              Utah
            </div>
          </div>
        </div>
        <div className={styles.headerRow}>
          <div
            onClick={() => {
              router.push("/assesment");
            }}
            className={styles.flex}
          >
            <div>Contact Us</div>
          </div>
        </div>

        <div className={styles.headerRow}>
          <div
            onClick={() => {
              router.push("/assesment");
            }}
            className={styles.flex}
          >
            <button className={styles.button}>Free Assessment</button>
          </div>
        </div>
      </div>
    </div>
  );
}
