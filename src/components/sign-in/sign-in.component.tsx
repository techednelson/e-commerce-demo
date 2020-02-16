import React from 'react';
import './sign-in.component.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-buttom/custom-buttom.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

interface SignInState {
    email: string;
    password: string;
}

interface SignInProps {
    // title: string,
    // imageUrl: string,
    // id: number,
    // linkUrl: string
}

export default class SignIn extends React.Component<SignInProps, any> {
    constructor(props: SignInProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }
    
    handleSubmit = (event: any): void => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    };
    
    handleChange = (event: any): void => {
        event.preventDefault();
        const { value, name } = event.target;
        console.log(value, name);
        this.setState({ [name]:  value });
    };
    
    render() {
        return (
           <div className="sign-in">
               <h2>I already have an account</h2>
               <span>Sign in with your email and password</span>
               
               <form onSubmit={this.handleSubmit}>
                   <FormInput name="email"
                              type="email"
                              label = "email"
                              onChange={this.handleChange}
                              value={this.state.email}
                              required />
                   <FormInput name="password"
                              type="password"
                              label = "password"
                              value={this.state.password}
                              onChange={this.handleChange}
                              required />
                  <div className="buttons">
                      <CustomButton type="submit" value="Submit Form">Sign in</CustomButton>
                      <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                          {' '}
                          Sign in with Google{' '}
                      </CustomButton>
                  </div>
               </form>
           </div>
        )
    }
};

