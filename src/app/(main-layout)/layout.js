import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import styles from "./layout.module.css";

export default function MainLayout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <main className={styles.content}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}