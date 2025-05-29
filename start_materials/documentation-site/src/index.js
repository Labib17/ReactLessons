import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';
import Welcome from './Pages/Welcome/Welcome';
import './global.css';
import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
import StateHook from './Pages/StateHookPage/StateHook';
import Community from './Pages/Community/Community';
import Resourses from './Pages/Resources/Resources';
import About from './Pages/About/About';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Users from './Pages/Users/Users';
import User from './components/User';

const Root = () => {
    return (
        <div className='container'>
            <Header />
            <Sidebar />
            <Outlet />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
    }}>
        <Routes>
            <Route path='/' element={<Root />}>
                <Route index element={<Welcome />} />
                <Route path='/statehooks' element={<StateHook />} />
                <Route path='/community' element={<Community />} />
                <Route path='/resources' element={<Resourses />} />
                <Route path='/about' element={<About />} />
                <Route path='/users' element={<Users />} />
                <Route path='/users/:id' element={<User />} />
                <Route path='/not-found' element= {<ErrorPage />}/>
                <Route path='*' element={<ErrorPage />} />
            </Route>
        </Routes>
    </BrowserRouter>

);

