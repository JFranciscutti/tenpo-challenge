import { AuthProvider } from "./contexts/AuthContext";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import GuestGuard from "./features/auth/GuestGuard";
import AuthGuard from "./features/auth/AuthGuard";
import LoginPage from "./features/auth/login/LoginPage";
import HomePage from "./features/home/HomePage";
import Page404 from "./components/Page404";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route
            path="/login"
            element={
              <GuestGuard>
                <LoginPage />
              </GuestGuard>
            }
          />
          <Route
            path="/home"
            element={
              <AuthGuard>
                <HomePage />
              </AuthGuard>
            }
          />
          <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
