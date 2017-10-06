import * as React from 'react';
import './style.css';
import SocialButtons from '../../../../Components/SocialButtons';

interface LoginFormState {
  email: string;
  password: string;
}

class LoginForm extends React.Component<{}, LoginFormState> {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }
  updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: e.target.value
    });
  }
  updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: e.target.value
    });
  }
  loginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // todo
    e.preventDefault();
  }
  render() {
    return (
      <section className="loginForm">
        <p className="loginInfo">Sign in to your account</p>
        <form className="form form-compact" onSubmit={this.loginSubmit}>
          <fieldset className="field-group">
            <label className="form-element email">
              <input
                type="email"
                name="username"
                value={this.state.email}
                className="input icon icon-email"
                placeholder="Email address"
                autoComplete="off"
                onChange={this.updateEmail}
                required={true}
              />
            </label>
            <label className="form-element pass">
              <input
                name="password"
                type="password"
                value={this.state.password}
                className="input icon icon-password"
                placeholder="Password"
                autoComplete="off"
                onChange={this.updatePassword}
                required={true}
              />
            </label>
          </fieldset>
          <button type="submit" className="mainButton">
            <span>Sign In</span>
          </button>
          <div className="actions">
            <a className="action-item create-account" href="/register">Create an account</a>
            <a className="action-item forgot-password" href="/">Forgot password</a>
          </div>
        </form>
        <SocialButtons type="Sign in"/>
      </section>
    );
  }
}

export default LoginForm;