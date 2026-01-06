import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "WA-Construction",
  description: "Building the Foundations of Tomorrow, Today - WA Construction specializes in delivering complex projects with precision, safety, and guaranteed on-time completion.",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
