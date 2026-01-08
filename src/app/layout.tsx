import Layout from "@/components/Layout/page"
import "./globals.css";
import localFont from 'next/font/local';

export const metadata = {
  title: 'Mahindra Susten Sustainability Report',
  description: 'Mahindra Susten Sustainability Report',
}


const georama = localFont({
  src: '../fonts/Georama_SemiExpanded-Regular.woff2', 
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={georama.className}>
      <body><Layout>{children}</Layout></body>
    </html>
  )
}
