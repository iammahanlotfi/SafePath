import { LuHouse, LuRoute, LuClock } from "react-icons/lu";
import styles from "./QuickStats.module.css";

const stats = [
  {
    id: 1,
    icon: LuHouse,
    value: "۵",
    label: "پناهگاه در محدوده نمونه",
  },
  {
    id: 2,
    icon: LuRoute,
    value: "۱٫۲ km",
    label: "فاصله تا نزدیک‌ترین پناهگاه",
  },
  {
    id: 3,
    icon: LuClock,
    value: "۶ دقیقه",
    label: "زمان تخمینی پیاده‌روی",
  },
];

export default function QuickStats() {
  return (
    <section
      className={styles.container}
      aria-label="اطلاعات سریع پناهگاه‌ها"
    >
      {stats.map((item) => (
        <div key={item.id} className={styles.card}>
          <div className={styles.iconWrapper}>
            <item.icon aria-hidden="true" />
          </div>

          <div className={styles.content}>
            <b>{item.value}</b>
            <small>{item.label}</small>
          </div>
        </div>
      ))}
    </section>
  );
}
