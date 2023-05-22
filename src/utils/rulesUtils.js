const MAIL_REGEX = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/

export const requiredRules = (value) => {
    return !!value || 'Field is required'
  }

export const emailRules = (value) => {
    return !!value.match(MAIL_REGEX) || "It's not correct email"
}

export const equalPasswordsRule = (firstValue, secondValue) => {
  return firstValue === secondValue || "Passwords are not the same"
}

export const min8lengthRule = (value) => {
  return value.length >= 8 || 'Min 8 characters'
}