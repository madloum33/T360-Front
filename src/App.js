import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profilepage';
import MainLayout from './pages/MainLayout';
import Chat from './pages/chat/chat';
import Todo from './pages/toDo/toDo';
import Demande from './pages/demande/DemandsPage';
import Calendar from './pages/Calendar/Calendar';

const App = () => {
  return (
    <Router>
      <Routes>
       
        <Route path="/login" element={<Login />} />

        
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/toDo" element={<Todo />} />
                <Route path="/demandes" element={<Demande />} />
                <Route path="/Calendar" element={<Calendar/>} />

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