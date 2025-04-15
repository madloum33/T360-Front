import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profilepage';
import MainLayout from './pages/MainLayout';
import Chat from './pages/chat/chat';
import Todo from './pages/toDo/toDo';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Page de connexion sans layout */}
        <Route path="/login" element={<Login />} />

        {/* Pages avec le layout */}
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/toDo" element={<Todo />} />
                

                {/* Route par défaut */}
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;