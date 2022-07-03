import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProvider from "./components/context/userContext";
import Navbar from "./components/navBar/Navbar";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import ShopPage from "./pages/ShopPage";
import SignupPage from "./pages/SignupPage";

function App() {

  return (
    <BrowserRouter>

      <Navbar/>

      <UserProvider>
      
        <Routes>

          <Route path="/" element= { <ShopPage/> }/>
          <Route path="/product/:id" element= { <DetailPage/> }/>
          <Route path="/login" element= { <LoginPage/> }/>
          <Route path="/signup" element= { <SignupPage/> }/>

        </Routes>

      </UserProvider>

    </BrowserRouter>
  );

}

export default App;
