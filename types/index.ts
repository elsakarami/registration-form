export interface FormFields {
  email: string;
  password: string;
  acceptTerms:boolean
}

export interface PasswordErr {
  minLength: boolean;
  containsUppercase: boolean;
  containsLowercase: boolean;
  containsNumber: boolean;
  containsSpecialChar: boolean;
}