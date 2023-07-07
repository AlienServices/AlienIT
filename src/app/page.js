import Data from './Data'
import Head from 'next/head';

export const metadata = {
  title: "Easy IT Support For All Businesses In Utah",
  description: "Experience reliable support and expert assistance for your digital solutions with Alien IT. Our team provides seamless software and app support, troubleshooting, maintenance, and updates. Maximize efficiency, optimize business operations, and ensure smooth digital experiences. Get a free assessment today!",
  keywords: "digital solutions support, software and app assistance, reliable IT services, expert troubleshooting, maintenance and updates, smooth digital operations, maximize efficiency, optimize business operations, seamless software support, app troubleshooting, timely resolutions, proactive monitoring, software vulnerabilities, security and performance, free assessment"
};


const page = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com" />
        {/* Rest of your meta tags and head content */}
      </Head>/

      <Data />
    </div>
  )
}

export default page
