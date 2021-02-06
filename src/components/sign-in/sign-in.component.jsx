import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustonButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils.js';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''

        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have and account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type='email'
                        value={this.state.email}
                        label='email'
                        handleChange={this.handleChange}
                        required />
                    

                    <FormInput
                        name="password"
                        type='password'
                        value={this.state.email}
                        label='password'
                        handleChange={this.handleChange} required />
                    <div className='buttons'>
                    <CustonButton type='submit' value='submit form'>SIGN IN</CustonButton>
                    <CustonButton onClick={signInWithGoogle} isGoogleSignIn>
                    SIGN IN WITH GOOGLE</CustonButton>
                    </div>
                    
                    
                </form>
            </div>
        )
    }

}
export default SignIn;
