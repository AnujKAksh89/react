import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route
// } from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light')
    const [alert, setAlert] = useState(null)

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 2500);
    }

    const toggleMode = () => {
        if(mode === 'light'){
            setMode('dark')
            document.body.style.backgroundColor = 'darkslategray';
            showAlert("Dark mode is enabled!", "success")
        }else{
            setMode('light')
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode is enabled!", "success")
        }
    }

    return (
        <div className="App">
            {/*<Router>*/}
                <Navbar mode={mode} toggleMode = {toggleMode} />
                <Alert alert={alert}/>
                <div className='container my-3'>
                    <TextForm showAlert = {showAlert} heading="Enter text here to analyze" mode={mode} />
                    {/*<Routes>
                        <Route path="/" element={<TextForm showAlert = {showAlert} heading="Enter text here to analyze" mode={mode} />} />
                        <Route path="/about" element={<About  mode={mode} />} />
                    <Routes>*/}
                </div>
            {/*</Router>*/}
        </div>
    );
}

export default App;
