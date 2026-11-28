import { LuCheck } from "react-icons/lu";

import styles from "./RoutingResult.module.css";

const results = [
  {
    id: 1,
    value: "۶ دقیقه",
    label: "زمان تخمینی",
  },
  {
    id: 2,
    value: "۱٫۲ کیلومتر",
    label: "طول مسیر",
  },
  {
    id: 3,
    value: "ولیعصر",
    label: "پناهگاه پیشنهادی",
  },
];

export default function RoutingResult() {
  return (
    <section
      className={styles.container}
      aria-label="نتیجه نمایشی مسیریابی"
      aria-live="polite"
    >
      {/* Result Cards */}

      <div className={styles.resultsGrid}>
        {results.map((result) => (
          <div
            key={result.id}
            className={styles.resultCard}
          >
            <strong>{result.value}</strong>
            <small>{result.label}</small>
          </div>
        ))}
      </div>

      {/* Result Notice */}

      <div className={styles.notice}>
        <div className={styles.noticeIcon}>
          <LuCheck aria-hidden="true" />
        </div>

        <div className={styles.noticeContent}>
          <h3>گزینه پیشنهادی آماده است</h3>

          <p>
            این نتیجه صرفاً داده نمایشی است و مسیر واقعی
            محاسبه نشده است.
          </p>
        </div>
      </div>
    </section>
  );
}
