/* import - node_modules */
import React from 'react';
import T from 'prop-types';
/* import - CSS */
import styles from './Publication.module.css';

/*
 * COMPONENT
 */
const Publication = ({ publications, indexArray }) => (
  <article className={styles.publication}>
    <h2>{publications[indexArray].title}</h2>
    <p>{publications[indexArray].text}</p>
  </article>
);

Publication.propTypes = {
  publications: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      title: T.string.isRequired,
      text: T.string.isRequired,
    }).isRequired,
  ).isRequired,
  indexArray: T.number.isRequired,
};

export default Publication;
