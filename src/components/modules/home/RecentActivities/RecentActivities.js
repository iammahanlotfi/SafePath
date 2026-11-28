import styles from "./RecentActivities.module.css";

const activities = [
  {
    id: 1,
    title: "موقعیت مکانی نمونه مشخص شد",
    time: "چند لحظه پیش",
  },
  {
    id: 2,
    title: "پناهگاه‌های اطراف بررسی شدند",
    time: "۲ دقیقه پیش",
  },
  {
    id: 3,
    title: "مسیر پیشنهادی نمونه آماده شد",
    time: "۵ دقیقه پیش",
  },
];

export default function RecentActivities() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>فعالیت‌های اخیر</h2>
        <span>داده‌های نمونه</span>
      </div>

      <ul className={styles.activityList}>
        {activities.map((activity) => (
          <li
            key={activity.id}
            className={styles.activityItem}
          >
            <span
              className={styles.activityDot}
              aria-hidden="true"
            />

            <div className={styles.activityContent}>
              <h3>{activity.title}</h3>
              <small>{activity.time}</small>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
