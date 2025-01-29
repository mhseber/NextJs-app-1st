import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "NextJs-app-1st",
    template: "%s | Learning NextJs"
  },
  keywords: ['Next.js', 'React', 'JavaScript', 'Learning', 'PlayGround'],
  description: "Trying to learn NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        <main className="min-h-[600px] ">
          {children}
        </main>
        <footer>
          <h1 className="text-gray-600 text-center bg-slate-200"> my footer</h1>
        </footer>
      </body>
    </html>
  );
}
