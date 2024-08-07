import { useCallback, useEffect, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [symbolAllowed, setSymbolSetAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (symbolAllowed) str += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, symbolAllowed, setPassword])
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, symbolAllowed, passwordGenerator])
  return (
    <>
      <h1 className='text-4xl'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black
      bg-green-300 py-3'>
        <div className='flex shadow rounded-lg overflow-hidden py-10 mb-5'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder='password' readOnly />
          <button className='outline-none bg-blue-300 text-black
             px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultValue={numAllowed} // h
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultValue={symbolAllowed}
              onChange={() => {
                setSymbolSetAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characets</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
