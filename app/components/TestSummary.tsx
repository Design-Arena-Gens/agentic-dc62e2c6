import styles from './TestSummary.module.css';

type TestSummaryProps = {
  total: number;
  covered: number;
  score: number;
};

export function TestSummary({ total, covered, score }: TestSummaryProps) {
  const delta = total - covered;

  return (
    <aside className={styles.card}>
      <div className={styles.header}>
        <h2>Coverage Snapshot</h2>
        <p>Track momentum toward the release bar with every merged suite.</p>
      </div>
      <div className={styles.metrics}>
        <div>
          <span className={styles.label}>Suites ready</span>
          <span className={styles.value}>{covered}</span>
        </div>
        <div>
          <span className={styles.label}>Remaining focus</span>
          <span className={styles.value}>{delta}</span>
        </div>
        <div>
          <span className={styles.label}>Confidence score</span>
          <span className={styles.score}>{score}%</span>
        </div>
      </div>
      <div className={styles.progress} aria-hidden>
        <div className={styles.bar} style={{ width: `${score}%` }} />
      </div>
      <ul className={styles.actions}>
        <li>
          <strong>Triaging next:</strong> pair with design to validate empty states and error paths.
        </li>
        <li>
          <strong>Signal boost:</strong> share dashboard snapshots in standup to surface blockers early.
        </li>
      </ul>
    </aside>
  );
}
