import React, { useState } from 'react';
import TopNavbar from './components/TopNavbar';
import './main.css';
import HomePage from './components/HomePage'; // Import your page components
import ConcoursPage from './components/ContestPage';
import JoindrePiece from './components/joindrePiece';
import CandidatesPage from './components/CandidatesPage';
import ResultatsPage from './components/ResultatsPage';
import SettingsPage from './components/SettingsPage';
import LogoutPage from './components/LogoutPage';

const Main = () => {
    const [selectedContent, setSelectedContent] = useState('home'); // State for the selected content

    const handleNavigation = (content) => {
        setSelectedContent(content);
    };

    // Function to render the selected page component
    const renderContent = () => {
        switch (selectedContent) {
            case 'home':
                return <HomePage />;
            case 'concours':
                return <ConcoursPage />;
            case 'JoindrePiece':
                return <JoindrePiece />;

            case 'candidates':
                return <CandidatesPage />;
            case 'resultats':
                return <ResultatsPage />;
            case 'settings':
                return <SettingsPage />;
            case 'logout':
                return <LogoutPage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="main-container">
            <TopNavbar onNavigate={handleNavigation} />
            <div className="content-area">
                {renderContent()}
            </div>
        </div>
    );
};

export default Main;
