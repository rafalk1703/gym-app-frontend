<script setup>
import FormComponent from '../components/CardForm.vue'
</script>

<template>
  <FormComponent
    title="Work smart"
    subtitle="Work with us "
    form-title="Login"
    form-subtitle="start working"
  >
    <v-form @submit.prevent>
      <v-text-field
        prepend-inner-icon="mdi-account"
        variant="underlined"
        v-model="login"
        :rules="rules"
        label="Login"
      ></v-text-field>

      <v-text-field
        prepend-inner-icon="mdi-lock"
        variant="underlined"
        v-model="password"
        :rules="rules"
        label="Password"
      ></v-text-field>
      <v-btn :loading="loading" :disabled="!form" type="submit" block class="bg-primary mt-2">
        Log In
      </v-btn>
      <div class="mt-4">or register</div>
    </v-form>
  </FormComponent>
</template>

<style lang="scss" scoped></style>
