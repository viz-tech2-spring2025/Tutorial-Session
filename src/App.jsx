import './App.css'
import * as d3 from "d3";
import { useEffect, useState } from 'react';
import { Chart } from './Chart';
import {CustomButton} from './Button';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.csv('/data/forests.csv',  d3.autoType)
      .then((loadedData) => {
        console.log('Data loaded:', loadedData);
        console.log(loadedData[0])
        setData(loadedData);
      })
      .catch((error) => {
        console.error('Error loading data:', error);
      });
  }, []);

  if(data){
    console.log(data[0], "APP data")
  }

  data?console.log(data):console.log("data is null");
  
  return (
    <div>
      <CustomButton/>
     {data?<Chart data={data} />:<div> Loading data... </div>}
    </div>
  );
}

export default App;