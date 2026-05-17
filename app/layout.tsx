import LeafsEffect from "@/Components/LeafsEffect";
import "./globals.css";
import Header from "@/Components/Header";


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
      <Header />
        {children}
        </body>
    </html>
  );
}
