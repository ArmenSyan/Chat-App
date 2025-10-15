import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom"
import SignIn from "./Components/Sign-in/SignIn"
import Chat from "./Components/Chat/Chat"
import SignUp from "./Components/Sign-up/SignUp"
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from "react";
import { auth } from './firebase';
function App() {
  const [user] = useAuthState(auth)
  console.log(user);
  
  return (
    <>
      <Routes>

        <Route path="/Sign-in" element={<SignIn />} />
        <Route path="/Sign-up" element={<SignUp />} />
        <Route
          path="/"
          element={user ? <Chat /> : <Navigate to="/sign-up" replace />}
        />
      </Routes>
    </>
  )
}

export default App
