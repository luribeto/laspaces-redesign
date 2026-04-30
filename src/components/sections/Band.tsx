import styles from './Band.module.scss'

const stats = [
  { number: '19', label: 'Años de\nexperiencia' },
  { number: '6', label: 'Líneas de\nservicio' },
  { number: '17', label: 'Años en\nprotocolos' },
  { number: 'CO', label: 'Colombia\n& México' },
]

export default function Band() {
  return (
    <div className={styles.band}>
      <div className="wrapper">
        <div className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.number} className={styles.stat}>
              <span className={styles.number}>{stat.number}</span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
