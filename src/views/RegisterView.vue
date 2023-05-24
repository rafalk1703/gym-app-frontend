<script setup>
import FormComponent from '../components/CardForm.vue'
import { ref } from 'vue'
import { requiredRules, emailRules, equalPasswordsRules, min8lengthRules} from '../utils/rulesUtils.js'

const form = ref(true)
const loading = ref(false)
const showPassword = ref(false)
const showRepeatPassword = ref(false)

const data = ref({
  login: '',
  email: '',
  password: '',
  repeatPassword: ''
})
const onSubmit = () => {
  if (!form.value) return
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000) //TODO add auth
}


const repeatPasswordRules = () => {
  return equalPasswordsRules(data.value.password, data.value.repeatPassword)
}
</script>

<template>
  <FormComponent
    title="Work smart"
    subtitle="Work with us "
    form-title="Register"
    form-subtitle="join to us"
  >
    <v-form @submit.prevent="onSubmit" v-model="form">
      <v-text-field
        prepend-inner-icon="mdi-account"
        variant="underlined"
        v-model="data.login"
        :rules="[requiredRules]"
        label="Login"
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-email"
        variant="underlined"
        v-model="data.email"
        :rules="[requiredRules, emailRules]"
        label="Email"
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-lock"
        variant="underlined"
        v-model="data.password"
        :rules="[requiredRules, min8lengthRules]"
        label="Password"
        name="input-10-1"
        counter
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-lock-plus"
        variant="underlined"
        v-model="data.repeatPassword"
        :rules="[requiredRules, repeatPasswordRules]"
        label="Repeat password"
        name="input-10-2"
        counter
        :type="showRepeatPassword ? 'text' : 'password'"
        :append-icon="showRepeatPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showRepeatPassword = !showRepeatPassword"

      ></v-text-field>
      <v-btn block :loading="loading" :disabled="!form" type="submit" class="bg-primary mt-2"
        >Sign In</v-btn
      >
      <div class="mt-4">or <RouterLink to="/login" class="text-blue">log in</RouterLink></div>

    </v-form>
  </FormComponent>
</template>

<style lang="scss" scoped></style>
