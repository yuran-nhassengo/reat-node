import { useEffect, useState } from "react"
import axios from 'axios'

function App() {

  const [data,setData] = useState([]);

  useEffect(() =>{
    const fecthData = async () => {
      const result = await axios('http://localhost:8080/api/data');
      setData(result.data)
       };

       fecthData();
  },[]);

  return (
    <div className="App">
        <h1>Dados do Servidor</h1>
        <ul>
          {data.map((item,index) =>(
            <li key={index}>{item}</li>
          ))}
        </ul>

    </div>
  )
}

export default App
