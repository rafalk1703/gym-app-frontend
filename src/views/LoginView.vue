<script setup>
import FormComponent from '../components/CardForm.vue'
import { requiredRules} from '../utils/rulesUtils.js'

import { ref } from 'vue'

const form = ref(true)
const loading = ref(false)
const showPassword = ref(false)

const data = ref({
  login: '',
  password: ''
})

const onSubmit = () => {
  if (!form.value) return
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000) //TODO add auth
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
      <v-btn :loading="loading" :disabled="!form" type="submit" block class="bg-primary mt-2">
        Log In
      </v-btn>
      <div class="mt-4">or <RouterLink to="/register" class="text-blue">register</RouterLink></div>
    </v-form>
  </FormComponent>
</template>

<style lang="scss" scoped></style>
