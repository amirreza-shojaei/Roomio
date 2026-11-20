import { ThemeProvider } from "@/src/components/providers/themeProviders";
import "./globals.css";

import localFont from 'next/font/local'

const Font = localFont({
  src: [
    {
      path: '../src/assets/fontes/vazir/Vazir-Light.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../src/assets/fontes/vazir/Vazir.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-my-custom',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning className={Font.variable}>
      <body className="font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}