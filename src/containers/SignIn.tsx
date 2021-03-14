import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import { isEmpty, validEmail, validPhoneNumber } from "../utils/validate";

function isPhoneNumberLikelihood(value: string) {
  return /^\+?[0-9]*$/.test(value) ? 1 : 0;
}

function SignIn() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const [emailOrPhoneError, setEmailOrPhoneError] = useState<string | null>(
    null
  );
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const isInvalidForm = !!emailOrPhoneError && !!passwordError;

  function runPasswordValidations() {
    if (isEmpty(password)) {
      setPasswordError("Invalid password");
      return true;
    } else {
      setPasswordError(null);
      return false;
    }
  }

  function runEmailOrPhoneValidations() {
    const emailValidationError = validEmail(emailOrPhone);
    const phoneValidationError = validPhoneNumber(emailOrPhone);
    if (!emailValidationError || !phoneValidationError) {
      setEmailOrPhoneError(null);
      return true;
    } else if (
      isPhoneNumberLikelihood(emailOrPhone) === 1 &&
      phoneValidationError
    ) {
      setEmailOrPhoneError(phoneValidationError);
      return false;
    } else {
      setEmailOrPhoneError(emailValidationError);
      return false;
    }
  }

  useEffect(() => {
    if (isEmpty(emailOrPhone)) {
      setEmailOrPhoneError(null);
    } else {
      runEmailOrPhoneValidations();
    }
  }, [emailOrPhone]);

  function handleEmailOrPhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setEmailOrPhone(value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setPassword(value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const valid = [
      runEmailOrPhoneValidations(),
      runPasswordValidations(),
    ].reduce((agg, cur) => agg && cur, true);
    if (valid) {
      console.log(emailOrPhone, password);
    }
  }

  return (
    <AuthCard>
      <p className="m-t-3 h4-size">Sign in</p>
      <form noValidate onSubmit={handleSubmit}>
        <dl className="form-group m-t-1 m-b-2">
          <dd>
            <input
              className={`block ${
                emailOrPhoneError
                  ? "invalid"
                  : !isEmpty(emailOrPhone)
                  ? "valid"
                  : ""
              }`}
              type="text"
              placeholder="Email or Phone"
              spellCheck="false"
              autoCapitalize="off"
              onChange={handleEmailOrPhoneChange}
              required
            />
          </dd>
          <dd className="error">{emailOrPhoneError}</dd>
        </dl>
        <dl className="form-group m-b-2">
          <dd>
            <input
              className={`block ${
                passwordError ? "invalid" : !isEmpty(password) ? "valid" : ""
              }`}
              type="password"
              onChange={handlePasswordChange}
              placeholder="Password"
            />
          </dd>
          <dd className="error">{passwordError}</dd>
        </dl>
        <div className="container fluid transparent no-border no-padding">
          <div className="f-50">
            <div className="m-b-2">
              <Link className="primary" to="/forgot-password">
                Forgot Password?
              </Link>
            </div>
            <div>
              <Link className="primary" to="/create-account">
                Create an account
              </Link>
            </div>
          </div>
          <div className="f-50">
            <button
              type="submit"
              disabled={isInvalidForm}
              className="primary float-right"
            >
              Sign in
            </button>
          </div>
        </div>
      </form>
    </AuthCard>
  );
}

export default SignIn;
