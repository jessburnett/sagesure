import './App.css';
import { useSelector } from 'react-redux';

function App() {
        //access data in store
        const state = useSelector((state) => state);
        console.log(state);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
