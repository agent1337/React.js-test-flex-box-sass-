import './App.scss';
import { Content } from './components/content/Content';
import { Header } from './components/header/Header';
import { Navbar } from './components/header/navbar/Navbar';

function App() {


  return (
    <div className="app">
      <Navbar/>

        <div className="menu-and-content">
          <Header/>
          <Content/>
        </div>
    </div>
  );
}

export default App;
