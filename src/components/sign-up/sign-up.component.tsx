import React from 'react';
import './sign-up.component.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-buttom/custom-buttom.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

interface SignUpState {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
    any: any
}

const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

export default class SignUp extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = initialState;
    }
    
    handleSubmit = async (event: any): Promise<void> => {
      event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert('password do not match');
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            if (user) {
                const userRef = await createUserProfileDocument(user, { displayName })
                this.setState(initialState);
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    
    handleChange = (event: any) => {
        event.preventDefault();
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };
    
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type='text'
                               onChange={this.handleChange}
                               name='displayName'
                               value={displayName}
                               label='Display Name'
                               required/>
                    <FormInput type='email'
                               onChange={this.handleChange}
                               name='email'
                               value={email}
                               label='Email'
                               required/>
                    <FormInput type='password'
                               onChange={this.handleChange}
                               name='password'
                               value={password}
                               label='Password'
                               required/>
                    <FormInput type='password'
                               onChange={this.handleChange}
                               name='confirmPassword'
                               value={confirmPassword}
                               label='Confirm Password'
                               required/>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
    
}
