import styles from "./WelcomeSection.module.css";

export default function WelcomeSection() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>
          SAFEPATH · همراه مسیر امن
        </span>

        <h1>برای پیدا کردن پناهگاه آماده‌اید؟</h1>

        <p>
          موقعیت خود را مشخص کنید تا پناهگاه‌های اطراف و
          مسیرهای پیشنهادی را ببینید.
        </p>
      </div>

      <div className={styles.status}>
        <span className={styles.statusDot} />
        <span>پروتوتایپ تعاملی · داده‌های نمونه</span>
      </div>
    </section>
  );
}
