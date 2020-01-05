/* import - node_modules */
import React from 'react';
import T from 'prop-types';
/* import - CSS */
import styles from './Controls.module.css';

/*
 * COMPONENT
 */
const Controls = ({
  onChangeIdxIncrement,
  onChangeIdxDecrement,
  indexArray,
  allPages,
}) => (
  <section className={styles.controls}>
    <button
      type="button"
      className={styles.button}
      onClick={onChangeIdxDecrement}
      disabled={indexArray <= 0}
    >
      Назад
    </button>

    <button
      type="button"
      className={styles.button}
      onClick={onChangeIdxIncrement}
      disabled={indexArray + 2 > allPages}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onChangeIdxIncrement: T.func.isRequired,
  onChangeIdxDecrement: T.func.isRequired,
  indexArray: T.number.isRequired,
  allPages: T.number.isRequired,
};

export default Controls;
