import React, { useState , useEffect} from 'react';

const Hooks = () => {
    const [message, setMessage] = useState('Hello dear one ,learning React.....?');
 useEffect(() => {
      console.log('use effect hook called');
 setTimeout(() => {
        setMessage("Great,This is  Time to learn about HOOKS.");
      }, 2000)
    })
    return <h1>{message}</h1>
  };
export default Hooks;