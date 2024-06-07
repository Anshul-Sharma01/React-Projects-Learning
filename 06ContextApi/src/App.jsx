import React  from "react";
import Login from './components/Login.jsx';
import Profile from "./components/Profile.jsx";
import UserContextProvider from './context/UserContextProvider.jsx';


function App(){
  return(
    <>
      <UserContextProvider>
        <h1 className="bg-slate-700 text-white text-4xl text-center m-4 p-5">Chai aur React</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App;