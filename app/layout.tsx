import LeafsEffect from "@/Components/LeafsEffect";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import "./responsive.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
    >
      <body>
      <div className="noise"></div>
      <LeafsEffect />
      {/* <Header /> */}
        {children}
        <Footer />
        </body>
    </html>
  );
}
