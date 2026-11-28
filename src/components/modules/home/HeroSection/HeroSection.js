import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.container}>
      <div className={styles.banner}>
        <span className={styles.bannerEyebrow}>
          در شرایط اضطراری، آگاهانه حرکت کن
        </span>

        <h2>مسیر امن‌تر، تصمیم سریع‌تر.</h2>

        <p>
          موقعیت خود را مشخص کن تا پناهگاه‌های اطراف و مسیر پیشنهادی را
          در یک نگاه ببینی.
        </p>

        <Link href="/shelters" className={styles.bannerButton}>
          پیدا کردن پناهگاه نزدیک
          <span>←</span>
        </Link>
      </div>

      <div className={styles.visualCard}>
        <div className={styles.mapOrbit}>
          <div className={styles.mapMarker}>
            <FaLocationDot className={styles.mapMarkerIcon} />
          </div>
        </div>

        <div className={styles.shelterBadge}>
          <span className={styles.statusDot} />
          پناهگاه‌های اطراف شما
        </div>

        <div className={styles.companionBadge}>
          <span>✦</span>
          همراه امن شما
        </div>
      </div>
    </section>
  );
}
