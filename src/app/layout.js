import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Navbar/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OGM Media"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      className={inter.className}>
        <nav>
          <NavBar />
        </nav>
        {children}
        </body>
    </html>
  );
}
