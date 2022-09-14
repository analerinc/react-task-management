import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import TasksPage from './pages/TasksPage';
import NewTaskPage from './pages/NewTaskPage';
import NewCategoryPage from './pages/NewCategoryPage';
import NoCategorySelectedPage from './pages/NoCategorySelectedPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={'/home'} />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/home' element={<HomePage />}>
          <Route path='tasks/:categoryId' element={<TasksPage />} />
          <Route path='new-task/:categoryId' element={<NewTaskPage />} />
          <Route path='new-category' element={<NewCategoryPage />} />
          <Route index element={<NoCategorySelectedPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
