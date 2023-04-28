import React from 'react'
import './Dashboard.css'
import TopNav from '../topNav/topNav'
import LeftNav from '../letfNav/leftNav'
import Workspace from '../workspace/workspace'
const Dashboard = () => {
    return (
        <div className='dashboardContainer'>
            <TopNav />
            <div className='internal'>
                <LeftNav />
                <Workspace />
            </div>
        </div>
    )
}

export default Dashboard;