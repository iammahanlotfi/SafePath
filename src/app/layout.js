import "./globals.css";
import { vazirmatn } from "@/fonts";

export const metadata = {
  title: {
      default: "SafePath | مسیر امن",
      template: "%s | SafePath",
  },

  description: "سامانه هوشمند مسیریابی به پناهگاه‌های امن با استفاده از الگوریتم A*",
  applicationName: "SafePath",
  keywords: [ "SafePath", "مسیر امن", "پناهگاه", "هوش مصنوعی", "مسیریابی", "A*"],
};


export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.variable}>
        {children}
        </body>
    </html>
  );
}
