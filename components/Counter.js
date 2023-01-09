import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from '../styles/counter.module.css';

export default function Counter({ title }) {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((currentVal) => currentVal + 1);
  };

  return (
    <div>
      {value === 5 ? (
        'YOU ARE A WEINER'
      ) : (
        <>
          <h1>{title}</h1>
          <h2>{value}</h2>
          <Button
            type="button"
            onClick={handleClick}
            className={styles.counterButton}
            variant={value <= 0 ? 'danger' : 'success'}
          >Increment
          </Button>
          {value <= 0 ? (
            ''
          ) : (
            <Button
              type="button"
              onClick={() => setValue((currentVal) => currentVal - 1)}
              className={styles.counterButton}
            >Decrement
            </Button>
          )}
          <Button
            type="button"
            onClick={() => setValue(0)}
            className={styles.counterButton}
          >Reset
          </Button>
        </>
      )}

    </div>
  );
}

Counter.propTypes = {
  title: PropTypes.string,
};

Counter.defaultProps = {
  title: 'Counter Default',
};
