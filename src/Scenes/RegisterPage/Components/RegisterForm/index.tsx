import * as React from 'react';
import './style.css';
import SocialButtons from '../../../../Components/SocialButtons';

interface RegisterFormState {
  email: string;
  password: string;
}

class RegisterForm extends React.Component<{}, RegisterFormState> {
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
      <section className="registerForm">
        <p className="loginInfo">Create your free account today!</p>
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
                placeholder="Create a password"
                autoComplete="off"
                onChange={this.updatePassword}
                required={true}
              />
            </label>
          </fieldset>
          <button type="submit" className="mainButton">
            <span>Create an account</span>
          </button>
          <div className="actions">
            <a className="action-item" href="/login">Already have an account? Sign in</a>
          </div>
        </form>
        <SocialButtons type="Sign in" />
      </section>
    );
  }
}

export default RegisterForm;