import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import SignupPage from "./pages/Signup";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import ViewTask from "./pages/ViewTask";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
          <Route path="/view/:id" element={<ViewTask />} />
          <Route path="/layout" element={<Layout />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;