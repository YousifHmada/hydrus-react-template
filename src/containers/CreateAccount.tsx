/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AuthCard from "../components/AuthCard";
import Loader from "../components/Loader";
import { AuthState, resetState, sendMockRequest } from "../redux/modules/auth";
import { RequestStatus } from "../redux/modules/helpers/types";
import {
  isEmpty,
  validEmail,
  validPassword,
  validPhoneNumber,
} from "../utils/validate";

function isPhoneNumberLikelihood(value: string) {
  return /^\+?[0-9]*$/.test(value) ? 1 : 0;
}

interface CreateAccountPropTypes {
  auth: AuthState;
  sendMockRequest: typeof sendMockRequest;
  resetState: typeof resetState;
}

function CreateAccount({
  auth,
  sendMockRequest,
  resetState,
}: CreateAccountPropTypes) {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailPreferences, setEmailPreferences] = useState(false);

  const [emailOrPhoneError, setEmailOrPhoneError] = useState<string | null>(
    null
  );
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null
  >(null);

  useEffect(() => {
    resetState(); // Reset auth state on component mount
  }, []);

  function runConfirmPasswordValidations() {
    if (confirmPassword !== password || isEmpty(confirmPassword)) {
      setConfirmPasswordError("Those passwords didn’t match. Try again.");
      return false;
    } else {
      setConfirmPasswordError(null);
      return true;
    }
  }

  function runPasswordValidations() {
    const passwordValidationError = validPassword(password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
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

  useEffect(() => {
    if (isEmpty(confirmPassword)) {
      setConfirmPasswordError(null);
    } else {
      runConfirmPasswordValidations();
    }
  }, [confirmPassword]);

  function handleEmailOrPhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setEmailOrPhone(value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setPassword(value);
  }

  function handleConfirmPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setConfirmPassword(value);
  }

  function handleEmailPreferencesChange() {
    setEmailPreferences(!emailPreferences);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const valid = [
      runEmailOrPhoneValidations(),
      runPasswordValidations(),
      runConfirmPasswordValidations(),
    ].reduce((agg, cur) => agg && cur, true);
    if (valid) {
      sendMockRequest();
    }
  }

  const isInvalidForm = !!emailOrPhoneError && !!passwordError;
  const isLoading = auth.status === RequestStatus.LOADING;

  return (
    <AuthCard>
      <p className="m-t-3 h4-size">
        Create your <strong>KidsLoop Account.</strong>
      </p>
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
        <dl className="form-group m-b-2">
          <dd>
            <input
              className={`block ${
                confirmPasswordError
                  ? "invalid"
                  : !isEmpty(confirmPassword)
                  ? "valid"
                  : ""
              }`}
              type="password"
              onChange={handleConfirmPasswordChange}
              placeholder="Confirm Password"
              disabled={isLoading}
            />
          </dd>
          <dd aria-live="assertive" className="error">
            {confirmPasswordError}
          </dd>
        </dl>
        <dl className="form-group-inline m-b-2">
          <dd>
            <input
              id="create-account-email-preferences"
              type="checkbox"
              onChange={handleEmailPreferencesChange}
              disabled={isLoading}
            />
          </dd>
          <dt className="m-b-1">
            <label htmlFor="create-account-email-preferences">
              I accept to the Kidsloop Privacy Policy
            </label>
          </dt>
        </dl>
        {auth.error ? (
          <p aria-live="assertive" className="center text-danger">
            {auth.error?.message}
          </p>
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
        <button
          type="submit"
          disabled={isInvalidForm || isLoading}
          className="primary block"
        >
          Create accout
        </button>
        <p className="m-t-1">
          By creating an account, you agree to the
          <a
            className="primary"
            href="https://www.kidsloop.net/policies/terms/"
          >
            Terms of Service
          </a>
          . For more information about Kidsloop's privacy practices, see the
          <a
            className="primary"
            href="https://www.kidsloop.net/policies/privacy-notice/"
          >
            Kidsloop Privacy Statement
          </a>
          . We'll occasionally send you account-related emails.
        </p>
      </form>
    </AuthCard>
  );
}

// @ts-ignore
export default connect(({ auth }) => ({ auth }), {
  sendMockRequest,
  resetState,
})(
  // @ts-ignore
  CreateAccount
);
