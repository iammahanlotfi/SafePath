import styles from "./RouteMapPreview.module.css";

export default function RouteMapPreview() {
  return (
    <section className={styles.container}>
      {/* Map Header */}

      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h2>نمای مسیر</h2>
          <p>نقشه شماتیک محیط نمونه</p>
        </div>

        <span className={styles.status}>
          نقشه آزمایشی
        </span>
      </div>

      {/* Static Map */}

      <div className={styles.map}>
        <svg
          viewBox="0 0 700 390"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="نمای شماتیک مسیر پیشنهادی"
        >
          {/* Map Background */}

          <rect
            width="700"
            height="390"
            fill="#eaf0e8"
          />

          {/* Streets */}

          <path
            d="M-10 100H720M-10 260H720M140 -20V420M370 -20V420M575 -20V420"
            stroke="#ffffff"
            strokeWidth="17"
          />

          {/* Buildings */}

          <g fill="#d7e4d8">
            <rect
              x="20"
              y="20"
              width="90"
              height="55"
              rx="7"
            />

            <rect
              x="175"
              y="20"
              width="130"
              height="55"
              rx="7"
            />

            <rect
              x="405"
              y="20"
              width="130"
              height="55"
              rx="7"
            />

            <rect
              x="20"
              y="135"
              width="90"
              height="90"
              rx="7"
            />

            <rect
              x="405"
              y="135"
              width="130"
              height="90"
              rx="7"
            />
          </g>

          {/* Suggested Route */}

          <path
            d="M500 220L450 100L370 100L250 180L140 100"
            stroke="#087f68"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Origin Marker */}

          <circle
            cx="500"
            cy="220"
            r="10"
            fill="#087f68"
            stroke="#ffffff"
            strokeWidth="4"
          />

          {/* Destination Marker */}

          <circle
            cx="140"
            cy="100"
            r="10"
            fill="#16a078"
            stroke="#ffffff"
            strokeWidth="4"
          />
        </svg>
      </div>
    </section>
  );
}
