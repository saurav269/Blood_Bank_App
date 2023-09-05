import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoutes from "./components/Routes/PublicRoutes";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={
          <PublicRoutes>
             <Login />
          </PublicRoutes>
        } />
        <Route path="/register" element={
          <PublicRoutes>
            <Register />
          </PublicRoutes>
        } />
      </Routes>
    </div>
  );
}

export default App;
