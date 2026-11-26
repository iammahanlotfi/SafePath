"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import toast from "react-hot-toast";
import Image from "next/image";
import {LuHouse,LuRoute,LuShieldCheck,LuInfo} from "react-icons/lu";

const navigation = [
  { title: "خانه", href: "/" , icon: LuHouse},
  { title: "مسیریابی", href: "/route" , icon: LuRoute },
  { title: "پناهگاه‌ها", href: "/shelters", icon: LuShieldCheck},
  { title: "درباره سامانه", href: "/about", icon: LuInfo},
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
    <Link href="/" className={styles.brand}>
      <Image src="/images/logo.png" alt="SafePath Logo" width={52} height={52} className={styles.brandMark} priority/>
      <span className={styles.brandName}>
        SafePath
        <small>پیدا کردن مسیر امن</small>
      </span>
    </Link>

    <nav className={styles.nav} aria-label="ناوبری اصلی">
    {navigation.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      aria-current={
        pathname === item.href ? "page" : undefined
      }
      className={
        pathname === item.href ? styles.active : ""
      }
    >
      <item.icon
        className={styles.navIcon}
        aria-hidden="true"
      />
      <span>{item.title}</span>
    </Link>
  ))}
</nav>

      <div className={styles.headerTools}>
        <button
          type="button"
          className={styles.locationStatus}
          aria-label="وضعیت موقعیت مکانی"
          onClick={() =>
            toast("قابلیت دریافت موقعیت مکانی در فازهای بعدی فعال می‌شود.", {
            icon: "📍",
            })
          }
        >
          <span className={styles.locationIcon}>⌖</span>
          <span className={styles.locationCopy}>
            <b>موقعیت مکانی</b>
            <small>
              <i />
              آماده دریافت موقعیت
            </small>
          </span>
        </button>
        <Link
          href="/about"
          className={styles.helpButton}
          aria-label="راهنمای SafePath"
          title="راهنمای سامانه"
        >
          ?
        </Link>
      </div>
    </header>
  );
}