<script setup>
import FormComponent from '../components/CardForm.vue'
import {requiredRules} from '@/utils/rulesUtils'

import {ref} from 'vue'
import axios from "axios";
import {API_URL} from "@/utils/tools";
import router from "@/router";
import {tr} from "vuetify/locale";

const form = ref(true)
const loading = ref(false)
const showPassword = ref(false)
const alert = ref(false);
const data = ref({
  email: '',
  password: ''
})

const onSubmit = () => {
  if (!form.value) return
  loading.value = true
  const {email, password} = data.value;
  axios.post(`/auth/authenticate`,
      JSON.stringify({
        email,
        password
      }),
      {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true,
      }).then(res => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.refresh_token}`

    router.push('/');
    console.log(res);
    loading.value = false
  }).catch(error => {
    console.log(error)
    loading.value = false
    alert.value = true
  })
}
</script>

<template>
  <FormComponent
      title="Work smart"
      subtitle="Work with us "
      form-title="Login"
      form-subtitle="start working"
  >
    <v-form @submit.prevent="onSubmit" v-model="form">
      <v-text-field
          prepend-inner-icon="mdi-email"
          variant="underlined"
          v-model="data.email"
          :rules="[requiredRules]"
          label="Email"
      ></v-text-field>
      <v-text-field
          prepend-inner-icon="mdi-lock"
          variant="underlined"
          v-model="data.password"
          :rules="[requiredRules]"
          label="Password"
          name="input-10-1"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
      ></v-text-field>
      <v-alert v-model="alert" closable text="Coś poszło nie tak" type="error"></v-alert>

      <v-btn :loading="loading" :disabled="!form" type="submit" block class="bg-primary mt-2">
        Log In
      </v-btn>
      <div class="mt-4">or
        <RouterLink to="/register" class="text-blue">register</RouterLink>
      </div>
    </v-form>
  </FormComponent>
</template>

<style lang="scss" scoped></style>
