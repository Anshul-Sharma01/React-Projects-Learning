import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'

function App() {
  const [len, setlen] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [ charAllowed, setCharAllowed ] = useState(false);

  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);


  const passwordGenerator  = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed){
      str += '0123456789';
    }
    if(charAllowed){
      str += '!@#$%^&*-_+=[]{}~`';
    }

    for( let i = 1; i < len; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [ len, numAllowed, charAllowed, setPassword ]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password]);


  useEffect(() => {
    passwordGenerator()
  }, [len, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='flex-col gap-2 bg-white contain-none p-9 rounded-2xl flex max-w-2xl mx-auto'>
        <h1 className='text-center text-5xl text-purple-700 font-mono p-3 my-3' >
          Password Generator
        </h1>
        <div className='bg-slate-500 text-center p-10 rounded-2xl '>
          <input
          type="text" 
          value={password}
          className='outline-none py-2 px-3 my-3 w-5/6'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyToClipboard} className='outline-none bg-blue-700 my-3 text-white px-3 py-2 shrink-0 '>copy</button>
          <div className='flex gap-5'>
              <input 
              type="range"
              min={8}
              max={16}
              value={len}
              className='cursor-pointer mx-1'
              onChange={(e) => {
                setlen(e.target.value)
              }}
              />
              <label htmlFor="" className='pr-2'>Length : {len}</label>

              <input 
              type="checkbox"
              className='pl-3'
              defaultChecked={numAllowed}
              onChange={() => {
                setnumAllowed((prev) => !prev)
              }}
              id='num'
              />
              <label htmlFor="num">Numbers</label>

              <input
              type="checkbox"
              className=''
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
              id='char'
              />
              <label htmlFor="char">Characters</label>
          </div>
        </div>
      </div>

    </>
  ) 
}

export default App
