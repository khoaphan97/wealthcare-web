import React, { useEffect } from 'react';
import { Routes, Route, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './containers/Navbar';
import './App.scss';
import Dashboard from './containers/Dashboard';
import apiController from './api';
import PieChart from './components/PieChart';
import Summary from './containers/Dashboard/Summary';
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === "/" || location.pathname === "/dashboard") {
            navigate("/dashboard/summary");
        }
        const getDashboardData = async () => {
            const data = await apiController.getDashboardData();
            console.log(data);
        }
        getDashboardData();
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
                        <Route path="summary" element={<Summary />} />
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
