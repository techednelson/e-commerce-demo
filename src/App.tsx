import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './header/header.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import { auth } from './firebase/firebase.utils';
import firebase from './firebase/firebase.utils';

interface AppState {
    currentUser: any
}

class App extends React.Component<any, AppState> {
    
    private subscription: any;
    
    constructor(props: any) {
        super(props);
        this.state = {
            currentUser: null
        };
        this.subscription = null;
    }
    
    componentDidMount(): void {
        this.subscription = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user })
        });
    }
    
    componentWillUnmount(): void {
        this.subscription();
    }
    
    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path={'/'} component={HomePage} />
                    <Route path={'/shop'} component={ShopPage} />
                    <Route path={'/signin'} component={SignInUpPage} />
                </Switch>
            </div>
        );
    }
};

export default App;
