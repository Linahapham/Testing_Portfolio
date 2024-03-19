import { Inter, Anton, Angkor } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import TransitionProvider from "./components/transitionProvider";

const inter = Inter({ subsets: ['latin'] });
const anton = Anton({ weight: '400', subsets: ['latin'] });
const angkor = Angkor({ weight: '400', subsets: ['latin'] });


export const metadata = {
  title: "Huyen Nguyen Portfolio",
  description: "The best animated portfolio page",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}