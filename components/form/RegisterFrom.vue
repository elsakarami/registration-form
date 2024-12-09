<template>
  <div class="user-register">
    <section class="user-register__container">
      <form
        @submit.prevent="formValidator.handleSubmit"
        class="user-register__form form"
      >
        <h1 id="registerFormTitle" class="hidden">User Registration</h1>
        <fieldset class="form__field">
          <label for="email">{{ $t("email") }}</label>
          <input
            ref="emailField"
            type="email"
            id="email"
            v-model="form.email"
            aria-label="Enter your email address"
            aria-required="true"
            class="form__field__input"
          />
          <p
            v-if="formValidator.emailError"
            id="email-error"
            class="form__field__err"
            aria-live="polite"
          >
            {{ formValidator.emailError }}
          </p>
        </fieldset>

        <fieldset class="form__field">
          <label for="password">{{ $t("password") }}</label>
          <div class="relative mt-1">
            <input
              :type="passwordInputType"
              id="password"
              v-model="form.password"
              @input="formValidator.validPassword"
              aria-label="Enter your password"
              aria-required="true"
              class="form__field__input"
            />
            <button
              type="button"
              @click="formValidator.togglePasswordVisibility"
              class="form__field__visibility-btn"
              aria-label="Toggle password visibility"
            >
              <UIcon
                :name="
                  passwordInputType == 'text'
                    ? 'i-lucide-eye'
                    : 'i-lucide-eye-closed'
                "
                class="size-5"
              />
            </button>
          </div>
          <div class="py-6">
            <UProgress
              class="form__field__progress progress"
              :value="task"
              animation="elastic"
              :max="['Default', 'Weak', 'Weak', 'Medium', 'Medium', 'Strong']"
              :color="formValidator.progressBarColor"
            >
            </UProgress>
          </div>
          <div>
            <ul>
              <li
                v-for="(err, errKey) in formValidator.passwordError.value"
                :key="errKey"
              >
                <div
                  class="progress__error"
                  :class="err ? 'text-[#20C55E]' : 'text-[#EF4444]'"
                >
                  <UIcon
                    :name="
                      err ? 'i-lucide-circle-check-big' : 'i-lucide-circle-x'
                    "
                    class="size-5"
                  />
                  <p>{{ $t(`password_errors.${errKey}`) }}</p>
                </div>
              </li>
            </ul>
          </div>
        </fieldset>

        <fieldset class="form__term">
          <div class="flex items-center">
            <input
              id="terms"
              type="checkbox"
              v-model="form.acceptTerms"
              aria-describedby="terms-error"
              class="form__term__input"
            />
            <label for="terms" class="form__term__label">
              {{ $t("terms") }}
            </label>
          </div>
          <p
            v-if="formValidator.termsError"
            id="terms-error"
            class="form__term__error"
          >
            {{ formValidator.termsError }}
          </p>
        </fieldset>

        <button
          type="submit"
          :disabled="!formValidator.isFormValid"
          class="form__action"
        >
          {{ $t("actions.register") }}
        </button>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { FormValidator } from "../../composables/useFormValidator";
import type { FormFields } from "../../types";

const form = ref<FormFields>({
  email: "",
  password: "",
  acceptTerms: false,
});

const formValidator = new FormValidator(form.value);
const task = ref<number>(0);
const passwordInputType = computed(() =>
  formValidator.showPassword.value ? "text" : "password"
);

watch(
  () => formValidator.passwordStrength,
  (newStrength) => {
    task.value = newStrength;
  }
);
</script>
