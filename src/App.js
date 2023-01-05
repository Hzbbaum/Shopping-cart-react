import './App.css';
import Header from './plain components/header/header'
import TotalCount from './smart components/totalcount'

function App() {
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
