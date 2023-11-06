import { useState } from 'react';
import './App.css';
import Cell from './components/cell';
import { cellRange } from './hooks';
function App() {
  const [range, setRange] = useState(0);

  return (
    <div className='h-screen bg-blue-500 flex items-center justify-center flex-col w-full'>
      <input value={range} onChange={e => setRange(e.target.value)}/>
      <div className="flex items-center justify-center flex-row gap-2 mt-2">
        {cellRange(range, 1).map(cell => <Cell cell={cell}/>)}
      </div>
    </div>
  );
}

export default App;
