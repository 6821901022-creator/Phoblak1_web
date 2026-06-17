import Footer from "./conponents/Footer";
import Navbar from "./conponents/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="" >
      <body className="layout">
        <Navbar/>
        <div className="main-content">
        {children}
        </div>
        <Footer/>
        </body>
    </html>
  );
}
