import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const [userLevel, setUserLevel] = useState(1);
    const [totalPoints, setTotalPoints] = useState(0);
    const [completedTasks, setCompletedTasks] = useState(0);
    const [stats, setStats] = useState({ tasksCompleted: 0, tasksSkipped: 0, totalPoints: 0, currentStreak: 0 });

    useEffect(() => {
        // Fetch user data from API
        // fetchUserStats();
    }, []);

    return (
        <div className="dashboard">
            <h1>Welcome to AntiBurnout Dashboard</h1>
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Current Level</h3>
                    <p className="stat-value">{userLevel}</p>
                    <p className="stat-label">of 10 levels</p>
                </div>
                <div className="stat-card">
                    <h3>Total Points</h3>
                    <p className="stat-value">{totalPoints}</p>
                    <p className="stat-label">points earned</p>
                </div>
                <div className="stat-card">
                    <h3>Tasks Completed</h3>
                    <p className="stat-value">{stats.tasksCompleted}</p>
                    <p className="stat-label">this month</p>
                </div>
                <div className="stat-card">
                    <h3>Current Streak</h3>
                    <p className="stat-value">{stats.currentStreak}</p>
                    <p className="stat-label">days</p>
                </div>
            </div>
            <div className="progress-section">
                <h2>Level Progress</h2>
                <div className="progress-bar">
                    <div className="progress-fill" style={{width: `${(userLevel / 10) * 100}%`}}></div>
                </div>
                <p>Level {userLevel} - {100 - (userLevel / 10) * 100}% remaining</p>
            </div>
            <div className="actions">
                <a href="/tasks" className="btn btn-primary">View Today's Tasks</a>
                <a href="/reflection" className="btn btn-secondary">Add Reflection</a>
            </div>
        </div>
    );
};

export default Dashboard;