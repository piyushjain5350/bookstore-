import React ,{useState}from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Display from './Components/Display';

function App() {
  document.title='Bookstore';
  const [fetchedData,setFetchedData]=useState('');
  
  return (
    <div className="App">
      <header className="App-header w-full h-[10vh]">
      <Navbar setFetchedData={setFetchedData}/>
      </header>
      <main className="App-main  bg-slate-900	 w-full h-[100%] text-white">
        <Display fetchedData={fetchedData} />
      </main> 
    </div>
  );
}

export default App;
