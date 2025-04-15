import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Pages/login';
import ProfilePage from './Pages/Profilepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;