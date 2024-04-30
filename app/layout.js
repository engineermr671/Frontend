import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { Providers } from "./providers";
import Nav from "./Components/Nav";
import Course from "./Course/page";
import Learn from "./Components/Learn";
import Footer from "./Components/Footer";
export const metadata = {
  title: "Mr.Engineer",
  description: "Generated by Mr.Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
     
        <Providers>
          {children}
        </Providers>
      
      </body>
    </html>
  );
}
