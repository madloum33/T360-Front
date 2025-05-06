import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profilepage';
import MainLayout from './pages/MainLayout';
import Chat from './pages/chat/chat';
import Todo from './pages/toDo/toDo';
import Demande from './pages/demande/DemandsPage';
import Etudes from './pages/Etudes/etudes'
import Calendar from './pages/Calendar/Calendar';
import LesEnqueteurs from './pages/Enqueteur/EnqueteurPage';
import Materials from './pages/materials/materials';
import Clients from './pages/clients/clients'
import { ThemeProvider } from './contexts/ThemeContext'; 

const App = () => {
  return (
    <ThemeProvider>
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
                  <Route path="/etudes" element={<Etudes />} />
                  <Route path="/calendar" element={<Calendar/>} />
                  <Route path="/enqueteurs" element={<LesEnqueteurs/>} />
                  <Route path="/materials" element={<Materials/>} />
                  <Route path="/clients" element={<Clients/>} />
                  <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
              </MainLayout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;