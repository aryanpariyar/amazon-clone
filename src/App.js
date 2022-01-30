import { BrowserRouter, Routes,  Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { useStateValue } from "./Components/StateProvider";
import { useEffect } from "react";
import { auth } from '../src/Components/firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();

  // useEffect hoook >>>>> Powerful tool in react
  // piece of code which runs based on given conditions

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged In .....
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out ...........
        dispatch({
          type: "SET_USER",
          user: null,
        });
        return () => {
          unsubscribe();
        }
      }
    })
  }, []);

  console.log("USER IS >>>" + user);
  return (
    
    <div className="App">
      <BrowserRouter>
     <Routes>
          <Route path="/" element={
            <div>
              <Navbar />
              <Home/>
            </div>
       } />
      <Route path="/login" element={<Login/>} />
          <Route path="/checkout" element={
            <div>
              <Navbar />
              <Checkout />
            </div>
          } />
    </Routes>
       </BrowserRouter>
    </div>
  );
}
 
export default App;
