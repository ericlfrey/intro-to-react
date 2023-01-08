import React from 'react';
import Counter from '../../components/Counter';
import styles from './counter.module.css';

export default function CounterPage() {
  return (
    <div className={styles.center}>
      <h1 className={styles.headingMargin}>Counter Page</h1>
      <Counter />
    </div>
  );
}
