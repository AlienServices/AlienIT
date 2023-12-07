"use client";
import Image from "next/image";
import Link from "next/link";
import { Quote } from "../SVG/Quote";
import ReCAPTCHA from "react-google-recaptcha";
import { PatternFormat } from "react-number-format";
import Header from "../components/header";
import Head from "next/head";
import Footer from "../components/footer";
import styles from "../styles/assesment.module.css";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function Assesment() {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [company, setCompany] = useState();
  const [message, setMessage] = useState();
  const captchaRef = useRef(null);
  const [recaptchaResponse, setRecaptchaResponse] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = captchaRef.current.getValue();
    setToken(token);
    captchaRef.current.reset();

    if (token) {
      let valid_token = await verifyToken(token);
      setValidToken(valid_token);

      if (valid_token[0].success === true) {
        console.log("verified");
        setSuccessMsg("Hurray!! you have submitted the form");
      } else {
        console.log("not verified");
        setErrorMsg(" Sorry!! Verify you are not a bot");
      }
    }
  };
  const sendEmail = (e) => {
    debugger
    e.preventDefault();
    console.log("Sending");

    fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: "api-3882AF7A0AD511EE941FF23C91C88F4E",
        to: [`<info@alienitservices.com>`],
        sender: "<info@copiersutah.com>",
        subject: `This is${name}'s quote form. Their number is ${number}`,
        text_body: `${message}`,
        html_body: `<h1>${message}</h1>`,
        template_id: "9856603",
        template_data: {
          message: message,
          number: number,
          email: email,
          name: name,
          company: company,
        },
      }),
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        console.log("Response succeeded!");
        setName("");
        setEmail("");
        
      }
    });
  };

  var verifyCallback = function (response) {
    setRecaptchaResponse(response);
  };

  const verifyToken = async (token) => {
    let APIResponse = [];

    try {
      let response = await Axios.post(`http://localhost:8000/verify-token`, {
        reCAPTCHA_TOKEN: token,
        Secret_Key: SECRET_KEY,
      });

      APIResponse.push(response["data"]);
      return APIResponse;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div style={{ color: "black" }} className={styles.backgroundColor}>
        <Header />

        <div className={styles.section}>
          <div
            style={{
              height: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Head>
              <meta name="robots" content="index, follow" />
              <link rel="canonical" href="https://copiersutah.com/buy/" />
              <title>
                Get a Quote for Comprehensive IT Solutions and Services | Your
                IT Company
              </title>
              <meta
                name="description"
                content="Looking for comprehensive IT solutions and services for your business? Your IT Company offers a range of advanced IT services, including managed IT services, cybersecurity, cloud computing, and more. Fill out our easy form to get a personalized quote today."
              />
              <meta
                name="keywords"
                content="IT services, IT solutions, managed IT services, cybersecurity, cloud computing, IT consulting, IT support, IT company, get a quote, IT services quote, IT solutions quote, IT services provider, IT support services, IT solutions company, IT services Utah, IT consulting services, IT security, IT infrastructure, IT management"
              />
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    name: "New and Refurbished Copiers",
                    description:
                      "High-quality copiers for your office, including new and refurbished options.",
                    brand: "Copiers Utah",
                    url: "https://alienit.com/home",
                    image: "https://alienit.com/static/logo.webp",
                    offers: {
                      "@type": "AggregateOffer",
                      priceCurrency: "USD",
                      availability: "https://schema.org/InStock",
                      lowPrice: "Your Lowest Price",
                      highPrice: "Your Highest Price",
                      offerCount: "Number of Copiers Available",
                      seller: {
                        "@type": "LocalBusiness",
                        name: "Alien IT",
                        telephone: "(801) 261-0510",
                        email: "info@copiersutah.com",
                        address: {
                          "@type": "PostalAddress",
                          streetAddress: "554 W 8360 S",
                          addressLocality: "Sandy",
                          addressRegion: "Utah",
                          postalCode: "84070",
                          addressCountry: "USA",
                        },
                      },
                    },
                  }),
                }}
              />
            </Head>
            <div className={styles.mainTitle}>Get An IT Assesment</div>
            <div className={styles.buttonRow}>
              <h2 className={styles.paragraph}>
                Want to know how your current IT infrastructure and strategy can
                be improved? Contact us today to get a free IT assessment so we
                can figure out how to solve your IT problems!
              </h2>
            </div>
            <a href="">
              <div className={styles.bold}>Call Us At (801) 261-0510</div>
            </a>
          </div>
          <Image alt={"down arrow"} src={"/static/arrow.webp"} height={80} width={80} />
        </div>
        <div className={styles.section}>
          <div className={`${styles.row} `}>
            <div className={`${styles.column} ${styles.hiddenMobile}`}>
              <div className={styles.titleBigBlack}>
                Heres what you get from us:
              </div>
              <div className={styles.paragraphMid}>
                With our IT assessment, our experienced team of IT professionals
                will:
              </div>
              <div className={styles.space}>
                <div className={styles.container}>
                  <Image
                    alt={"checkmark"}
                    style={{ margin: "10px" }}
                    src={"/static/seen.webp"}
                    width={25}
                    height={25}
                  />
                  <div className={styles.paragraphSmall}>Asses your needs</div>
                </div>
                <div className={styles.container}>
                  <Image
                    alt={"checkmark"}
                    style={{ margin: "10px" }}
                    src={"/static/seen.webp"}
                    width={25}
                    height={25}
                  />
                  <div className={styles.paragraphSmall}>
                    Provide a plan to solve your IT problems and keep them from
                    happening
                  </div>
                </div>
                <div className={styles.container}>
                  <Image
                    alr={"checkmark"}
                    style={{ margin: "10px" }}
                    src={"/static/seen.webp"}
                    width={25}
                    height={25}
                  />
                  <div className={styles.paragraphSmall}>
                    Provide recommendations for securing your data and
                    maximizing your operational efficiency.
                  </div>
                </div>
              </div>            
            </div>
            <div className={styles.box}>
              <h4 className={styles.titleBig}>Schedule Your Assesment!</h4>
              <div className={styles.mobileSmall}>
                Receive a response within minutes, not hours. Guaranteed!
              </div>
              <div className={styles.boxcolumn}>
                <div className={styles.inputRow}>
                  <input
                    onChange={(event) => {
                      
                      setName(event.target.value);
                    }}
                    placeholder="First And Last"
                    className={styles.input}
                    type="text"
                  />
                  <input
                  style={{color:"white"}}
                    onChange={(event) => {
                      setCompany(event.target.value);
                    }}
                    placeholder="Company Name"
                    className={styles.input}
                    type="text"
                  />
                </div>
                <div className={styles.inputRow}>
                  <input
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
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
                      setNumber(event.target.value);
                    }}
                  />
                </div>                
                <textarea
                  onChange={(event) => {
                    setMessage(event.target.value);
                  }}
                  className={styles.text}
                  placeholder={"Tell us about how we can help!"}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <ReCAPTCHA
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    justifyContent: "center",
                    padding: "15px",
                  }}
                  className="recaptcha"
                  sitekey={"6LdNLYElAAAAAIMv324AxwjVLAnHHIdnIWPEYeQi"}
                  ref={captchaRef}
                  onChange={verifyCallback}
                />
                <button
                  onClick={(e) => {
                    sendEmail(e);
                  }}
                  disabled={!recaptchaResponse}
                  className={styles.button}
                >
                  Get Assesment!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
