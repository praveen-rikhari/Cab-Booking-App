import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Speedy Go",
  description: "Anywhere ,AnyTime ,EveryWhere Rides...",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel='icon' href='./favicon.ico' />
        </head>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
