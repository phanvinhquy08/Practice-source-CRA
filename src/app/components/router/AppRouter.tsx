import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Switch>

                </Switch>
            </React.Suspense>
        </Router>
    );
}

export default AppRouter;