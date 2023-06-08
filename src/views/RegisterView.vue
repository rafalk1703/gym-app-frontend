<script setup>
import FormComponent from '../components/CardForm.vue'
import {ref} from 'vue'
import {requiredRules, emailRules, equalPasswordsRules, min8lengthRules} from '@/utils/rulesUtils'
import {API_URL} from "@/utils/tools";
import axios from "axios";
import router from "@/router";

const form = ref(true)
const loading = ref(false)
const showPassword = ref(false)
const showRepeatPassword = ref(false)
const alert = ref(false);


const data = ref({
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  repeatPassword: ''
})
const onSubmit = () => {
  if (!form.value) return
  loading.value = true
  const {firstname, lastname, email, password} = data.value;
  axios(`/auth/register`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      firstname,
      lastname,
      email,
      password
    })
  }).then(res => {
    router.push('/login');
    console.log(res);
    loading.value = false
  }).catch(error => {
    console.log(error)
    loading.value = false
    alert.value = true

  })
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
          v-model="data.firstname"
          :rules="[requiredRules]"
          label="Firstname"
      ></v-text-field>
      <v-text-field
          prepend-inner-icon="mdi-account"
          variant="underlined"
          v-model="data.lastname"
          :rules="[requiredRules]"
          label="Firstname"
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
      <v-alert v-model="alert" closable text="Coś poszło nie tak" type="error"></v-alert>

      <v-btn block :loading="loading" :disabled="!form" type="submit" class="bg-primary mt-2"
      >Sign In
      </v-btn
      >
      <div class="mt-4">or
        <RouterLink to="/login" class="text-blue">log in</RouterLink>
      </div>

    </v-form>
  </FormComponent>
</template>

<style lang="scss" scoped></style>
