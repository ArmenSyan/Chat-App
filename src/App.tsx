import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom"
import SignIn from "./Components/Sign-in/SignIn"
import Chat from "./Components/Chat/Chat"
import SignUp from "./Components/Sign-up/SignUp"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import { FourSquare } from "react-loading-indicators";
import { ContextProvider } from "./Components/Context/Context";
function App() {
  const [user, loading] = useAuthState(auth)



  return (
    <>
      <ContextProvider>
        {loading ?
          <div className="w-full h-screen flex justify-evenly items-center">
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
      </ContextProvider>
    </>
  )
}

export default App
