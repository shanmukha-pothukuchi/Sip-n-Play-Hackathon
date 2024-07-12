import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "./_components/footer";
import { ThemeProvider } from "./_components/theme-provider";
import "./globals.css";
import Header from "./header";

const font = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Sip & Play",
  description: "Hackathon Project by Shanmukha Pothukuchi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <div className="mt-[100px]">
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
