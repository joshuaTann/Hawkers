import './App.css'
import Homepage from './GlobalComponents/Homepage';
import ShowStall from './GlobalComponents/ShowStall';
import NavigationBar from './NavigationBar/NavigationBar';
import About from './NavigationBar/About';
import Login from './NavigationBar/Login';
import SignUp from './NavigationBar/SignUp';
import AddStall from './GlobalComponents/AddStall';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";
import EditStall from './GlobalComponents/EditStall';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Box sx={{ width: "90vw", margin: "auto" }}>
          <Routes>
            <Route path="/hawkers" element={<Homepage/ >}/>
            <Route path="/about" element={<About/ >}/>
            <Route path="/login" element={<Login/ >}/>
            <Route path="/signup" element={<SignUp/ >}/>
            <Route path="/hawkers/:id" element={<ShowStall/ >}/>
            <Route path="/hawkers/:id/edit" element={<EditStall/ >}/>
            <Route path="/hawkers/addstall" element={<AddStall/ >}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  )
}

export default App
