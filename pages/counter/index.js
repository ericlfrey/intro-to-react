import React from 'react';
import Counter from '../../components/Counter';
import styles from './counter.module.css';

export default function CounterPage() {
  const counters = [
    { title: 'Counter 1' },
    { title: 'Counter 2' },
    { title: 'Counter 3' },
  ];
  return (
    <div className={styles.center}>
      <h1 className={styles.headingMargin}>Counter Page</h1>
      {counters.map((counter) => (
        <Counter key={counter.title} title={counter.title} />
      ))}
    </div>
  );
}
