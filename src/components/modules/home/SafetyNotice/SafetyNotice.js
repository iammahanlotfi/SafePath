
import { LuTriangleAlert } from "react-icons/lu";
import styles from "./SafetyNotice.module.css";

export default function SafetyNotice() {
  return (
    <section className={styles.container}>
      <div className={styles.noticeIcon}>
        <LuTriangleAlert aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <h2>نکته ایمنی</h2>

        <p>
          در شرایط واقعی بحران، فقط به اطلاعات رسمی و دستورالعمل
          نهادهای امدادی و مدیریت بحران اعتماد کنید.
          این نسخه صرفاً نمونه طراحی است.
        </p>
      </div>
    </section>
  );
}
