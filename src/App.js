import React, { lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer';
import { useDispatch, useSelector } from 'react-redux';
import { authRemainingSelector } from './redux/selector';

const Layout = lazy(() => import('./containers/Layout'));
const Login = lazy(() => import('./pages/AuthPage/Login'));
const CreateAccount = lazy(() => import('./pages/AuthPage/CreateAccount'));
const ForgotPassword = lazy(() => import('./pages/AuthPage/ForgotPassword'));

function App() {
    const user = useSelector(authRemainingSelector);
    const currentUser = user?.login.currentUser;
  console.log(currentUser);

    return (
        <>
            <Router>
                <div className="App">
                    {/* <AccessibleNavigationAnnouncer /> */}
                    <Switch>
                        {currentUser ? <Redirect exact from="/" to="/dashboard" /> :''}
                        <Route exact path="/" component={Login} />
                        {/* <Route path="/login" component={Login} /> */}
                        <Route exact path="/create-account" component={CreateAccount} />
                        <Route exact path="/forgot-password" component={ForgotPassword} />

                        {/* Place new routes over this */}
                        <Route path="/" component={Layout} />
                        {/* If you have an index page, you can remothis Redirect */}
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
