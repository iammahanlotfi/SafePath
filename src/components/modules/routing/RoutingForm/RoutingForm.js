"use client";

import { LuArrowLeft, LuRotateCcw } from "react-icons/lu";
import toast from "react-hot-toast";
import { useState } from "react";

import styles from "./RoutingForm.module.css";

export default function RoutingForm({ children }) {

  const [showResult , setShowResult] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowResult(true);
    toast.success("نتیجه نمایشی آماده شد");
  };

  const handleReset = () => {
    setShowResult(false);
    toast.success("فرم بازنشانی شد");
  };

  return (
    <section className={styles.container}>
      {/* Form Header */}

      <div className={styles.header}>
        <h2>مشخصات مسیر</h2>

        <p>
          اطلاعات زیر فقط برای شبیه‌سازی رابط کاربری استفاده می‌شود.
        </p>
      </div>

      {/* Routing Form */}

      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <div className={styles.fields}>
          {/* Origin */}

          <div className={styles.field}>
            <label htmlFor="origin">مبدأ حرکت</label>

            <select
              id="origin"
              name="origin"
              defaultValue="current"
            >
              <option value="current">
                موقعیت فعلی کاربر
              </option>
            </select>
          </div>

          {/* Total People Count */}

          <div className={styles.field}>
            <label htmlFor="people">تعداد کل افراد</label>

            <input
              id="people"
              name="people"
              type="number"
              min="1"
              max="20"
              defaultValue="2"
              required
            />
          </div>

          {/* Transportation Mode */}

          <div className={styles.field}>
            <label htmlFor="mode">شیوه جابه‌جایی</label>

            <select
              id="mode"
              name="mode"
              defaultValue="walk"
            >
              <option value="walk">پیاده</option>

              <option value="wheel">
                ویلچر / مسیر دسترس‌پذیر
              </option>

              <option value="car">خودرو</option>
            </select>
          </div>

          {/* Route Priority */}

          <div className={styles.field}>
            <label htmlFor="priority">
              اولویت انتخاب مسیر
            </label>

            <select
              id="priority"
              name="priority"
              defaultValue="time"
            >
              <option value="time">
                کمترین زمان رسیدن
              </option>

              <option value="distance">
                کوتاه‌ترین مسافت
              </option>

              <option value="safe">
                محدودیت کمتر
              </option>

              <option value="crowd">
                ازدحام کمتر
              </option>
            </select>
          </div>
        </div>

        {/* Form Actions */}

        <div className={styles.actions}>
          <button
            type="submit"
            className={styles.submitButton}
          >
            <span>نمایش مسیر پیشنهادی</span>
            <LuArrowLeft />
          </button>

          <button
            type="reset"
            className={styles.resetButton}
          >
            <LuRotateCcw />
            <span>بازنشانی</span>
          </button>
        </div>
      </form>

      {/* Routing Result */}

      {showResult && children}
    </section>
  );
}
