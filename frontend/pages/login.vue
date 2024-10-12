<script setup lang="ts">
const email = ref('')
const password = ref('')
const lastname = ref('')
const firstname = ref('')
const form = ref(null)
const login = async () => {
  await authService.signIn(email.value, password.value)
}
const isValid = ref(false)

const nameRules = [
  value => {
    if (value) return true

    return 'Name is required.'
  },
  value => {
    if (value?.length <= 10) return true

    return 'Name must be less than 10 characters.'
  },
]
const emailRules = [
  value => {
    if (value) return true

    return 'E-mail is requred.'
  },
  value => {
    if (/.+@.+\..+/.test(value)) return true

    return 'E-mail must be valid.'
  },
]

</script>
<template>
  <v-form v-model="isValid" ref="form">
    <v-container>
      <v-row>
        <v-col
            cols="12"
            md="4"
        >
          <v-text-field
              v-model="firstname"
              :counter="10"
              :rules="nameRules"
              label="First name"
              hide-details
              required
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            md="4"
        >
          <v-text-field
              v-model="lastname"
              :counter="10"
              :rules="nameRules"
              label="Last name"
              hide-details
              required
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            md="4"
        >
          <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              hide-details
              required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <v-btn>Login</v-btn>
</template>

<style scoped>

</style>