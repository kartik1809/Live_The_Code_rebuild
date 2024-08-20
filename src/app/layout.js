import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { MacbookScrollDemo } from "@/components/MacBook";
import HeroSection from "@/components/Hero";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import '../components/index.css';
import TimeLine from "@/components/TimeLine";
import About from "@/components/About";
import Themes from "@/components/Themes";
import Sponsors from "@/components/Sponsors";
import Collaborators from "@/components/Collaborators";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Contact from "@/components/ContactCard";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Live The Code 3.0",
  description: "Live the code 3.0 hackathon oraganized by GFG ADGIPS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{background:'black'}}>
   
        <Navbar/>
        <HeroSection />
        {children}
        <TimeLine />        
        <MacbookScrollDemo />
        <About />
        <Themes />
        <h2 className="text-4xl sm:text-5xl  text-[aliceblue] text-center mt-12 -mb-8">Our Sponsors</h2>
        <Sponsors />
        <Collaborators />
        <CTA />
        <Contact />
        <Footer />
        

        <ShootingStars />
        <StarsBackground />
        <div className="ellipse1"></div>
        {/* <div className="ellipse2"></div> */}
        <div className="ellipse3"></div>
        <div className="ellipse4"></div>
        {/* <div className="ellipse5"></div> */}

      </body>
    </html>
  );
}
