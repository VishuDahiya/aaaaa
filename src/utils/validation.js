import validator from 'is_js';

const checkEmpty = (val, key) => {
  if (validator.empty(val.trim())) {
    return `Please enter ${key}`;
  } else {
    return '';
  }
};

const checkMinLength = (val, minLength, key) => {
  if (val.trim().length < minLength) {
    return `Please enter valid ${key}`;
  } else {
    return '';
  }
};

export default function (data) {
  let error = '';
  const {email, firstName, password, confirmPassword} = data;

  if (firstName !== undefined) {
    let emptyValidationText = checkEmpty(firstName, 'Name');
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(firstName, 1, 'Name');
      if (minLengthValidation !== '') {
        return minLengthValidation;
      }
    }
  }

  if (email !== undefined) {
    let emptyValidationText = checkEmpty(email, 'Email');
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      if (!validator.email(email)) {
        return 'Please enter valid email';
      }
    }
  }

  if (password !== undefined) {
    let emptyValidationText = checkEmpty(password, 'Password');
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(password, 1, 'Password');
      if (minLengthValidation !== '') {
        if (confirmPassword != undefined) {
          return 'Password requires minimum 3 characters';
        }
        return 'Password is incorrect';
      }
    }
  }
  if (confirmPassword !== undefined) {
    let emptyValidationText = checkEmpty(confirmPassword, 'confirmPassword');
    if (emptyValidationText !== '') {
      return emptyValidationText;
    }
    if (confirmPassword != password) {
      return "Password and Confirm Password didn't matched";
    }
  }
}
