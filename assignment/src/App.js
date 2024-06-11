
import './App.css';
import { Sign_in } from './components/Sign_in';
import { Sign_up } from './components/Sign_up';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sign_in />}></Route>
        <Route path='/Sign_up' element={<Sign_up />}></Route>
      </Routes>
    </BrowserRouter>
    
    {/* <Sign_up /> */}

    </>
  );
}

export default App;
