<script setup lang="ts">
const email = ref('')
const password = ref('')
const loading = ref(false)
const login = async () => {
  if (isValid.value) {
	try {
		loading.value = true;
		await authService.signIn(email.value, password.value)
		navigateTo('/');
	} catch (error) {
    console.error(error)
		useErrorHandler(error, "Invalid login or password")
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

      <v-btn class="mt-2" type="submit" block @click="login" :loading="loading">Submit</v-btn>
    </v-form>
    <div class="d-flex flex-row mt-4">Still don't have an account?<v-spacer></v-spacer><NuxtLink
        to="/registration" class="text-blue">Registration</NuxtLink></div>
  </v-sheet>


</template>

<style scoped>

</style>