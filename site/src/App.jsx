// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import EventList from "./components/EventList";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>        
      </div> */}
      <Header></Header>
      <Content></Content>
      <EventList></EventList>
      <Footer></Footer>
    </>
  );
}

export default App;
