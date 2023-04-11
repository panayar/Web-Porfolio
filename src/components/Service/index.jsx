import styles from "./styles.module.css"

function Service({ title, text, icon }) {
  return (
    <div className={styles.service}>
        <div className={styles.iconContainer}>{icon}</div>
        <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  )
}

export { Service }