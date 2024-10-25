import React from 'react';
import ContestPage from './ContestPage';
const Content = ({ content }) => {
    return (
        <div className="content">
            {content === 'home' && <div>Home Content</div>}
            {content === 'concours' && <ContestPage />}
            {content === 'candidates' && <div>Candidates Content</div>}
            {content === 'resultats' && <div>Resultats Content</div>}
            {content === 'settings' && <div>Settings Content</div>}
            {content === 'logout' && <div>Logout Content</div>}
        </div>
    );
};

export default Content;
