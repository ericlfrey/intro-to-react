import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from '../styles/counter.module.css';

export default function Counter() {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };
  const handleDecrement = () => {
    setValue(value - 1);
  };
  const handleReset = () => {
    setValue(0);
  };

  const buttons = [
    { text: 'Increment', onClick: handleIncrement, variant: 'success' },
    { text: 'Decrement', onClick: handleDecrement, variant: 'primary' },
    { text: 'Reset', onClick: handleReset, variant: 'secondary' },
  ];

  return (
    <>
      <h2>{value}</h2>
      {buttons.map((button) => (
        <Button
          key={button.text}
          onClick={button.onClick}
          variant={button.variant}
          className={styles.counterButton}
        >{button.text}
        </Button>
      ))}
    </>
  );
}
