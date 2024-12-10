import type { FormFields, PasswordErr } from "@/types/index";
import { useAxios } from "./useFetchData";
import { ref, computed } from "vue";

const toast = useToast()
const { error, loading, fetchData } = useAxios<any>(); 

function showNotification(title: string,description: string) {
    toast.add({
        id: 'notifications',
        title,
        description,
        timeout: 0
    });
}

export class FormValidator {
  public form: FormFields;
  public emailError = ref<string | null>(null);
  public passwordError = ref<PasswordErr>({
    minLength: false,
    containsUppercase: false,
    containsLowercase: false,
    containsNumber: false,
    containsSpecialChar: false,
  });
  public termsError = ref<string | null>(null);
  public showPassword = ref<boolean>(false);

  constructor(form: FormFields) {
    this.form = form;
  }

  public handleSubmit() {
    this.validEmail();
    this.validPassword();
    this.validTerms();
    if (this.isFormValid.value) {
      const register = async () => {
        try {
          await fetchData("http://192.168.2.107:5000/register", "POST", this.form);
          showNotification('Success','You are registered successfully')

        } catch (err) {
          showNotification('Error Occurred','There was a problem with your submission. Validation errors')
        }
      };
      return { error, loading, register };
    } else {
        showNotification('Error Occurred', `There was a problem with your submission.`)
    }
  }

  private validEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailError.value = regex.test(this.form.email)
      ? null
      : "Please enter a valid email address.";
  }

  private validPassword() {
    const password = this.form.password;
    this.passwordError.value = {
      minLength: password.length >= 8,
      containsUppercase: /[A-Z]/.test(password),
      containsLowercase: /[a-z]/.test(password),
      containsNumber: /[0-9]/.test(password),
      containsSpecialChar: /[^A-Za-z0-9]/.test(password),
    };
  }

  private validTerms() {
    this.termsError.value = this.form.acceptTerms
      ? null
      : "You must accept the terms of service to proceed.";
  }

  public togglePasswordVisibility() {
    this.showPassword.value = !this.showPassword.value;
  }

  public get passwordStrength(): number {
    return Object.values(this.passwordError.value).filter(Boolean).length;
  }

  public get progressBarColor() {
    const colors = ["red", "red", "red", "yellow", "yellow", "green"];
    return colors[Math.min(this.passwordStrength, colors.length - 1)];
  }

  public isFormValid = computed(() => {
    return (
      !!this.form.email &&
      !!this.form.password &&
      this.passwordStrength > 1 &&
      !this.emailError.value &&
      !!this.form.acceptTerms
    );
  });
}
