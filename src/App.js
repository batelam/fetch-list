import './App.css';
import records from './records.json';

function App(){
  

  return(
    <div className="App">
    <h3>Fetch</h3>
    <ul>
    {records.map(
      record =>(
        <li>{record.name}  {record.email}</li>  
      )
    )
    }
    </ul>
    </div>
    );
    
}

export default App;