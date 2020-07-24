import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ContactPage from '../components/ContactPage';
import Navbar from '../components/Navbar';
import NotFoundPage from '../components/NotFoundPage';
import NewProjectsPage from '../components/NewProjectsPage';
import ProjectsPage from '../components/ProjectsPage';
import ResumePage from '../components/ResumePage';
import WelcomePage from '../components/WelcomePage'

export const history = createBrowserHistory();
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Navbar />
            <Switch>
                <Route 
                    path="/" 
                    render={() => (
                        <WelcomePage />
                    )}
                    exact={true} 
                />
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/newprojects" component={NewProjectsPage} />
                <Route path="/resume" component={ResumePage}/>
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;