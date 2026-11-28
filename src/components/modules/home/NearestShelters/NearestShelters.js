import Link from "next/link";
import { LuHouse, LuArrowLeft } from "react-icons/lu";
import styles from "./NearestShelters.module.css";

const shelters = [
  {
    id: 1,
    name: "پناهگاه مرکزی ولیعصر",
    district: 6,
    freeCapacity: 68,
    freePercent: 38,
    distance: "۱٫۲",
    status: "available",
  },
  {
    id: 2,
    name: "مرکز فرهنگی بهار",
    district: 7,
    freeCapacity: 42,
    freePercent: 35,
    distance: "۱٫۸",
    status: "available",
  },
  {
    id: 3,
    name: "پناهگاه پارک لاله",
    district: 6,
    freeCapacity: 15,
    freePercent: 15,
    distance: "۲٫۴",
    status: "limited",
  },
];

export default function NearestShelters() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>نزدیک‌ترین پناهگاه‌ها</h2>
        <span>بر اساس موقعیت نمونه</span>
      </div>

      <div className={styles.shelterList}>
        {shelters.map((shelter) => (
          <article
            key={shelter.id}
            className={styles.shelter}
          >
            <div className={styles.shelterTop}>
              <div className={styles.shelterIcon}>
                <LuHouse />
              </div>

              <div className={styles.shelterInfo}>
                <h3>{shelter.name}</h3>

                <p>
                  منطقه {shelter.district.toLocaleString("fa-IR")}
                  {" · "}
                  ظرفیت آزاد{" "}
                  {shelter.freeCapacity.toLocaleString("fa-IR")}
                  {" نفر"}
                </p>
              </div>

              <span className={styles.distance} dir="ltr">
                {shelter.distance} km
              </span>
            </div>

            <div
              className={styles.capacity}
              role="progressbar"
              aria-label={`ظرفیت اشغال‌شده ${shelter.name}`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={100 - shelter.freePercent}
            >
              <span
                className={
                  shelter.status === "limited"
                    ? styles.capacityLimited
                    : styles.capacityFill
                }
                style={{
                  width: `${100 - shelter.freePercent}%`,
                }}
              />
            </div>

            <div className={styles.capacityNote}>
              <span>ظرفیت باقی‌مانده</span>

              <span>
                {shelter.freePercent.toLocaleString("fa-IR")}٪ آزاد
              </span>
            </div>
          </article>
        ))}
      </div>

      <Link href="/shelters" className={styles.shelterButton}>
        <span>مشاهده همه پناهگاه‌ها</span>
        <LuArrowLeft />
      </Link>
    </section>
  );
}
