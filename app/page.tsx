'use client';

import { useMemo, useState } from 'react';
import styles from './page.module.css';
import { ScenarioBoard } from './components/ScenarioBoard';
import { TestSummary } from './components/TestSummary';

const defaultScenarios = [
  {
    id: 'auth-flow',
    title: 'Authentication Flow',
    description: 'Validate user sign-in, password recovery, and session persistence.',
    assertions: ['Sign-in succeeds with valid credentials', 'Invalid credentials show helpful messaging', 'Sessions persist after refresh']
  },
  {
    id: 'checkout',
    title: 'Checkout Conversion',
    description: 'Ensure cart, payment, and confirmation steps behave as expected.',
    assertions: ['Cart updates quantities instantly', 'Payment errors surface actionable feedback', 'Receipts deliver to the inbox in < 1 min']
  },
  {
    id: 'collaboration',
    title: 'Realtime Collaboration',
    description: 'Sync edits, comments, and presence across clients seamlessly.',
    assertions: ['Cursors broadcast in < 120ms', 'Conflicting edits resolve deterministically', 'Offline drafts reconcile once connection restores']
  }
];

export default function Page() {
  const [activeIds, setActiveIds] = useState(() => new Set<string>());

  const toggleScenario = (id: string) => {
    setActiveIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const score = useMemo(() => {
    if (!defaultScenarios.length) return 0;
    return Math.round((activeIds.size / defaultScenarios.length) * 100);
  }, [activeIds.size]);

  return (
    <main className={styles.container}>
      <header className={styles.hero}>
        <h1>Test Readiness Dashboard</h1>
        <p>
          Curate high-impact scenarios, map the coverage you already have, and discover the gaps you
          still need to close before launch.
        </p>
      </header>

      <section className={styles.grid}>
        <ScenarioBoard
          scenarios={defaultScenarios}
          activeIds={activeIds}
          onToggle={toggleScenario}
        />
        <TestSummary total={defaultScenarios.length} covered={activeIds.size} score={score} />
      </section>
    </main>
  );
}
