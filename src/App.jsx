import './App.css';
import Layout from './components/Layout';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null); // Use null for initial state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=Ul7qcNh60Yn9vJFWmiojeHwiODmOIeoycewtpsjp');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <div>
      <Layout data={data}/>
    </div>
  );
}

export default App;
