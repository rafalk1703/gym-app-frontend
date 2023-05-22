<script setup>
import FormComponent from '../components/CardForm.vue'
import { ref } from 'vue'
import { requiredRules, emailRules, equalPasswordsRule, min8lengthRule as min8lengthRules} from '../utils/rulesUtils.js'

const form = ref(true)
const loading = ref(false)
const show1 = ref(false)
const show2 = ref(false)

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
  return equalPasswordsRule(data.value.password, data.value.repeatPassword)
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
        :rules="[requiredRules, repeatPasswordRules, min8lengthRules]"
        label="Password"
        name="input-10-1"
        counter
        :type="show1 ? 'text' : 'password'"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="show1 = !show1"

      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-lock-plus"
        variant="underlined"
        v-model="data.repeatPassword"
        :rules="[requiredRules, repeatPasswordRules]"
        label="Repeat password"
        name="input-10-2"
        counter
        :type="show2 ? 'text' : 'password'"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="show2 = !show2"

      ></v-text-field>
      <v-btn block :loading="loading" :disabled="!form" type="submit" class="bg-primary mt-2"
        >Sign In</v-btn
      >
    </v-form>
  </FormComponent>
</template>

<style lang="scss" scoped></style>
