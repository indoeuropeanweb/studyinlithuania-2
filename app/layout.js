import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const ainoFont = localFont({
  src: [
    {
      path: './fonts/Aino-Headline.otf',
      weight: "400",
      style: 'normal',
    }
  ],
  variable: '--font-ainoFont',
})

export const metadata = {
  metadataBase: new URL('https://www.studyinlithuania.in'),

  title:
    "Study in Lithuania for Indian Students | Universities, Visa & Admission",

  description:
    "Study in Lithuania with expert guidance for Indian students. Get help with admissions, student visa, scholarships, universities, tuition fees, and accommodation in Lithuania.",

  keywords: [
    'study in lithuania',
    'lithuania student visa',
    'study in lithuania from india',
    'lithuania universities',
    'lithuania scholarship',
    'study abroad lithuania',
    'europe study visa',
    'lithuania admission consultants'
  ],

  alternates: {
    canonical: 'https://www.studyinlithuania.in',
  },

  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interSans.variable} ${robotoMono.variable} ${ainoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'G-C2KSTLP805');
        `}
      </Script>
      </body>
    </html>
  );
}
