import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            
            <div className="drawer drawer-mobile">
                <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  text-center">
                    <label htmlFor="dashboardDrawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                    <Outlet />
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                        <li><Link to='/dashboard/addReview'>Add a Reviews</Link></li>
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default Dashboard;