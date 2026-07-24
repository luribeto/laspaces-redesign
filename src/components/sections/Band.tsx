import styles from './Band.module.scss'

const FOUNDING_YEAR = 2003
const yearsOfExperience = new Date().getFullYear() - FOUNDING_YEAR

const stats = [
  { number: String(yearsOfExperience), label: 'Años de\nexperiencia' },
  { number: '6', label: 'Líneas de\nservicio' },
  { number: String(yearsOfExperience - 6), label: 'Años en\nprotocolos' },
  { number: 'CO', label: 'Colombia' },
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
