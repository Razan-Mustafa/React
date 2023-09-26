// import './App.css';
// import Navbar from './componant/nav';
// import Footer from './componant/footer';
// import Map from './componant/map';
// import Filter from './componant/filter';
// import Class from './componant/class';
// import {SortingExample1,SortingExample2} from './componant/sort';
// import MyComponent from './componant/test'; 
// import Name from './componant/propes'; 
// import Age from './componant/state'; 
// import Event from './componant/event'; 
// import Login from './componant/ifstate'; 
// import { name as Propes } from './componant/propes';

// function App() {
//   return (
//     <div className="App">
//        <Navbar />
//        <Name name={"Razan"} age={"20"} />
//        <Name name={"Tala"} age={"19"}/>
//        <Age/>
//        <br/>
//        <br/>
//        <br/>
//        <Event/>
//        <br/>
//        <br/>
//        <br/>
//        <Login isLoggedIn={true} userName={"razan"} />
//        <br/>
//        <br/>
//        <br/>
//        <Class name="Username" />
//        {/* <Map />
//       <Filter />
//       <SortingExample1 />
//       <SortingExample2 />
//       <MyComponent />
//        */}
//     </div>
//   );
// }




import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Articale from "./pages/Articale";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Articale />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
