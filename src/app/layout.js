import { Inter, Anton, Angkor, Lexend_Deca } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import TransitionProvider from "./components/transitionProvider";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const inter = Inter({ subsets: ['latin'] });

//const lexend_deca = Lexend_Deca({ subsets: ['latin'] });
//const anton = Anton({ weight: '400', subsets: ['latin'] });
//const angkor = Angkor({ weight: '400', subsets: ['latin'] });


export const metadata = {
  title: "Huyen Nguyen Portfolio",
  description: "No pain, No gain",

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