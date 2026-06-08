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
import { FORM_ENDPOINT } from "../formEndpoint";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function Assessmentappguard() {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [company, setCompany] = useState();
  const [message, setMessage] = useState();
  const captchaRef = useRef(null);
  const [recaptchaResponse, setRecaptchaResponse] = useState(false);
  const [sending, setSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
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
    e.preventDefault();
    setSending(true);
    setStatusMsg("");

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, company, email, number, message }),
    })
      .then((res) => {
        if (res.ok) {
          setName("");
          setEmail("");
          setStatusMsg("Thanks! We received your request and will respond shortly.");
        } else {
          setStatusMsg("Something went wrong sending your request. Please call us at (801) 261-0510.");
        }
      })
      .catch(() => {
        setStatusMsg("Something went wrong sending your request. Please call us at (801) 261-0510.");
      })
      .finally(() => {
        setSending(false);
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
          <div className={styles.sideBySideContainer}>
            <div className={styles.infoPanel}>
              <div className={styles.mainTitle}>Learn More About AppGuard</div>
              <div className={styles.buttonRow}>
                <h2 className={styles.paragraph}>
                  Our technichal experts are here to help you learn more about AppGuard and how it can help your business. For a general or technical question, call us at 
                </h2>
              </div>
              <div className={styles.bold}>Call Us At <a href="tel:801-212-9016">(801) 212-9016</a></div>
            </div>
            <div className={styles.box}>
              <h4 className={styles.titleBig}>Schedule A Call!</h4>
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
                  disabled={!recaptchaResponse || sending}
                  className={styles.button}
                >
                  {sending ? "Sending..." : "Get Assessment!"}
                </button>
                {!recaptchaResponse && (
                  <div className={styles.mobileSmall} style={{ marginTop: "8px" }}>
                    Please complete the reCAPTCHA above to enable the button.
                  </div>
                )}
                {statusMsg && (
                  <div className={styles.mobileSmall} style={{ marginTop: "8px" }}>
                    {statusMsg}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
