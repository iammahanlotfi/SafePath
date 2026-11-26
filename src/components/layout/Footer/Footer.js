import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        © SafePath AI — تمامی حقوق محفوظ است.
      </span>

      <span dir="ltr">
        Created with ❤️ by Mahan Lotfi
      </span>
    </footer>
  );
}