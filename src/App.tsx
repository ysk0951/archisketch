import React,  {useState} from 'react';
import { Headers } from './@components/headers';
import { Gallery } from './@components/gallery';

const App = () => {
  const [size, setSize] = useState<number>(0)
  const getSize = (size : number ) =>{
    setSize(size)
  }
  return (
    <div className='App'>
        <Headers></Headers>
        <Gallery getSize={ (size : number) => getSize(size) }></Gallery>
    </div>
  );
};

export default App;