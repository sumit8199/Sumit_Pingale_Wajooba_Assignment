import CreateUser from "./Components/CreateUser";
import Login from "./Components/Login";
import UpdateDetail from "./Components/UpdateDetail";
import UserTable from "./Components/UserTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/users" element={<UserTable />}> </Route>
          <Route path="/create" element={<CreateUser/>}></Route>
          <Route path="/update" element={<UpdateDetail/>}></Route>
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
