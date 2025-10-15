import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom"
import SignIn from "./Components/Sign-in/SignIn"
import Chat from "./Components/Chat/Chat"
import SignUp from "./Components/Sign-up/SignUp"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import { FourSquare } from "react-loading-indicators";
function App() {
  const [user, loading] = useAuthState(auth)

  console.log(user);


  return (
    <>
      {loading ?
        <div className="fixed top-[50vh] left-[50vw]">
          <FourSquare color="#A7D7C5" size="medium" text="" textColor="" />
        </div>
        :
        <Routes>

          <Route path="/Sign-in" element={<SignIn />} />
          <Route path="/Sign-up" element={<SignUp />} />
          <Route
            path="/"
            element={user ? <Chat /> : <Navigate to="/sign-up" replace />}
          />
        </Routes>
      }
    </>
  )
}

export default App
