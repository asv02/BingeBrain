const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.{8,}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;

const SignUpValid = (SignUpInfo) => {
  let validate = {};
  if (!SignUpInfo.name?.trim()) {
    validate.name = "Enter valid name";
  }
  if (!SignUpInfo.email?.trim() || !emailRegex.test(SignUpInfo.email?.trim())) {
    validate.email = "Invalid Email";
  }
  if (
    !SignUpInfo.password?.trim() ||
    !passwordRegex.test(SignUpInfo.password?.trim())
  ) {
    validate.password = "Invalid Password";
  }
  return validate;
};

const LoginValid = (loginInfo) => {
  let validate = {};
  console.log("validation run.....");
  if (!loginInfo.email?.trim() || !emailRegex.test(loginInfo.email?.trim())) {
    validate.email = "Invalid Email";
  }
  if (
    !loginInfo.password?.trim() ||
    !passwordRegex.test(loginInfo.password?.trim())
  ) {
    validate.password = "Invalid Password";
  }
  return validate;
};

export const SignUpValidation = SignUpValid;
export const LoginValidation = LoginValid;
