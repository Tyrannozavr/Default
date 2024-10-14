<script setup lang="ts">
const email = ref('')
const password = ref('')
const password2 = ref('')
const loading = ref(false)
const login = async () => {
  if (isValid.value) {
	try {
		loading.value = true;
		await authService.signUp(email.value, password.value)
		navigateTo('/');
	} catch (error) {
    let data = error._data
    console.error(JSON.stringify(data.error))
		useErrorHandler(error, 'This email is already exist')
	} finally {
		loading.value = false;
	}
  }
}
const isValid = ref(false)

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
const passwordRules = [
  value => {
    if (value) return true

    return 'Password is requred.'
  },
  value => {
    if (value.length > 5) return true

    return 'Email must be more than 5 characters.'
  },
]
const password2Rules = [
  value => {
    if (value === password.value) return true

    return 'Passwords don\'t match.'
  },
]

</script>
<template>
  <v-sheet class="mx-auto" width="300">
    <v-form @submit.prevent v-model="isValid">
      <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
      ></v-text-field>
      <v-text-field
          v-model="password"
          :rules="passwordRules"
          type="password"
          label="Password"
      ></v-text-field>
      <v-text-field
          v-model="password2"
          type="password"
          :rules="password2Rules"
          label="Repeat password"
      ></v-text-field>

      <v-btn class="mt-2" type="submit" block @click="login" :loading="loading">Submit</v-btn>
    </v-form>
  <div class="d-flex flex-row mt-4">Already has an account?<v-spacer></v-spacer><NuxtLink
      class="text-blue"
      to="/login">Login</NuxtLink></div>
  </v-sheet>
</template>

<style scoped>

</style>