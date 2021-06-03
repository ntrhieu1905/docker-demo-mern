import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [txt, setTxt] = useState('undefined');
  axios.get(`${process.env.REACT_APP_END_POINT}/v1/images`)
  .then((res) => {
    console.log(res)
    setTxt(res.data);
  })
  .catch((err) => {
    console.log(err)
  })
  return (
    <div className="App p-6 items-center justify-center">
      <h1 className="text-blue-400 font-extrabold">Hello World!</h1>
      <p className="tracking-widest">React with Tailwindcss!</p>
      <p>{`API: ${process.env.REACT_APP_END_POINT}`}</p>
      <span>Response GET api images: </span>
      <p className="text-red-400">{ txt }</p>
    </div>
  );
}

export default App;
