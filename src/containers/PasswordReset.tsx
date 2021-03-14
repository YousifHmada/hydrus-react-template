/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AuthCard from "../components/AuthCard";
import Loader from "../components/Loader";
import { AuthState, resetState, sendMockRequest } from "../redux/modules/auth";
import { RequestStatus } from "../redux/modules/helpers/types";
import { isEmpty, validEmail, validPhoneNumber } from "../utils/validate";

function isPhoneNumberLikelihood(value: string) {
  return /^\+?[0-9]*$/.test(value) ? 1 : 0;
}

interface PasswordResetPropTypes {
  auth: AuthState;
  sendMockRequest: typeof sendMockRequest;
  resetState: typeof resetState;
}

function PasswordReset({
  auth,
  sendMockRequest,
  resetState,
}: PasswordResetPropTypes) {
  const [emailOrPhone, setEmailOrPhone] = useState("");

  const [emailOrPhoneError, setEmailOrPhoneError] = useState<string | null>(
    null
  );

  useEffect(() => {
    resetState(); // Reset auth state on component mount
  }, []);

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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const valid = runEmailOrPhoneValidations();
    if (valid) {
      sendMockRequest();
    }
  }

  const isInvalidForm = !!emailOrPhoneError;
  const isLoading = auth.status === RequestStatus.LOADING;

  return (
    <AuthCard>
      <p className="m-t-3 h4-size">Forgot password</p>
      <form noValidate onSubmit={handleSubmit}>
        <dl className="form-group m-t-1 m-b-2">
          <dt className="m-b-1">
            <label htmlFor="password-reset-email-input">
              Enter your user account's verified email address or phone and we
              will send you a password reset link.
            </label>
          </dt>
          <dd>
            <input
              id="password-reset-email-input"
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
          <p className="center">Your submission has been sent.</p>
        ) : (
          ""
        )}
        <button
          type="submit"
          disabled={isInvalidForm || isLoading}
          className="primary block"
        >
          Send
        </button>
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
  PasswordReset
);
