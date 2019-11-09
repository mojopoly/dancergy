import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignInWithGoogle, auth} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      email:'',
      password:''
    }
  }
  handleChange = event => {
    //console.log(event.target);
    const {value, name} = event.target;
    this.setState({[name]:value}) 
  }
  handleSubmit = async event => {
    event.preventDefault();
    const {email, password} = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email:'', password:''});
    } catch(err){
      console.error(err);
    }
  }
  render() {
    return(
      <div className='sign-in'>
        <h2>Already have an account?</h2>
        <span>Sign in with you Email and Password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            type='email' 
            label='email'
            value={this.state.email} 
            handleChange={this.handleChange}
            required />
          <FormInput 
          name='password' 
          type='password' 
          label='password'
          value={this.state.password}
          handleChange={this.handleChange} 
          required /> 
          <div className='buttons'>
            <CustomButton type='submit'>Sign Me In!</CustomButton>
            <CustomButton type='button' onClick={SignInWithGoogle} isGoogleSignIn>Sign in With Google</CustomButton>
          </div>

        </form>
      </div>
    )
  }
}

export default SignIn;