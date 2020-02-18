import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import { connect } from 'react-redux';
import {FirebaseUser} from './redux/types/FirebaseUser';

interface AppState {
    currentUser: any
}

class App extends React.Component<any, AppState> {
    
    private subscription: any;
    
    componentDidMount(): void {
        this.onGoogleAuthenticationChange();
    }
    
    onGoogleAuthenticationChange = (): void => {
        const { setCurrentUser } = this.props;
        this.subscription = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef =  await createUserProfileDocument(userAuth);
                userRef?.onSnapshot(snapshot => {
                    setCurrentUser({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    });
                });
            } else {
                setCurrentUser(userAuth);
            }
        });
    };
    
    componentWillUnmount(): void {
        this.subscription();
    }
    
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path={'/'} component={HomePage} />
                    <Route path={'/shop'} component={ShopPage} />
                    <Route path={'/signin'} component={SignInUpPage} />
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    setCurrentUser: (user: FirebaseUser) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
