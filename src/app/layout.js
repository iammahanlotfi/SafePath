import "./globals.css";

export const metadata = {
  title: "SafePath AI",
  description: "سامانه آموزشی مسیریابی به پناهگاه‌های امن"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
