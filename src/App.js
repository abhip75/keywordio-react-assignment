
import './App.css';
import Dashboard from './components/Dashboard';
import MyNav from './components/MyNav';
import CreateAds from "./components/CreateAds";
import {Routes,Route} from "react-router-dom";
import FillData from './components/FillData';
import FillDataMedia from './components/FillDataMedia';

function App() {
  return (
    <div className="App">
      <MyNav/>
      <main>
          <Routes>
            <Route exact path="/" element={<Dashboard/>} />
            <Route path="/createads/" element={<CreateAds/>} />
            <Route path="/filldata" element={<FillData/>}/>
            <Route path="/filldatamedia" element={<FillDataMedia/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
