import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
            }
            setCurrentUser(userAuth);
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
                    <Route exact path={'/signin'} render={() =>
                        this.props.currentUser ?
                            (<Redirect to={'/'}/>) :
                            (<SignInUpPage/>) } />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ user }: { user: FirebaseUser }) => ({
   currentUser:  user.currentUser
});

const mapDispatchToProps = (dispatch: Function) => ({
    setCurrentUser: (user: FirebaseUser) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
