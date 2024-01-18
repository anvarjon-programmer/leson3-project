import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import Admin from "./components/Admin";
import SupperAdmin from "./components/SupperAdmin";
import { Header } from "./components/Header";

function App() {
// fetch

  // try{
  //   fetch("api url", {
  //     method: "POST",
  //     headers: {
  //       "Authorization": "token",
  //       "Content-Text": "aplication/json"
  //     },
  //     body: JSON.stringify({
  //       name: "input valu",
  //       password: "inp value",
  //       img: "image"
  //     })
  //   }).then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(err => {
  //     console.log(err.message)
  //   })
  // }catch(err){
  //   console.log(err)
  // }

  //axios 

  // try{
  //   async function rederData () {
  //     const response = await axios.post("", {
  //       img: "sdhd",
  //       name: "inp name",
  //       headers: {
  //         ""
  //       }
  //     })
  //     const data = await response.json()
  //     console.log(data)
  //   }
  //   rederData()
  // }catch(err){
  //   console.log(err)
  // }


  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header/>}/>
            <Route path="auth" element={<Auth/>}/>
            <Route path="admin" element={<Admin/>}/>
            <Route path="supper_admin" element={<SupperAdmin/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
