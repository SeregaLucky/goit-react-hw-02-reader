/* import - node_modules */
import React from 'react';
import T from 'prop-types';
/* import - CSS */
import styles from './Counter.module.css';

/*
 * COMPONENT
 */
const Counter = ({ indexArray, allPages }) => (
  <p className={styles.counter}>
    {indexArray + 1}/{allPages}
  </p>
);

Counter.propTypes = {
  indexArray: T.number.isRequired,
  allPages: T.number.isRequired,
};

export default Counter;
