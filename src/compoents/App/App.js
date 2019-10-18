/* import - node_modules */
import React from 'react';
/* import - CSS */
import './App.css';
/* import - DATA */
import publications from '../../data/publications.json';
/* import - COMPONENT */
import Reader from '../Reader/Reader';

/*
 * COMPONENT
 */
const App = () => <Reader publications={publications} />;

export default App;
