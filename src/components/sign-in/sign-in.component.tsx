import React from "react";

import "./sign-in.styles.scss";
import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../cutom-button/custom-button.component";

interface SignInProps {}

interface SignInState {
  email: string;
  password: string;
}

export class SignIn extends React.Component<SignInProps, SignInState> {
  constructor(props: SignInProps) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { value, name } = event.currentTarget;

    this.setState({ [name]: value } as Pick<SignInState, keyof SignInState>);
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="email"
            name="email"
            value={email}
            required
            label="Email"
          />

          <FormInput
            handleChange={this.handleChange}
            type="password"
            name="password"
            value={password}
            required
            label="Password"
          />
          <CustomButton type="submit">Sign in</CustomButton>
        </form>
      </div>
    );
  }
}
