export const isEmpty = (value: any) =>
  value === undefined || value === null || value === "";

export function validEmail(value: string): string | void {
  // Let's not start a debate on email regex. This is just for an example app!
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return "Invalid email address";
  }
}

export function validFirstName(value: string): string | void {
  if (!/^[a-zA-Z].*$/i.test(value)) {
    return "First name should start with an alphabetical character";
  }
}

export function validLastName(value: string): string | void {
  if (!/^[a-zA-Z].*$/i.test(value)) {
    return "Last name should start with an alphabetical character";
  }
}

export function validPassword(value: string): string | void {
  if (!/(?=.{8,})/i.test(value)) {
    return "The password must be eight characters or longer";
  } else if (!/(?=.*[a-z])/i.test(value)) {
    return "The password must contain at least 1 lowercase alphabetical character";
  } else if (!/(?=.*[A-Z])/i.test(value)) {
    return "The password must contain at least 1 uppercase alphabetical character";
  } else if (!/(?=.*[0-9])/i.test(value)) {
    return "The password must contain at least 1 numeric character";
  } else if (!/(?=.*[!@#$%^&-_*])/i.test(value)) {
    return "The password must contain at least one special character";
  }
}
export function validPhoneNumber(value: string): string | void {
  if (!/^\+?[0-9]{7,14}$/.test(value)) {
    return "Invalid phone number";
  }
}

export function is(cb: Function, ...args: any[]) {
  return !!cb(...args);
}

export function has(error?: string) {
  return !!error;
}
