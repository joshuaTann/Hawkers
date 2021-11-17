import './App.css'
import Homepage from './GlobalComponents/Homepage';
import ShowStall from './GlobalComponents/ShowStall';
import NavigationBar from './NavigationBar/NavBar';
import About from './NavigationBar/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Box sx={{ width: "90vw", margin: "auto" }}>
          <Routes>
            <Route path="/hawkers" element={<Homepage/ >}/>
            <Route path="/about" element={<About/ >}/>
            <Route path="/hawkers/:id" element={<ShowStall/ >}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  )
}

export default App
