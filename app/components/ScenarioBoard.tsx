import styles from './ScenarioBoard.module.css';

type Scenario = {
  id: string;
  title: string;
  description: string;
  assertions: string[];
};

type ScenarioBoardProps = {
  scenarios: Scenario[];
  activeIds: Set<string>;
  onToggle: (id: string) => void;
};

export function ScenarioBoard({ scenarios, activeIds, onToggle }: ScenarioBoardProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.kicker}>Scenario coverage</span>
        <h2>Map what&apos;s covered today</h2>
        <p>
          Switch scenarios on once you&apos;re confident the automated suite has them locked down. Keep
          the rest in review to prioritize the next engineering sprint.
        </p>
      </div>
      <ul className={styles.list}>
        {scenarios.map((scenario) => {
          const isActive = activeIds.has(scenario.id);
          return (
            <li key={scenario.id} className={isActive ? styles.active : styles.inactive}>
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => onToggle(scenario.id)}
                className={styles.toggle}
              >
                <span className={styles.pill}>{isActive ? 'Covered' : 'Needs coverage'}</span>
                <div>
                  <h3>{scenario.title}</h3>
                  <p>{scenario.description}</p>
                </div>
              </button>
              <ul className={styles.assertions}>
                {scenario.assertions.map((assertion) => (
                  <li key={assertion}>{assertion}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
