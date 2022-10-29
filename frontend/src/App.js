
import './App.css';
import Header from './components/header'
import MainPage from './components/mainPage'
import Current from "./components/currentCampaigns"
//import Reg from "./components/RegApp"
function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Reg/> */}
      <MainPage/>
      <Current/>
    </div>
  );
}

export default App;
