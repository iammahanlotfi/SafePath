import styles from "./RoutingWelcome.module.css";

export default function RoutingWelcome() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>
          مسیریابی هوشمند
        </span>

        <h1>به کدام پناهگاه برویم؟</h1>

        <p>
          مبدأ و شرایط حرکت را مشخص کن تا گزینه‌های مناسب را ببینی.
        </p>
      </div>

      <span className={styles.status}>
        نسخه آزمایشی · بدون GPS واقعی
      </span>
    </section>
  );
}
