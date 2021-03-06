import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import { client } from "./util/apolloClient";
import { AuthProvider } from "./util/auth";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Reservations from "./pages/Reservations";
import Search from "./pages/Search";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
    <ApolloProvider client={client}>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Reservations" element={<Reservations />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/search" element={<Search />} />
            {/* Use <RequiredAuth> for pages that should only be accessible to a
            user that has logged in.*/}
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <Favorites />
                  <Reservations />
                </RequireAuth>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </ApolloProvider>
    </div>
  );
}

export default App;
