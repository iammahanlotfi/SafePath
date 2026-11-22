export default function HomePage() {
  return (
    <main style={styles.main}>
      <section style={styles.card}>
        <p style={styles.eyebrow}>پروژه هوش مصنوعی</p>
        <h1 style={styles.title}>SafePath AI</h1>
        <p style={styles.description}>
          سامانه آموزشی یافتن مسیر قابل دسترس به پناهگاه امن
        </p>
        <p style={styles.note}>
          زیرساخت اولیه پروژه آماده است. قابلیت‌های نقشه، پناهگاه‌ها و
          مسیریابی در فازهای بعدی توسعه اضافه می‌شوند.
        </p>
      </section>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    padding: "24px"
  },
  card: {
    width: "min(100%, 680px)",
    padding: "40px",
    border: "1px solid #e2e8f0",
    borderRadius: "20px",
    background: "#ffffff",
    boxShadow: "0 12px 40px rgba(15, 23, 42, 0.06)"
  },
  eyebrow: {
    color: "#64748b",
    fontSize: "14px"
  },
  title: {
    margin: "8px 0",
    fontSize: "36px",
    color: "#0f2747"
  },
  description: {
    fontSize: "18px",
    lineHeight: 1.9
  },
  note: {
    marginTop: "24px",
    padding: "14px",
    borderRadius: "12px",
    background: "#f1f5f9",
    color: "#475569",
    lineHeight: 1.9
  }
};
