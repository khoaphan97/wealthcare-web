import React, { useEffect } from 'react';
import { Routes, Route, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './containers/Navbar';
import './App.scss';
import Dashboard from './containers/Dashboard';

function App() {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(location.pathname === "/" || location.pathname === "/dashboard") {
            navigate("/dashboard/summary");
        }
    }, [location]);

    return (
        <div className='wtc-app'>
            <Routes>
                <Route path="/"
                    element={
                        <>
                            <Navbar />
                            <Outlet />
                        </>
                    }
                >
                    <Route path="dashboard" element={<Dashboard />}>
                        <Route path="summary" element={<div>Summary</div>} />
                        <Route path="budget-management" element={<div>Budget management</div>} />
                        <Route path="expense-records" element={<div>Expense records</div>} />
                    </Route>
                    <Route path="accounts" element={<div>Accounts</div>} />
                    <Route path="histories" element={<div>Histories</div>} />
                    <Route path="yearly-plan" element={<div>Yearly plan</div>} />
                </Route>
                <Route path='login' element={<div>Login too the moooonnn</div>} />
            </Routes>
        </div>
    )
}

export default App;
