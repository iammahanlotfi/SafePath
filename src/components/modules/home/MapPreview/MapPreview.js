"use client";

import { useId } from "react";
import { LuPlus, LuMinus, LuLocateFixed } from "react-icons/lu";
import toast from "react-hot-toast";
import styles from "./MapPreview.module.css";

const legends = [
  { id: 1, label: "موقعیت شما", color: "#087f68" },
  { id: 2, label: "پناهگاه فعال", color: "#16a078" },
  { id: 3, label: "ظرفیت محدود", color: "#e0a33d" },
  { id: 4, label: "مسیر پیشنهادی", color: "#087f68" },
];

export default function MapPreview() {
  const patternId = useId();

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>پناهگاه‌های اطراف شما</h2>

        <span className={styles.status}>
          <span className={styles.statusDot} />
          نقشه نمونه
        </span>
      </div>

      <div className={styles.map}>
        <svg
          className={styles.mapSvg}
          viewBox="0 0 700 390"
          preserveAspectRatio="xMidYMid slice"
          role="img"
          aria-label="نقشه شماتیک و مسیر نمونه پناهگاه‌ها"
        >
          {/* City Buildings */}
          <defs>
            <pattern
              id={patternId}
              width="105"
              height="78"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="5"
                y="5"
                width="40"
                height="28"
                rx="4"
                fill="#d8e5d8"
              />

              <rect
                x="54"
                y="5"
                width="45"
                height="28"
                rx="4"
                fill="#dfe9dc"
              />

              <rect
                x="5"
                y="41"
                width="40"
                height="32"
                rx="4"
                fill="#e1eadf"
              />

              <rect
                x="54"
                y="41"
                width="45"
                height="32"
                rx="4"
                fill="#d7e4d7"
              />
            </pattern>
          </defs>

          {/* Map Background */}
          <rect width="700" height="390" fill="#eaf0e8" />

          <rect
            width="700"
            height="390"
            fill={`url(#${patternId})`}
          />

          {/* Main Streets */}
          <path
            d="M-10 105H720M-10 265H720M145 -20V420M370 -20V420M575 -20V420"
            stroke="#ffffff"
            strokeWidth="15"
            fill="none"
          />

          <path
            d="M-10 105H720M-10 265H720M145 -20V420M370 -20V420M575 -20V420"
            stroke="#cbd8ce"
            strokeWidth="1.5"
            fill="none"
          />

          {/* River */}
          <path
            d="M-20 345Q120 300 250 345T520 340T730 310"
            stroke="#a8d4d3"
            strokeWidth="25"
            fill="none"
          />

          <path
            d="M-20 345Q120 300 250 345T520 340T730 310"
            stroke="#ffffff"
            strokeWidth="2"
            strokeDasharray="6 7"
            fill="none"
          />

          {/* Mock Suggested Route */}
          <path
            d="M505 210L450 105L370 105L260 185L145 105"
            stroke="#087f68"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* User Location */}
          <g transform="translate(505 210)">
            <circle r="18" fill="#087f68" opacity=".15" />

            <circle
              r="9"
              fill="#087f68"
              stroke="#ffffff"
              strokeWidth="3"
            />

            <text
              x="0"
              y="30"
              textAnchor="middle"
              className={styles.mapLabel}
            >
              موقعیت شما
            </text>
          </g>

          {/* Central Shelter */}
          <g transform="translate(145 105)">
            <circle r="15" fill="#16a078" opacity=".18" />

            <circle
              r="8"
              fill="#16a078"
              stroke="#ffffff"
              strokeWidth="3"
            />

            <text
              x="0"
              y="-18"
              textAnchor="middle"
              className={styles.mapLabel}
            >
              پناهگاه مرکزی
            </text>
          </g>

          {/* Bahar Shelter */}
          <g transform="translate(370 105)">
            <circle
              r="8"
              fill="#16a078"
              stroke="#ffffff"
              strokeWidth="3"
            />

            <text
              x="0"
              y="-17"
              textAnchor="middle"
              className={styles.mapLabel}
            >
              مرکز بهار
            </text>
          </g>

          {/* Limited Capacity Shelter */}
          <g transform="translate(450 290)">
            <circle
              r="8"
              fill="#e0a33d"
              stroke="#ffffff"
              strokeWidth="3"
            />
          </g>
        </svg>

        {/* Map Controls */}
        <div className={styles.controls}>
          <button
            type="button"
            aria-label="بزرگ‌نمایی"
            title="بزرگ‌نمایی"
            onClick={() => toast("بزرگ‌نمایی نمایشی")}
          >
            <LuPlus />
          </button>

          <button
            type="button"
            aria-label="کوچک‌نمایی"
            title="کوچک‌نمایی"
            onClick={() => toast("کوچک‌نمایی نمایشی")}
          >
            <LuMinus />
          </button>

          <button
            type="button"
            aria-label="موقعیت مکانی"
            title="موقعیت مکانی"
            onClick={() => toast("موقعیت نمونه شما")}
          >
            <LuLocateFixed />
          </button>
        </div>
      </div>

      {/* Map Legends */}
      <div className={styles.footer}>
        {legends.map((item) => (
          <div key={item.id} className={styles.legend}>
            <span
              className={styles.legendDot}
              style={{ backgroundColor: item.color }}
            />

            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
