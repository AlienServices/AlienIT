"use client";
import Image from "next/image";
import { Quote } from "./SVG/Quote";
import Footer from "./components/footer";
import Link from "next/link";
import Head from "next/head";
import Header from "./components/header";
import styles from "../app/styles/page.module.css";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [fixedHeader, setFixedHeader] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [images, setImages] = useState({
    imageOne: true, imageTwo: false, imageThree: false, imageFour: false, imageFive: false
  })
  const HEADER_HEIGHT = 90;
  const router = useRouter();
  console.log(images.imageTwo, "these are imagessss")
  return (
    <div className={styles.main}>
      <div className={styles.backgroundColor}>
        <Header />
        <div className={styles.section}>
          <h1 className={styles.mainTitle}>
            Easy IT Support For All Businesses In Utah
          </h1>
          <div className={styles.buttonRow}>
            <Link href="/assesment/" title="buy new and used copiers">
              <button className={styles.buttonRed}>Get Started</button>
            </Link>
            <button
              onClick={() => {
                router.push("/assesment");
              }}
              className={styles.button}
            >
              Call 801-123-4567{" "}
            </button>
          </div>
          <div className={styles.displayFlex}>
            <Image src={'/static/left.png'} height={50} width={50} onClick={(() => {
              setImages({ imageOne: images.imageTwo, imageTwo: images.imageThree, imageThree: images.imageFour, imageFour: images.imageFive, imageFive: images.imageOne })
            })}></Image>
            <div className={images.imageOne ? styles.showing : styles.hidden}>
              <div className={styles.box}>
                <div className={styles.boxContainer}>
                  <div className={styles.title}>mobile phone tech</div>
                  <div className={styles.paragraphSmall}>Mobile phone technology encompasses the innovations and advancements in handheld devices that enable communication, access to information, and various functionalities on the go. It continually evolves to offer faster processors, improved cameras, enhanced connectivity, and a wide array of applications, making our phones more than just communication tools but indispensable companions in our daily lives, facilitating work, entertainment, and staying connected with the world.</div>
                  <Link href={'/phoneTech'}>
                    <button className={styles.button}>See Details</button>
                  </Link>
                </div>
                <div>
                  <Image src={'/static/headset.webp'} alt={'lady with computer'} height={200} width={200}></Image>
                </div>
              </div>
            </div>
            <div className={images.imageTwo ? styles.showing : styles.hidden}>
              <div className={styles.box}>
                <div className={styles.boxContainer}>
                  <div className={styles.title}>cloud computing</div>
                  <div className={styles.paragraphSmall}>
                    Cloud computing is like renting space on the internet to store data, run applications, or access services instead of solely relying on a local computer or server. It offers convenience, scalability, and flexibility, allowing businesses and individuals to access resources on-demand from anywhere, anytime, with the added benefits of cost-efficiency and reduced maintenance overhead.</div>
                  <Link href={'/cloud'}>
                    <button className={styles.button}>See Details</button>
                  </Link>
                </div>
                <div>
                  <Image src={'/static/headset1.webp'} alt={'lady with computer'} height={200} width={200}></Image>
                </div>
              </div>
            </div>
            <div className={images.imageThree ? styles.showing : styles.hidden}>
              <div className={styles.box}>
                <div className={styles.boxContainer}>
                  <div className={styles.title}>SD-WAN</div>
                  <div className={styles.paragraphSmall}>SD-WAN, which stands for Software-Defined Wide Area Networking, transforms how companies handle their networks. It uses smart software to efficiently manage data flow across the network, making connections faster, more reliable, and flexible. This technology improves performance while cutting costs compared to older, hardware-focused network setups.</div>
                  <Link href={'/wan'}>
                    <button className={styles.button}>See Details</button>
                  </Link>
                </div>
                <div>
                  <Image src={'/static/headset.webp'} alt={'lady with computer'} height={200} width={200}></Image>
                </div>
              </div>
            </div>
            <div className={images.imageFour ? styles.showing : styles.hidden}>
              <div className={styles.box}>
                <div className={styles.boxContainer}>
                  <div className={styles.title}>contact center</div>
                  <div className={styles.paragraphSmall}>
                    A contact center serves as a centralized hub where customer interactions across multiple channels like phone, email, chat, and social media are managed efficiently. It employs specialized software and trained agents to handle inquiries, provide support, and ensure consistent, high-quality customer experiences. Contact centers streamline communication between customers and businesses, aiming to resolve issues promptly while gathering valuable insights to enhance service and product offerings.
                  </div>
                  <Link href={'/contact'}>
                    <button className={styles.button}>See Details</button>
                  </Link>
                </div>
                <div>
                  <Image src={'/static/headset1.webp'} alt={'lady with computer'} height={200} width={200}></Image>
                </div>
              </div>

            </div>
            <div className={images.imageFive ? styles.showing : styles.hidden}>
              <div className={styles.box}>
                <div className={styles.boxContainer}>
                  <div className={styles.title}>ucass</div>
                  <div className={styles.paragraphSmall}>
                    UCaaS, or Unified Communications as a Service, is like having a one-stop-shop in the cloud for all your communication needs. It combines tools like calls, video meetings, messaging, and more into a single service, making it easier for businesses to manage their communications effectively while saving money and simplifying operations.</div>
                  <Link href={'/ucaas'}>
                    <button className={styles.button}>See Details</button>
                  </Link>
                </div>
                <div>
                  <Image src={'/static/headset.webp'} alt={'lady with computer'} height={200} width={200}></Image>
                </div>
              </div>
            </div>
            <Image src={'/static/right.png'} height={50} width={50} onClick={(() => {
              setImages({ imageOne: images.imageFive, imageTwo: images.imageOne, imageThree: images.imageTwo, imageFour: images.imageThree, imageFive: images.imageFour })
            })}></Image>
          </div>
        </div>
      </div>

      <div className={styles.sectionRow}>
        <div className={styles.buttonRow}>
          <Image
            alt={"Expert managed IT services"}
            src={"/static/professional.webp"}
            height={375}
            width={375}
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className={styles.centerRow}>
          <div className={styles.midTitle}>Expert Managed IT Services</div>
          <div className={styles.paragraph}>
            Welcome to Alien IT, your trusted destination for comprehensive
            Managed IT Services. With our industry expertise and commitment to
            excellence, we provide tailored solutions for network security,
            cloud computing, data management, and technical support. Our
            proactive approach ensures seamless operations by identifying and
            resolving potential issues before they disrupt your business. With
            Alien IT as your partner, you can focus on driving growth while we
            handle your IT challenges. Experience the transformative power of
            our expertly managed services and unlock the full potential of your
            technology infrastructure. Contact us today to take your business to
            the next level with Alien IT.
          </div>
        </div>
      </div>
      <div className={styles.sectionServiceRow}>
        <div className={styles.mainTitleFull}>Our Services Include</div>
        <div className={styles.serviceRow}>
          <div className={styles.sideRowLeft}>
            <div>
              <h2 className={styles.title}>Ransomware Protection</h2>
              <div className={styles.paragraph}>
                Ransomware evolves, anti-ransomware utilities will evolve as
                well.
              </div>
            </div>
            <div>
              <h2 className={styles.title}>Backup And Restore</h2>
              <div className={styles.paragraph}>
                Allowing users to create backups & restore from backups created
                earlier.
              </div>
            </div>
            <div>
              <h2 className={styles.title}>Full Printer Support</h2>
              <div className={styles.paragraph}>
                Download drivers, run diagnostic tools & troubleshoot your
                printer
              </div>
            </div>
            <div>
              <h2 className={styles.title}>Network Efficiency</h2>
              <div className={styles.paragraph}>
                Concept of efficiency can be applied to both local & global
                scales in a network
              </div>
            </div>
          </div>
          <div className={styles.imageContainerFront}>
            <Image
              alt={"Alien IT services"}
              src={"/static/support.webp"}
              fill={true}
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className={styles.sideRowLeft}>
            <div>
              <h2 className={styles.title}>
                Secure Collabration and cloud support{" "}
              </h2>
              <div className={styles.paragraph}>
                Secure Collaboration can provide secure, fully managed cloud
                services
              </div>
            </div>
            <div>
              <h2 className={styles.title}>Fix Broken Hardware </h2>
              <div className={styles.paragraph}>
                Replacing hardware that is out of service & installing new
                hardware
              </div>
            </div>
            <div>
              <h2 className={styles.title}>Secure And Fast Setup</h2>
              <div className={styles.paragraph}>
                Stay secure with optional verification setup
              </div>
            </div>
            <div>
              <h2 className={styles.title}>Software And App Support</h2>
              <div className={styles.paragraph}>
                Application support specialist can provide technical support to
                clients
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          flexDirection: "column",
          paddingBottom: "40px",
          height: "450px",
        }}
        className={`${styles.sectionRow} ${styles.hiddenSmall}`}
      >
        <div className={styles.middle}>
          <h3 className={styles.reviewBig}>Recent Google Reviews...</h3>
        </div>
        <div className={styles.reviewRow}>
          <div className={styles.paragraphContainer}>
            <div className={styles.title}>Tara Bennets</div>
            <div className={styles.smallRow}>
              <Quote />
              <div className={styles.titleSmall}>
                People there are always fantastic to work with. I recommend them
                to everyone
              </div>
            </div>
          </div>
          <div className={styles.paragraphContainer}>
            <div className={styles.title}>Kyle Francis</div>
            <div className={styles.smallRow}>
              <Quote />
              <div className={styles.titleSmall}>
                Great company to work with. They have friendly staff and were
                able to get me up and running within a few days.
              </div>
            </div>
          </div>
          <div className={`${styles.paragraphContainer} ${styles.hiddenSmall}`}>
            <div className={styles.title}>Carley Ward</div>
            <div className={styles.smallRow}>
              <Quote />
              <div className={styles.titleSmall}>
                This company is the best to do work with. They are very friendly
                and very helpful.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.centerReview}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/maps/place/Copiers+for+Less/@40.599545,-111.9827469,13z/data=!4m12!1m2!2m1!1scopiers+utah!3m8!1s0x87528bb3da9348f5:0x52af9011e571a1bf!8m2!3d40.599545!4d-111.9065292!9m1!1b1!15sCgxjb3BpZXJzIHV0YWhaDiIMY29waWVycyB1dGFokgEVY29waWVyX3JlcGFpcl9zZXJ2aWNlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xTjJaeE0xTjNFQUXgAQA!16s%2Fg%2F1hc90lr04"
          >
            <button className={styles.bigButton}>See All Google Reviews</button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
