import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import Loader from "../components/Loader";
import { AuthState, resetState, sendMockRequest } from "../redux/modules/auth";
import { RequestStatus } from "../redux/modules/helpers/types";
import { isEmpty, validEmail, validPhoneNumber } from "../utils/validate";

function isPhoneNumberLikelihood(value: string) {
  return /^\+?[0-9]*$/.test(value) ? 1 : 0;
}

interface SignInPropTypes {
  auth: AuthState;
  sendMockRequest: typeof sendMockRequest;
  resetState: typeof resetState;
}

function SignIn({ auth, sendMockRequest, resetState }: SignInPropTypes) {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const [emailOrPhoneError, setEmailOrPhoneError] = useState<string | null>(
    null
  );
  const [passwordError, setPasswordError] = useState<string | null>(null);

  useEffect(() => {
    resetState(); // Reset auth state on component mount
  }, []);

  function runPasswordValidations() {
    if (isEmpty(password)) {
      setPasswordError("Invalid password");
      return false;
    } else {
      setPasswordError(null);
      return true;
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

  useEffect(() => {
    if (isEmpty(password)) {
      setPasswordError(null);
    } else {
      runPasswordValidations();
    }
  }, [password]);

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
      sendMockRequest();
    }
  }

  const isInvalidForm = !!emailOrPhoneError && !!passwordError;
  const isLoading = auth.status === RequestStatus.LOADING;

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
              disabled={isLoading}
            />
          </dd>
          <dd aria-live="assertive" className="error">
            {emailOrPhoneError}
          </dd>
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
              disabled={isLoading}
            />
          </dd>
          <dd aria-live="assertive" className="error">
            {passwordError}
          </dd>
        </dl>
        {auth.error ? (
          <p className="center text-danger">{auth.error?.message}</p>
        ) : (
          ""
        )}
        {isLoading ? (
          <div className="center">
            <Loader />{" "}
          </div>
        ) : (
          ""
        )}
        {auth.status === RequestStatus.SUCCEEDED ? (
          <p aria-live="assertive" className="center">
            Your submission has been sent.
          </p>
        ) : (
          ""
        )}
        <div className="container fluid transparent no-border no-padding">
          <div className="f-50">
            <div className="m-b-2">
              <Link className="primary" to="/password-reset">
                Forgot Password?
              </Link>
            </div>
            <div>
              <Link className="primary" to="/join">
                Create an account
              </Link>
            </div>
          </div>
          <div className="f-50">
            <button
              type="submit"
              disabled={isInvalidForm || isLoading}
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

// @ts-ignore
export default connect(({ auth }) => ({ auth }), {
  sendMockRequest,
  resetState,
  // @ts-ignore
})(SignIn);
