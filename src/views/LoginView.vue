<script setup>

</script>

<template>
  <v-container fluid="true" class="ma-0 pa-0">
    <v-row no-gutters class="">
      <v-col cols="12" sm="12" md="6" class="mh-100 d-md-block d-sm-none">
        <v-img
          width="100%"
          height="100%"
          cover
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="12" md="6" class="mh-100">
        <v-container class="h-100">
          <v-row class="h-100" no-gutters>
            <v-col align-self="center" align="center">
              <v-card width="426px" class="card rounded-xl">
                <div class="card__title-section">
                  <h1 class="card__title">Register</h1>
                  <h2 class="card__subtitle">Join to us</h2>
                </div>
                <v-form @submit.prevent>
                  <v-text-field
                    prepend-inner-icon="mdi-account"
                    variant="underlined"
                    v-model="login"
                    :rules="rules"
                    label="Login"
                  ></v-text-field>
                  <v-text-field
                    prepend-inner-icon="mdi-email"
                    variant="underlined"
                    v-model="email"
                    :rules="emailRules"
                    label="Email"
                  ></v-text-field>
                  <v-text-field
                    prepend-inner-icon="mdi-lock"
                    variant="underlined"
                    v-model="password"
                    :rules="rules"
                    label="Password"
                  ></v-text-field>
                  <v-text-field
                    prepend-inner-icon="mdi-lock-plus"
                    variant="underlined"
                    v-model="repeatPassword"
                    :rules="rules"
                    label="Repeat password"
                  ></v-text-field>
                  <v-btn type="submit" block class="bg-primary mt-2">Sign In</v-btn>
                </v-form>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
