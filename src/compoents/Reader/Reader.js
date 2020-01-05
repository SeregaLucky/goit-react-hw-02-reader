/* import - node_modules */
import React, { Component } from 'react';
import T from 'prop-types';
/* import - CSS */
import styles from './Reader.module.css';
/* import - COMPONENT */
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';

/*
 * COMPONENT
 */
class Reader extends Component {
  static propTypes = {
    publications: T.arrayOf(T.shape().isRequired).isRequired,
  };

  state = {
    indexArray: 0,
  };

  handleChangeIdxIncrement = () => {
    if (this.state.indexArray + 1 >= this.state.allPages) return;

    this.setState(prevState => ({
      indexArray: prevState.indexArray + 1,
    }));
  };

  handleChangeIdxArrayDecrement = () => {
    if (this.state.indexArray <= 0) return;

    this.setState(prevState => ({
      indexArray: prevState.indexArray - 1,
    }));
  };

  render() {
    const { indexArray } = this.state;
    const { publications } = this.props;

    return (
      <div className={styles.reader}>
        <Controls
          onChangeIdxIncrement={this.handleChangeIdxIncrement}
          onChangeIdxDecrement={this.handleChangeIdxArrayDecrement}
          indexArray={indexArray}
          allPages={publications.length}
        />

        <Counter indexArray={indexArray + 1} allPages={publications.length} />

        <Publication pablication={publications[indexArray]} />
      </div>
    );
  }
}

export default Reader;
