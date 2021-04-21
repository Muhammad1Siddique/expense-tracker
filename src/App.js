import React from 'react';
import './App.css';
import Front from './front'
import {TransactionProvider} from './transContext'

function App() {
  return (
    <TransactionProvider>
      <Front />
    </TransactionProvider>
  );
}

export default App;
