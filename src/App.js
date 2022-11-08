import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [services, setServices] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setServices(data)})
  },[])
  return (
    <div className="App">
      {
        services.map(service => <div
        key={service._id}
        >Services{service.name}
          <img src={service.img} alt="" />
          <p>{service.about}</p>
        </div>)
      }
    </div>
  );
}

export default App;
