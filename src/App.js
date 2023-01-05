import './App.css';
import { useState } from 'react';
import Header from './plain components/header/header'
import TotalCount from './smart components/totalcount'

function App() {
  const [activeCategory, setActiveCategory] =useState('');
  return (
    <div className="App">
      <Header></Header>
      <main className='p-4 bg-primary-subtle'>
        <TotalCount itemCount="4"></TotalCount>
      </main>
    </div>
  );
}

export default App;
